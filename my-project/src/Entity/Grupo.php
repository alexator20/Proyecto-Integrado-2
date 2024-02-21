<?php

namespace App\Entity;

use App\Repository\GrupoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GrupoRepository::class)]
class Grupo
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nombre = null;

    #[ORM\Column(length: 255)]
    private ?string $seccion = null;

    #[ORM\OneToMany(targetEntity: Usuario::class, mappedBy: 'grupo_perteneciente')]
    private Collection $usuarios;

    #[ORM\OneToMany(targetEntity: RelGrupoEvento::class, mappedBy: 'grupo')]
    private Collection $relGrupoEventos;

    public function __construct()
    {
        $this->usuarios = new ArrayCollection();
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

    public function getSeccion(): ?string
    {
        return $this->seccion;
    }

    public function setSeccion(string $seccion): static
    {
        $this->seccion = $seccion;

        return $this;
    }

    /**
     * @return Collection<int, Usuario>
     */
    public function getUsuarios(): Collection
    {
        return $this->usuarios;
    }

    public function addUsuario(Usuario $usuario): static
    {
        if (!$this->usuarios->contains($usuario)) {
            $this->usuarios->add($usuario);
            $usuario->setGrupoPerteneciente($this);
        }

        return $this;
    }

    public function removeUsuario(Usuario $usuario): static
    {
        if ($this->usuarios->removeElement($usuario)) {
            // set the owning side to null (unless already changed)
            if ($usuario->getGrupoPerteneciente() === $this) {
                $usuario->setGrupoPerteneciente(null);
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
            $relGrupoEvento->setGrupo($this);
        }

        return $this;
    }

    public function removeRelGrupoEvento(RelGrupoEvento $relGrupoEvento): static
    {
        if ($this->relGrupoEventos->removeElement($relGrupoEvento)) {
            // set the owning side to null (unless already changed)
            if ($relGrupoEvento->getGrupo() === $this) {
                $relGrupoEvento->setGrupo(null);
            }
        }

        return $this;
    }
}
