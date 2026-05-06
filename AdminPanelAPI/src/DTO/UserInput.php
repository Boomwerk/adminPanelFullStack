<?php

namespace App\DTO;

use Symfony\Component\Validator\Constraints as Assert;

class UserInput
{
    #[Assert\Email]
    #[Assert\NotBlank()]
    public $email = '';

    
    #[Assert\PasswordStrength()]
    #[Assert\NotBlank()]
    public $password= '';
}