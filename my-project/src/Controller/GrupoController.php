<?php

namespace App\Controller;
use App\Entity\Grupo;
use App\Entity\RelGrupoEvento;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;


class GrupoController extends AbstractController
{
    private $em;
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    #[Route('/', name: 'app_home')]
    public function home(): Response
    {
        return $this->redirectToRoute('app_testf');
    }

    #[Route('/grupo', name: 'app_grupo')]
    public function index(): Response
    {
        $eventoGrupoRepository = $this->em->getRepository(RelGrupoEvento::class)->findAll();

        return $this->render('grupo/index.html.twig', [
            'controller_name' => 'GrupoController',
            'resultados' => $eventoGrupoRepository
        ]);
    }

    #[Route('/testF', name: 'app_ttf')]
    public function testeame(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        // Aquí puedes acceder a los datos del formulario
        $username = $data['username'];
        $password = $data['password'];
        // etc.
        
        // Procesa los datos como desees, por ejemplo, guardarlos en la base de datos
        return $this->render('grupo/megatest.html.twig', [
            'nombre' => $username,
            'email' => $password,
            // Pasa otras variables según sea necesario
        ]);
        // Devuelve una respuesta
        new JsonResponse(['message' => 'Datos recibidos y procesados correctamente'], 200);
    
    }

    #[Route('/testForm', name: 'app_testf', methods: ['POST'])]
    public function testeameEsta(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        // Aquí puedes acceder a los datos del formulario
        $username = $data['username'];
        $password = $data['password'];
        // etc.

        // Renderiza la plantilla Twig directamente en la acción
        return $this->render('grupo/megatest.html.twig', [
            'nombre' => $username,
            'email' => $password,
            // Pasa otras variables según sea necesario
        ]);
    }

    #[Route('/testRender', name: 'app_rend')]
    public function testeameP(Request $request): Response
    {
        $username = $request->get('username');
        $password = $request->get('password');

        // Verificar si se reciben los parámetros correctamente
        dump($username, $password);

        // Aquí puedes acceder a los datos del formulario
        // $username y $password están disponibles directamente

        return $this->render('grupo/megatest.html.twig', [
            'nombre' => $username,
            'email' => $password,
            // Pasa otras variables según sea necesario
        ]);
    }

    //Api que envia datos de la tabla Grupo
    #[Route('/grupo_api', name: 'grupo_api', methods:['get'] )]
    public function indice(ManagerRegistry $doctrine): JsonResponse
    {
        $products = $doctrine
            ->getRepository(Grupo::class)
            ->findAll();
   
        $data = [];
   
        foreach ($products as $product) {
           $data[] = [
               'id' => $product->getId(),
               'name' => $product->getNombre(),
               'seccion' => $product->getSeccion(),
           ];
        }
   
        return $this->json($data);
    }

    #[Route('/viewGrupos', name: 'app_listGrupos')]
    public function listUsers(Request $request): Response
    {
        $grupoRepo = $this->em->getRepository(Grupo::class);

        // Parámetros de paginación
        $page = $request->query->getInt('page', 1); // Página actual, por defecto la primera página
        $limit = $request->query->getInt('limit', 10); // Cantidad de elementos por página

        // Calcula el offset
        $offset = ($page - 1) * $limit;

        // Recupera los usuarios con la paginación
        $grupos = $grupoRepo->findBy([], [], $limit, $offset);

        // Recupera el número total de usuarios
        $totalUsers = count($grupoRepo->findAll());

        // Calcula el número total de páginas
        $totalPages = ceil($totalUsers / $limit);

        // Convertir los datos a un arreglo asociativo
        $usersArray = [];
        foreach ($grupos as $grupo) {
            $usersArray[] = [
                'id' => $grupo->getId(),
                'nombre' => $grupo->getNombre(),
                'seccion' => $grupo->getSeccion()
            ];
        }

        // Arreglo de respuesta
        $responseArray = [
            'grupos' => $usersArray,
            'lastPage' => $totalPages
        ];

        // Devolver los datos como una respuesta JSON
        return new JsonResponse($responseArray);
    }

    #[Route('/deleteGroup/{id}', name: 'app_delGr')]
    public function delUser(Request $request, $id): JsonResponse
    {
        //
        try {
            // Obtener el usuario existente por su ID
            $usuario = $this->em->getRepository(Grupo::class)->find($id);

            if (!$usuario) {
                throw new \Exception('El grupo especificado no existe.');
            }
            $this->em->remove($usuario);
            // Persistencia de los cambios
            $this->em->flush();

            return new JsonResponse(['message' => 'Grupo actualizado correctamente.'], JsonResponse::HTTP_OK);
        } catch (\Exception $e) {
            return new JsonResponse(['error' => $e->getMessage()], JsonResponse::HTTP_BAD_REQUEST);
        }
    }

    #[Route('/updateGroup/{id}', name: 'app_updateGr')]
    public function update(Request $request, $id): JsonResponse
    {
        $recibe = json_decode($request->getContent(), true);

        $nombre = $recibe['nombre'];
        $seccion = $recibe['seccion'];

        try {
            // Obtener el usuario existente por su ID
            $grupo = $this->em->getRepository(Grupo::class)->find($id);


            if (!$grupo) {
                throw new \Exception('El grupo especificado no existe.');
            }

            // Actualizar los campos del usuario
            $grupo->setNombre($nombre);
            $grupo->getSeccion($grupo);

            // Persistencia de los cambios
            $this->em->flush();

            return new JsonResponse(['message' => 'Usuario actualizado correctamente.'], JsonResponse::HTTP_OK);
        } catch (\Exception $e) {
            return new JsonResponse(['error' => $e->getMessage()], JsonResponse::HTTP_BAD_REQUEST);
        }
    }

    #[Route('/insertGrupo', name: 'app_insertGr')]
    public function add(Request $request): JsonResponse
    {
        $recibe = json_decode($request->getContent(), true);

        $nombre = $recibe['nombre'];
        $seccion = $recibe['seccion'];

        try {
            

            $nuevo = new Grupo();
            $nuevo->setNombre($nombre);
            $nuevo->setSeccion($seccion);
            // Persistencia
            $this->em->persist($nuevo);
            $this->em->flush();

            return new JsonResponse(['message' => 'Grupo creado correctamente.'], JsonResponse::HTTP_CREATED);
        } catch (\Exception $e) {
            return new JsonResponse(['error' => $e->getMessage()], JsonResponse::HTTP_BAD_REQUEST);
        }
    }
}
