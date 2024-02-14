<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GrupoController extends AbstractController
{
    #[Route('/grupo', name: 'app_grupo')]
    public function index(): Response
    {
        return $this->render('grupo/index.html.twig', [
            'controller_name' => 'GrupoController',
        ]);
    }
}
