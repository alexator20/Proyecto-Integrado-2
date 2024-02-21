<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Evento;

class EventoController extends AbstractController
{
    #[Route('/evento', name: 'app_evento')]
    public function index(): Response
    {
        return $this->render('evento/index.html.twig', [
            'controller_name' => 'EventoController',
        ]);
    }

    //Api que envia datos de la tabla Evento
    #[Route('/evento_api', name: 'evento_api', methods:['get'] )]
    public function indice(ManagerRegistry $doctrine): JsonResponse
    {
        $products = $doctrine
            ->getRepository(Evento::class)
            ->findAll();
   
        $data = [];
   
        foreach ($products as $product) {
           $data[] = [
               'id' => $product->getId(),
               'name' => $product->getNombre(),
               'fecha' => $product->getFecha(),
               'participantes' => $product->getNumeroparticipantes(),
           ];
        }
   
        return $this->json($data);
    }
}
