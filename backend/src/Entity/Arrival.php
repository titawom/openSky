<?php

namespace App\Entity;

use App\Repository\ArrivalRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ArrivalRepository::class)]
class Arrival
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $airport = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAirport(): ?string
    {
        return $this->airport;
    }

    public function setAirport(string $airport): static
    {
        $this->airport = $airport;

        return $this;
    }
}
