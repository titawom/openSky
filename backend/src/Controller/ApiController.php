<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\ExternalApiService;

class ApiController extends AbstractController
{
    private $externalApiService;

    public function __construct(ExternalApiService $externalApiService)
    {
        $this->externalApiService = $externalApiService;
    }

    /**
     * @Route("/api/arrival", name="api_arrival")
     */
    public function getDataFromExternalApi(): JsonResponse
    {
        $data = $this->externalApiService->fetchData('/api/flights/arrival?airport=EDDF&begin=1517227200&end=1517230800'); 
        return $this->json(['data' => $data]);
    }
}
