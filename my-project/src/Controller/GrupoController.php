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
        return $this->redirectToRoute('app_grupo');
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
