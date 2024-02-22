<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Usuario;
use App\Entity\Grupo;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\ORM\EntityManagerInterface;
use PhpParser\Node\Stmt\TryCatch;

class UsuarioController extends AbstractController
{
    private $em;
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    #[Route('/usuario', name: 'app_usuario')]
    public function index(): Response
    {
        return $this->render('usuario/index.html.twig', [
            'controller_name' => 'UsuarioController',
        ]);
    }

    #[Route('/user_api', name: 'user_api', methods: ['get'])]
    public function indice(ManagerRegistry $doctrine): JsonResponse
    {
        $products = $doctrine
            ->getRepository(Usuario::class)
            ->findAll();

        $data = [];

        foreach ($products as $product) {
            $data[] = [
                'id' => $product->getId(),
                'name' => $product->getNombre(),
                'edad' => $product->getEdad(),
                'rol' => $product->getRol(),
                'grupoid' => $product->getGrupoPerteneciente()->getId(),
                'gruponame' => $product->getGrupoPerteneciente()->getNombre(),
                'gruposeccion' => $product->getGrupoPerteneciente()->getSeccion(),
            ];
        }

        return $this->json($data);
    }

    #[Route('/insertUser', name: 'app_insert')]
    public function add(Request $request): JsonResponse
    {
        $recibe = json_decode($request->getContent(), true);

        $nombre = $recibe['nombre'];
        $grupoId = $recibe['grupo_perteneciente_id'];
        $edad = $recibe['edad'];
        $rol = $recibe['rol'];
        $pass = $recibe['password'];

        try {
            // Obtener el objeto Grupo correspondiente al ID del grupo
            $grupo = $this->em->getRepository(Grupo::class)->find($grupoId);

            if (!$grupo) {
                throw new \Exception('El grupo especificado no existe.');
            }

            $nuevo = new Usuario();
            $nuevo->setNombre($nombre);
            $nuevo->setGrupoPerteneciente($grupo);
            $nuevo->setEdad($edad);
            $nuevo->setRol($rol);
            $nuevo->setPassword($pass);

            // Persistencia
            $this->em->persist($nuevo);
            $this->em->flush();

            return new JsonResponse(['message' => 'Usuario creado correctamente.'], JsonResponse::HTTP_CREATED);
        } catch (\Exception $e) {
            return new JsonResponse(['error' => $e->getMessage()], JsonResponse::HTTP_BAD_REQUEST);
        }
    }

    #[Route('/viewUsers', name: 'app_listUsers')]
    public function listUsers(Request $request): Response
    {
        $userRepo = $this->em->getRepository(Usuario::class);
        $users = $userRepo->findAll();

        // Convertir los datos a un arreglo asociativo
        $usersArray = [];
        foreach ($users as $user) {
            $usersArray[] = [
                'id' => $user->getId(),
                'nombre' => $user->getNombre(),
                'grupo_perteneciente_id' => $user->getGrupoPerteneciente(),
                'edad' => $user->getEdad(),
                'rol' => $user->getRol(),
                'password' => $user->getPassword()
            ];
        }

        // Devolver los datos como una respuesta JSON
        return new JsonResponse($usersArray);
    }

    //api que recibe datos y comprueba si existe el usuario y envia su informacion
    #[Route('/apiUser', name: 'api_user', methods: ['post'])]
    public function oneuser(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $data = [];
        $recibe = json_decode($request->getContent(), true);
        $products = $doctrine
            ->getRepository(Usuario::class)
            ->findOneBy(array('nombre' => $recibe['nombre']));


        if ($products->getNombre() != null) {
            if (password_verify($recibe['password'], $products->getPassword())) {

                $data[] = [
                    'id' => $products->getId(),
                    'name' => $products->getNombre(),
                    'edad' => $products->getEdad(),
                    'rol' => $products->getRol(),
                    'grupoid' => $products->getGrupoPerteneciente()->getId(),
                    'gruponame' => $products->getGrupoPerteneciente()->getNombre(),
                    'gruposeccion' => $products->getGrupoPerteneciente()->getSeccion(),
                ];


                return $this->json($data);

            } else {
                return new JsonResponse(['message' => 'este no es su contraseña'], 200);
            }
        } else {
            return new JsonResponse(['message' => 'este usuario no existe'], 200);
        }
    }


    //PRUEBAAAAAAAAAAAAAAAAAAS
    #[Route('/prueba', name: 'app_prueba')]
    public function prueba(ManagerRegistry $doctrine, Request $request)
    {
        $entityManager = $doctrine->getManager();
        $project = new Usuario();

        $project->setNombre("emilio");
        $password = "prueba";
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $product = $entityManager->getRepository(Grupo::class)->find(4);
        $project->setPassword($hashedPassword);
        $project->setEdad(28);
        $project->setRol("admin");
        $project->setGrupoPerteneciente($product);
        $entityManager->persist($project);
        $entityManager->flush();

        return $this->render('usuario/index.html.twig', [
            'controller_name' => 'UsuarioController',
        ]);
    }



    #[Route('/jaja', name: 'jaja', methods: ['get', 'post'])]
    public function pu(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $products = $doctrine
            ->getRepository(Usuario::class)
            ->findOneBy(['nombre' => 'davit']);

        $data = [];
        if (password_verify('prueba', $products->getPassword())) {
            if ($products->getNombre() != null) {

                $data[] = [
                    'id' => $products->getId(),
                    'name' => $products->getNombre(),
                    'edad' => $products->getEdad(),
                    'rol' => $products->getRol(),
                    'grupoid' => $products->getGrupoPerteneciente()->getId(),
                    'gruponame' => $products->getGrupoPerteneciente()->getNombre(),
                    'gruposeccion' => $products->getGrupoPerteneciente()->getSeccion(),
                ];


                return $this->json($data);
            } else {
                $data[] = [
                    'exception' => "no se encontro el usuario",
                ];

                return $this->json($data);
            }
        } else {
            $data[] = [
                'exception' => "no es la contraseña",
            ];
            return $this->json($data);
        }
    }
}
