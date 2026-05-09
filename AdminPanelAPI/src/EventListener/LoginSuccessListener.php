<?php

namespace App\EventListener;

use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;
use Symfony\Component\HttpFoundation\Cookie;

final class LoginSuccessListener
{
    #[AsEventListener]
    public function onLoginSuccessEvent(AuthenticationSuccessEvent $event): void
    {
        $data = $event->getData();

        if(!isset($data["refresh_token"])){
            return;
        }

        $refreshToken = $data["refresh_token"];

        $response = $event->getResponse();

        $cookie = Cookie::create(
            'refresh_token', 
            $refreshToken,
            strtotime('+30 days'),
            '/',
            null,
            false,
            true,
            false,
            'lax'
        );

        $response->headers->setCookie($cookie);

        unset($data['refresh_token']);

        $data["access_token"] = $data["token"];

        unset($data["token"]);

        $event->setData($data);


    }
}
