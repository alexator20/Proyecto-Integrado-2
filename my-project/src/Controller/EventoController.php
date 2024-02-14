<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EventoController extends AbstractController
{
    #[Route('/evento', name: 'app_evento')]
    public function index(): Response
    {
        return $this->render('evento/index.html.twig', [
            'controller_name' => 'EventoController',
        ]);
    }
}
