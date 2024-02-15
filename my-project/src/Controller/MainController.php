<?php

namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use DateTime;


class MainController extends AbstractController
{
    private $em;
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }
    #[Route('/', name: 'app_home')]
    public function home(): Response
    {
        return $this->render('grupo/index.html.twig', [
            'controller_name' => 'EventoController',
        ]);
    }

    #[Route('/clients', name: 'app_cliente')]
    public function list(Request $request): Response
    {
        $clienteRepository = $this->em->getRepository(ReleventogrupoController::class)->findAll();

        return $this->render('client/index.html', [
            'resultados' => $clienteRepository
        ]);
    }
}
