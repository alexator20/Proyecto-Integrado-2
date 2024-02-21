<?php
namespace App\Controller;
use App\Entity\RelGrupoEvento;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\JsonResponse;
use DateTime;


class ReleventogrupoController extends AbstractController
{
    // entity manager en constructor
    private $em;
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }
    
    #[Route('/test', name: 'app_test')]
    public function list(Request $request): Response
    {
        $clienteRepository = $this->em->getRepository(RelGrupoEvento::class)->findAll();

        return $this->render('releventogrupo/index.html.twig', [
            'controller_name'=>'bro me da igual',
            'resultados' => $clienteRepository
        ]);
    }

    #[Route('/puntajes', name: 'app_cliente')]
    public function tuMetodo(EntityManagerInterface $entityManager): Response
    {
        $query = $entityManager->createQuery(
            'SELECT grupo.id, grupo.nombre, SUM(rel.puntuacionEventoGrupo) AS total
            FROM App\Entity\RelGrupoEvento rel
            JOIN rel.grupo grupo
            GROUP BY grupo.id, grupo.nombre'
        );

        $results = $query->getResult();
        /* var_dump($results);
        die(); */
        return $this->render('releventogrupo/index.html.twig', [
            'controller_name'=>'bro me da igual',
            'resultados' => $results
        ]);

        // Manejar los resultados, renderizar una plantilla, etc.
    }


    #[Route('/relgrupoevento_api', name: 'relgrupoevento_api', methods:['get'] )]
    public function indice(ManagerRegistry $doctrine, EntityManagerInterface $entityManager): JsonResponse
    {
        $query = $entityManager->createQuery(
            'SELECT grupo.id, grupo.nombre, SUM(rel.puntuacionEventoGrupo) AS total
            FROM App\Entity\RelGrupoEvento rel
            JOIN rel.grupo grupo
            GROUP BY grupo.id, grupo.nombre'
        );

        $results = $query->getResult();

        $data = [];
   
        for ($i=0; $i < count($results); $i++) { 
            $data[] = [
                'id' => $results[$i]['id'],
                'nombre' => $results[$i]['nombre'],
                'puntos' => $results[$i]['total'],
            ];
        }
   
        return $this->json($data);
    }

    #[Route('/relgrupoevento_api2', name: 'relgrupoevento_api2', methods:['get'] )]
    public function prueba(ManagerRegistry $doctrine, EntityManagerInterface $entityManager): JsonResponse
    {
        $query = $entityManager->createQuery(
            'SELECT grupo.id, grupo.nombre, grupo.seccion, SUM(r.puntuacionEventoGrupo) AS total
            FROM App\Entity\RelGrupoEvento r
            JOIN r.grupo grupo
            WHERE grupo.seccion = :seccion
            GROUP BY grupo.id'
        );
        $query->setParameter('seccion', 'Tropa');
        $results = $query->getResult();
        $data = [];
   
        for ($i=0; $i < count($results); $i++) { 
            $data[] = [
                'id' => $results[$i]['id'],
                'nombre' => $results[$i]['nombre'],
                'puntos' => $results[$i]['total'],
                'seccion' => $results[$i]['seccion'],
            ];
        }
   
        return $this->json($data);
    }
}
