<?php

namespace App\Repository;

use App\Entity\RelGrupoEvento;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<RelGrupoEvento>
 *
 * @method RelGrupoEvento|null find($id, $lockMode = null, $lockVersion = null)
 * @method RelGrupoEvento|null findOneBy(array $criteria, array $orderBy = null)
 * @method RelGrupoEvento[]    findAll()
 * @method RelGrupoEvento[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RelGrupoEventoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RelGrupoEvento::class);
    }

//    /**
//     * @return RelGrupoEvento[] Returns an array of RelGrupoEvento objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('r.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?RelGrupoEvento
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
