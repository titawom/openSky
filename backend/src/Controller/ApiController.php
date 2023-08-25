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
     * @Route("/api/all", name="api_all")
     */
    public function getAllFromExternalApi(): JsonResponse
    {
        $dataFromApi = $this->externalApiService->fetchData('api/flights/all?begin=1517227200&end=1517230800');
        $dataArray = json_decode($dataFromApi, true);
        $arrivalTable = [];

        foreach ($dataArray as $itemData) {
            if (!in_array($itemData["estArrivalAirport"], $arrivalTable))
            $arrivalTable[] = $itemData["estArrivalAirport"];
        }

        return $this->json(['data' => $arrivalTable]);
    }
   
    /**
     * @Route("/api/arrival", name="api_arrival")
     */
    public function getArrivalsFromExternalApi(): JsonResponse
    {
        $data = $this->externalApiService->fetchData('api/flights/arrival?airport=EDDF&begin=1517227200&end=1517230800'); 
        return $this->json(['data' => $data]);
    }

}
