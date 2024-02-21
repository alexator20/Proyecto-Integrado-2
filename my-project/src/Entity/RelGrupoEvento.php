<?php

namespace App\Entity;

use App\Repository\RelGrupoEventoRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RelGrupoEventoRepository::class)]
class RelGrupoEvento
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'relGrupoEventos')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Grupo $grupo = null;

    #[ORM\ManyToOne(inversedBy: 'relGrupoEventos')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Evento $evento = null;

    #[ORM\Column(nullable: true)]
    private ?int $puntuacionEventoGrupo = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getGrupo(): ?Grupo
    {
        return $this->grupo;
    }

    public function setGrupo(?Grupo $grupo): static
    {
        $this->grupo = $grupo;

        return $this;
    }

    public function getEvento(): ?Evento
    {
        return $this->evento;
    }

    public function setEvento(?Evento $evento): static
    {
        $this->evento = $evento;

        return $this;
    }

    public function getPuntuacionEventoGrupo(): ?int
    {
        return $this->puntuacionEventoGrupo;
    }

    public function setPuntuacionEventoGrupo(?int $puntuacionEventoGrupo): static
    {
        $this->puntuacionEventoGrupo = $puntuacionEventoGrupo;

        return $this;
    }
}
