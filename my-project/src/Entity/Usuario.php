<?php

namespace App\Entity;

use App\Repository\UsuarioRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UsuarioRepository::class)]
class Usuario
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nombre = null;

    #[ORM\Column(nullable: true)]
    private ?int $edad = null;

    #[ORM\Column(length: 255)]
    private ?string $rol = null;

    #[ORM\ManyToOne(inversedBy: 'usuarios')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Grupo $grupo_perteneciente = null;

    #[ORM\OneToMany(targetEntity: RelUsuarioEvento::class, mappedBy: 'usuario')]
    private Collection $relUsuarioEventos;

    #[ORM\Column(length: 255)]
    private ?string $password = null;

    public function __construct()
    {
        $this->relUsuarioEventos = new ArrayCollection();
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

    public function getEdad(): ?int
    {
        return $this->edad;
    }

    public function setEdad(?int $edad): static
    {
        $this->edad = $edad;

        return $this;
    }

    public function getRol(): ?string
    {
        return $this->rol;
    }

    public function setRol(string $rol): static
    {
        $this->rol = $rol;

        return $this;
    }

    public function getGrupoPerteneciente(): ?Grupo
    {
        return $this->grupo_perteneciente;
    }

    public function setGrupoPerteneciente(?Grupo $grupo_perteneciente): static
    {
        $this->grupo_perteneciente = $grupo_perteneciente;

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
            $relUsuarioEvento->setUsuario($this);
        }

        return $this;
    }

    public function removeRelUsuarioEvento(RelUsuarioEvento $relUsuarioEvento): static
    {
        if ($this->relUsuarioEventos->removeElement($relUsuarioEvento)) {
            // set the owning side to null (unless already changed)
            if ($relUsuarioEvento->getUsuario() === $this) {
                $relUsuarioEvento->setUsuario(null);
            }
        }

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }
}
