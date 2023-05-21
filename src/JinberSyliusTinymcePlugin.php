<?php

namespace Jinber\SyliusTinymcePlugin;

use Jinber\SyliusTinymcePlugin\DependencyInjection\JinberSyliusTinymceExtension;
use Symfony\Component\DependencyInjection\Extension\ExtensionInterface;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class JinberSyliusTinymcePlugin extends Bundle
{
    public function getPath(): string
    {
        return \dirname(__DIR__);
    }
    public function getContainerExtension(): ?ExtensionInterface
    {
        return new JinberSyliusTinymceExtension();
    }
}
