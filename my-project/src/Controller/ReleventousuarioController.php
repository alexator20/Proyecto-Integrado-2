<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\RelUsuarioEvento;

class ReleventousuarioController extends AbstractController
{
    #[Route('/releventousuario', name: 'app_releventousuario')]
    public function index(): Response
    {
        return $this->render('releventousuario/index.html.twig', [
            'controller_name' => 'ReleventousuarioController',
        ]);
    }
    //Api que envia datos de la tabla relacionada
    #[Route('/releventouser_api', name: 'releventouser_api', methods:['get'] )]
    public function indice(ManagerRegistry $doctrine): JsonResponse
    {
        $products = $doctrine
            ->getRepository(RelUsuarioEvento::class)
            ->findAll();
   
        $data = [];
   
        foreach ($products as $product) {
           $data[] = [
               'id' => $product->getId(),
               'userid' => $product->getUsuario()->getId(),
               'eventoid' => $product->getEvento()->getId(),

           ];
        }
   
        return $this->json($data);
    }
}
