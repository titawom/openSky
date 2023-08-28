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
        $dataFromApi = $this->externalApiService->fetchData("api/flights/arrival?airport=$airport&begin=$begin&end=$end"); 
        $dataArray = json_decode($dataFromApi, true);
        return $this->json(['data' => $dataArray]);
    }

        /**
     * @Route("/api/tracks/{icao24}/{time}", name="api_tracks")
     */
    public function getTracksFromIcao24(Request $request, $icao24, $time): JsonResponse
    {
        $dataFromApi = $this->externalApiService->fetchData("api/tracks/all?icao24=$icao24&time=$time"); 
        $dataArray = json_decode($dataFromApi, true);
        return $this->json(['data' => $dataArray]);
    }

}
