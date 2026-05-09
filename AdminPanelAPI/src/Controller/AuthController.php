<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

class AuthController extends AbstractController
{

    #[Route("/api/auth/store-refresh-token", methods:['POST'])]
    public function storeRefreshToken(Request $request): JsonResponse
    {
        
        $data = json_decode(
            $request->getContent(),
            true
        );

        if(!isset($data['refresh_token'])){

            $response = new JsonResponse([
                'success' => true
            ]);
        }

        $refreshToken = htmlspecialchars($data["refresh_token"]);

        $response = new JsonResponse([
            'success' => true
        ]);

        $response->headers->setCookie(
            Cookie::create(
                'refresh_token',
                $refreshToken,
                strtotime('+30 days'),
                '/',
                null,
                false,
                true,
                false,
                'lax'
            )
            
        );

        return $response;

    }
}