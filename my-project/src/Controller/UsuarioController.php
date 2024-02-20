<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Usuario;
use App\Entity\grupo;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UsuarioController extends AbstractController
{
    #[Route('/usuario', name: 'app_usuario')]
    public function index(): Response
    {
        return $this->render('usuario/index.html.twig', [
            'controller_name' => 'UsuarioController',
        ]);
    }

    #[Route('/user_api', name: 'user_api', methods:['get'] )]
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

    #[Route('/insert', name: 'app_insert', methods:['post'] )]
    public function create(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $entityManager = $doctrine->getManager();
        $project = new Usuario();

        $project->setNombre($request->request->get('name'));
        $password = $request->request->get('password');
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        
        $project->setPassword($hashedPassword);
        $project->setEdad($request->request->get('edad'));
        $project->setGrupoPerteneciente($request->request->get('grupo'));
        $entityManager->persist($project);
        $entityManager->flush();
   
        $data =  [
            'id' => $project->getId(),
            'name' => $project->getNombre(),
            'edad' => $project->getEdad(),
            'grupo' => $project->getGrupoPerteneciente()->getNombre(),
            'seccion' => $project->getGrupoPerteneciente()->getSeccion(),
        ];
           
        return $this->json($data);
    }

    //api que recibe datos y comprueba si existe el usuario y envia su informacion
    #[Route('/api_user', name: 'api_user', methods:['post'] )]
    public function oneuser(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $data = [];
        $recibe=json_decode($request->getContent(), true);
        $products = $doctrine
            ->getRepository(Usuario::class)
            ->findOneBy($recibe['name']);
    

        if($products->getNombre()!=null){
        if (password_verify($recibe['pass'], $products->getPassword())) {
        
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
            
        }else{
            return new JsonResponse(['message'=>'este no es su contraseña'], 201);
        }}else{
            return new JsonResponse(['message'=>'este usuario no existe'], 200);
        }
    }


//PRUEBAAAAAAAAAAAAAAAAAAS
    #[Route('/prueba', name: 'app_prueba')]
    public function prueba(ManagerRegistry $doctrine, Request $request)
    {
        $entityManager = $doctrine->getManager();
        $project = new Usuario();

        $project->setNombre("davit");
        $password = "prueba";
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $product = $entityManager->getRepository(grupo::class)->find(4);
        $project->setPassword($hashedPassword);
        $project->setEdad(21);
        $project->setRol("admin");
        $project->setGrupoPerteneciente($product);
        $entityManager->persist($project);
        $entityManager->flush();
   
        return $this->render('usuario/index.html.twig', [
            'controller_name' => 'UsuarioController',
        ]);
    }



    #[Route('/jaja', name: 'jaja', methods:['get','post'] )]
    public function pu(ManagerRegistry $doctrine, Request $request): JsonResponse
    {
        $products = $doctrine
            ->getRepository(Usuario::class)
            ->findOneBy(['nombre' => 'davit']);
   
        $data = [];
        if (password_verify('prueba', $products->getPassword())) {
        if($products->getNombre()!=null){
            
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
        }else{
                $data[] = [
                    'exception' => "no se encontro el usuario",
                ];
        
             return $this->json($data);
        }}else{
            $data[] = [
                'exception' => "no es la contraseña",
            ];
            return $this->json($data);
        }
    }
}
