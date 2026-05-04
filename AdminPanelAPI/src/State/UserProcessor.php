<?php

namespace App\State;

use ApiPlatform\Doctrine\Common\State\PersistProcessor;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\Entity\User;
use DateTimeImmutable;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserProcessor implements ProcessorInterface
{

    public function __construct(
        private UserPasswordHasherInterface $hasher,
        private PersistProcessor $processor
    ){}

    public function process(
        mixed $data,
        Operation $operation,
        array $uriVariables = [],
        array $context = []
    ): mixed
    {
        if($data instanceof User && $data->getPassword())
        {
            $date = new DateTimeImmutable();
            $data->setCreatedAt($date);
            $data->setUptadedAt($date);
            $data->setPassword(
                $this->hasher->hashPassword($data, $data->getPassword())
            );
        }

        return $this->processor->process($data,$operation,$uriVariables, $context);
    }
}