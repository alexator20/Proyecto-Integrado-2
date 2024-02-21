<?php

namespace App\Entity;

use App\Repository\EventoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EventoRepository::class)]
class Evento
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nombre = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $fecha = null;

    #[ORM\Column]
    private ?int $numeroparticipantes = null;

    #[ORM\OneToMany(targetEntity: RelUsuarioEvento::class, mappedBy: 'evento')]
    private Collection $relUsuarioEventos;

    #[ORM\OneToMany(targetEntity: RelGrupoEvento::class, mappedBy: 'evento')]
    private Collection $relGrupoEventos;

    public function __construct()
    {
        $this->relUsuarioEventos = new ArrayCollection();
        $this->relGrupoEventos = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNombre(): ?string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): static
    {
        $this->nombre = $nombre;

        return $this;
    }

    public function getFecha(): ?\DateTimeInterface
    {
        return $this->fecha;
    }

    public function setFecha(\DateTimeInterface $fecha): static
    {
        $this->fecha = $fecha;

        return $this;
    }

    public function getNumeroparticipantes(): ?int
    {
        return $this->numeroparticipantes;
    }

    public function setNumeroparticipantes(int $numeroparticipantes): static
    {
        $this->numeroparticipantes = $numeroparticipantes;

        return $this;
    }

    /**
     * @return Collection<int, RelUsuarioEvento>
     */
    public function getRelUsuarioEventos(): Collection
    {
        return $this->relUsuarioEventos;
    }

    public function addRelUsuarioEvento(RelUsuarioEvento $relUsuarioEvento): static
    {
        if (!$this->relUsuarioEventos->contains($relUsuarioEvento)) {
            $this->relUsuarioEventos->add($relUsuarioEvento);
            $relUsuarioEvento->setEvento($this);
        }

        return $this;
    }

    public function removeRelUsuarioEvento(RelUsuarioEvento $relUsuarioEvento): static
    {
        if ($this->relUsuarioEventos->removeElement($relUsuarioEvento)) {
            // set the owning side to null (unless already changed)
            if ($relUsuarioEvento->getEvento() === $this) {
                $relUsuarioEvento->setEvento(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, RelGrupoEvento>
     */
    public function getRelGrupoEventos(): Collection
    {
        return $this->relGrupoEventos;
    }

    public function addRelGrupoEvento(RelGrupoEvento $relGrupoEvento): static
    {
        if (!$this->relGrupoEventos->contains($relGrupoEvento)) {
            $this->relGrupoEventos->add($relGrupoEvento);
            $relGrupoEvento->setEvento($this);
        }

        return $this;
    }

    public function removeRelGrupoEvento(RelGrupoEvento $relGrupoEvento): static
    {
        if ($this->relGrupoEventos->removeElement($relGrupoEvento)) {
            // set the owning side to null (unless already changed)
            if ($relGrupoEvento->getEvento() === $this) {
                $relGrupoEvento->setEvento(null);
            }
        }

        return $this;
    }
}
