<?php

namespace App\Controller;

use App\Entity\Grupo;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;

class GrupoController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function home(): Response
    {
        return $this->redirectToRoute('app_grupo');
    }

    #[Route('/grupo', name: 'app_grupo')]
    public function index(): Response
    {
        return $this->render('grupo/index.html.twig', [
            'controller_name' => 'GrupoController',
        ]);
    }

    #[Route('/grupo', name: 'grupo_api', methods:['get'] )]
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
