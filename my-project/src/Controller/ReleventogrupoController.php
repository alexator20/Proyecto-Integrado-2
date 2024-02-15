<?php
namespace App\Controller;
use App\Entity\RelGrupoEvento;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use DateTime;


class ReleventogrupoController extends AbstractController
{
    // entity manager en constructor
    private $em;
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }
    
    #[Route('/test', name: 'app_cliente')]
    public function list(Request $request): Response
    {
        $clienteRepository = $this->em->getRepository(RelGrupoEvento::class)->findAll();

        return $this->render('releventogrupo/index.html.twig', [
            'controller_name'=>'bro me da igual',
            'resultados' => $clienteRepository
        ]);
    }
}
