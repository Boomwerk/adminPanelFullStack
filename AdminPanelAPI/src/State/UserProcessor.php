<?php

namespace App\State;

use ApiPlatform\Doctrine\Common\State\PersistProcessor;
use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use App\DTO\UserInput;
use App\Entity\User;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserProcessor implements ProcessorInterface
{

    public function __construct(
        private UserPasswordHasherInterface $hasher,
        private PersistProcessor $processor,
        private EntityManagerInterface $em
    ){}

    public function process(
        mixed $data,
        Operation $operation,
        array $uriVariables = [],
        array $context = []
    ): mixed
    {

        
        if($data instanceof UserInput && $data->password)
        {   

            $user = new User();
            $date = new DateTimeImmutable();
            $user->setEmail($data->email);
            $user->setCreatedAt($date);
            $user->setUptadedAt($date);
            $user->setPassword(
                $this->hasher->hashPassword($user, $data->password)
            );

            $this->em->persist($user);
            $this->em->flush();

            return $this->processor->process($user,$operation,$uriVariables, $context);


        }
            
            return $this->processor->process($data,$operation,$uriVariables, $context);


    }
}