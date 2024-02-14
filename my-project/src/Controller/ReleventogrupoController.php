<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ReleventogrupoController extends AbstractController
{
    #[Route('/releventogrupo', name: 'app_releventogrupo')]
    public function index(): Response
    {
        return $this->render('releventogrupo/index.html.twig', [
            'controller_name' => 'ReleventogrupoController',
        ]);
    }
}
