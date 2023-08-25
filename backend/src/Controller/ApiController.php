<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
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
     * @Route("/api/all/{begin}/{end}", name="api_all")
     */
    public function getAllFromExternalApi(Request $request, $begin, $end): JsonResponse
    {
        // Utiliza $begin y $end en tu lógica
        $dataFromApi = $this->externalApiService->fetchData("api/flights/all?begin=$begin&end=$end");
        $dataArray = json_decode($dataFromApi, true);
        $arrivalTable = [];

        foreach ($dataArray as $itemData) {
            if (!in_array($itemData["estArrivalAirport"], $arrivalTable)) {
                $arrivalTable[] = $itemData["estArrivalAirport"];
            }
        }

        return $this->json(['data' => $arrivalTable]);
    }
   
    /**
     * @Route("/api/arrival/{airport}/{begin}/{end}", name="api_arrival")
     */
    public function getArrivalsFromExternalApi(Request $request, $airport, $begin, $end): JsonResponse
    {
        $data = $this->externalApiService->fetchData("api/flights/arrival?airport=$airport&begin=$begin&end=$end"); 
        return $this->json(['data' => $data]);
    }

}
