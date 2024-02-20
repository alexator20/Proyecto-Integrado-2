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
}
