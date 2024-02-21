<?php

namespace App\Repository;

use App\Entity\RelUsuarioEvento;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<RelUsuarioEvento>
 *
 * @method RelUsuarioEvento|null find($id, $lockMode = null, $lockVersion = null)
 * @method RelUsuarioEvento|null findOneBy(array $criteria, array $orderBy = null)
 * @method RelUsuarioEvento[]    findAll()
 * @method RelUsuarioEvento[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RelUsuarioEventoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RelUsuarioEvento::class);
    }

//    /**
//     * @return RelUsuarioEvento[] Returns an array of RelUsuarioEvento objects
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

//    public function findOneBySomeField($value): ?RelUsuarioEvento
//    {
//        return $this->createQueryBuilder('r')
//            ->andWhere('r.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
