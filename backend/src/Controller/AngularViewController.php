<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AngularViewController extends AbstractController
{
    #[Route('/', name: 'app_angular_view')]
    public function index(): Response
    {
        return $this->render('angular_view.html.twig');
    }
}
