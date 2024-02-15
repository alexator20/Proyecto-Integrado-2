<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/evento' => [[['_route' => 'app_evento', '_controller' => 'App\\Controller\\EventoController::index'], null, null, null, false, false, null]],
        '/' => [[['_route' => 'app_home', '_controller' => 'App\\Controller\\GrupoController::home'], null, null, null, false, false, null]],
        '/grupo' => [[['_route' => 'app_grupo', '_controller' => 'App\\Controller\\GrupoController::index'], null, null, null, false, false, null]],
        '/grupo_api' => [[['_route' => 'grupo_api', '_controller' => 'App\\Controller\\GrupoController::indice'], null, ['GET' => 0], null, false, false, null]],
        '/noticia' => [[['_route' => 'app_noticia', '_controller' => 'App\\Controller\\NoticiaController::index'], null, null, null, false, false, null]],
        '/pruebanoticia' => [[['_route' => 'pagos_form', '_controller' => 'App\\Controller\\NoticiaController::pagos'], null, null, null, false, false, null]],
        '/projects' => [[['_route' => 'project_index', '_controller' => 'App\\Controller\\NoticiaController::indice'], null, ['GET' => 0], null, false, false, null]],
        '/releventogrupo' => [[['_route' => 'app_releventogrupo', '_controller' => 'App\\Controller\\ReleventogrupoController::index'], null, null, null, false, false, null]],
        '/releventousuario' => [[['_route' => 'app_releventousuario', '_controller' => 'App\\Controller\\ReleventousuarioController::index'], null, null, null, false, false, null]],
        '/usuario' => [[['_route' => 'app_usuario', '_controller' => 'App\\Controller\\UsuarioController::index'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:35)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        35 => [
            [['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
