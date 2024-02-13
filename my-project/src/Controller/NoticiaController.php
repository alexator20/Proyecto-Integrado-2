<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Noticia;
use Doctrine\ORM\EntityManagerInterface;
use App\Form\NoticiaType;

class NoticiaController extends AbstractController
{
    private $em;
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }
    #[Route('/noticia', name: 'app_noticia')]
    public function index(): Response
    {
        return $this->render('noticia/index.html.twig', [
            'controller_name' => 'NoticiaController',
        ]);
    }
    #[Route('/pruebanoticia', name: 'pagos_form')]
    public function pagos(Request $request): Response
    {

        $producto = new Noticia();
        $form = $this->createForm(NoticiaType::class, $producto);
        $form->handleRequest($request);
       
            if ($form->isSubmitted() && $form->isValid()) {
                $this->em->persist($producto);
                $this->em->flush();
                return $this->redirectToRoute('app_noticia');
            }
        
        return $this->render('base.html.twig', [
            'form' => $form->createView()
        ]);
    }

    #[Route('/projects', name: 'project_index', methods:['get'] )]
    public function indice(ManagerRegistry $doctrine): JsonResponse
    {
        $products = $doctrine
            ->getRepository(Noticia::class)
            ->findAll();
   
        $data = [];
   
        foreach ($products as $product) {
           $data[] = [
               'id' => $product->getId(),
               'name' => $product->getNombre(),
               'description' => $product->getDescripcion(),
               'fecha' => $product->getFecha(),
           ];
        }
   
        return $this->json($data);
    }
    
}
