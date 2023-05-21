<?php

namespace Jinber\SyliusTinymcePlugin\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Finder\Finder;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class FileManagerController extends AbstractController
{
    #[Route('/jinber/tinymce/file_list', name: 'sylius_jinber_tinymce_filemanager_list')]
    public function list(Request $request)
    {
        $dir = $this->container->get('parameter_bag')->get('kernel.project_dir') . '/public/media';
        $finder = new Finder();
        $finder->in($dir)->name(['*.jpg', '*.png', '*.gif', '*.webp'])
            ->sortByChangedTime();
        return $this->render('@JinberSyliusTinymcePlugin/admin/file/list.html.twig',[
            'finder'=>$finder
        ]);
    }
}
