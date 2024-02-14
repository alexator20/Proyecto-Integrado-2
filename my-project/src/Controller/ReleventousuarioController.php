<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ReleventousuarioController extends AbstractController
{
    #[Route('/releventousuario', name: 'app_releventousuario')]
    public function index(): Response
    {
        return $this->render('releventousuario/index.html.twig', [
            'controller_name' => 'ReleventousuarioController',
        ]);
    }
}
