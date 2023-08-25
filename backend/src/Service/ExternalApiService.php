<?php

namespace App\Service;

use GuzzleHttp\Client;

class ExternalApiService
{
    private $httpClient;

    public function __construct()
    {
        $this->httpClient = new Client([
            'base_uri' => 'https://opensky-network.org/api', // URL base de la API externa
        ]);
    }

    public function fetchData($endpoint)
    {
        $response = $this->httpClient->get($endpoint);
        return $response->getBody()->getContents();
    }
}
