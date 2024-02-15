<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* grupo/index.html.twig */
class __TwigTemplate_7bcf8268564772802a185a399e8b4bb4 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "grupo/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "grupo/index.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 3
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        echo "Hello GrupoController!";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 5
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 6
        echo "<style>
    .example-wrapper { margin: 1em auto; max-width: 800px; width: 95%; font: 18px/1.5 sans-serif; }
    .example-wrapper code { background: #F5F5F5; padding: 2px 6px; }
</style>

<div class=\"example-wrapper\">
    <h1>Hello ";
        // line 12
        echo twig_escape_filter($this->env, (isset($context["controller_name"]) || array_key_exists("controller_name", $context) ? $context["controller_name"] : (function () { throw new RuntimeError('Variable "controller_name" does not exist.', 12, $this->source); })()), "html", null, true);
        echo "! ✅</h1>

    This friendly message is coming from:
    <ul>
        <li>Your controller at <code>/app/src/Controller/GrupoController.php</code></li>
        <li>Your template at <code>/app/templates/grupo/index.html.twig</code></li>
    </ul>
</div>

 <table>
                <tr>
                    <th>NOMBRE</th>
                    <th>CUIDAD</th>
                    <th>DELETE</th>
                    <th>UPDATE</th>
                </tr>

                ";
        // line 29
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["resultados"]) || array_key_exists("resultados", $context) ? $context["resultados"] : (function () { throw new RuntimeError('Variable "resultados" does not exist.', 29, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["row"]) {
            // line 30
            echo "                <tr>
                    <!-- enlaces al detalle -->
                    <td id=\"texto\"><a href='http://localhost:8000/client/detail/";
            // line 32
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["row"], "getId", [], "any", false, false, false, 32), "html", null, true);
            echo "'> ";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["row"], "getNombre", [], "any", false, false, false, 32), "html", null, true);
            echo " </a></td>
                    <td>";
            // line 33
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["row"], "getCiudad", [], "any", false, false, false, 33), "html", null, true);
            echo "</td>

                    <td style='text-align: center;'><a href='http://localhost:8000/delete/";
            // line 35
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["row"], "getId", [], "any", false, false, false, 35), "html", null, true);
            echo "'><img
                                src=\"https://www.pngmart.com/files/3/Red-Cross-PNG-Photo.png\" alt=\"Delete\"
                                width='20'></a></td>
                    <td style='text-align: center;'><a href='http://localhost:8000/update/";
            // line 38
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["row"], "getId", [], "any", false, false, false, 38), "html", null, true);
            echo "'><img
                                src=\"https://cdn-icons-png.flaticon.com/512/1159/1159633.png\" alt=\"Update\"
                                width='20'></a></td>
                </tr>
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['row'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 43
        echo "
            </table>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "grupo/index.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable()
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  137 => 43,  126 => 38,  120 => 35,  115 => 33,  109 => 32,  105 => 30,  101 => 29,  81 => 12,  73 => 6,  66 => 5,  53 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Hello GrupoController!{% endblock %}

{% block body %}
<style>
    .example-wrapper { margin: 1em auto; max-width: 800px; width: 95%; font: 18px/1.5 sans-serif; }
    .example-wrapper code { background: #F5F5F5; padding: 2px 6px; }
</style>

<div class=\"example-wrapper\">
    <h1>Hello {{ controller_name }}! ✅</h1>

    This friendly message is coming from:
    <ul>
        <li>Your controller at <code>/app/src/Controller/GrupoController.php</code></li>
        <li>Your template at <code>/app/templates/grupo/index.html.twig</code></li>
    </ul>
</div>

 <table>
                <tr>
                    <th>NOMBRE</th>
                    <th>CUIDAD</th>
                    <th>DELETE</th>
                    <th>UPDATE</th>
                </tr>

                {% for row in resultados %}
                <tr>
                    <!-- enlaces al detalle -->
                    <td id=\"texto\"><a href='http://localhost:8000/client/detail/{{ row.getId }}'> {{row.getNombre}} </a></td>
                    <td>{{row.getCiudad}}</td>

                    <td style='text-align: center;'><a href='http://localhost:8000/delete/{{ row.getId }}'><img
                                src=\"https://www.pngmart.com/files/3/Red-Cross-PNG-Photo.png\" alt=\"Delete\"
                                width='20'></a></td>
                    <td style='text-align: center;'><a href='http://localhost:8000/update/{{row.getId}}'><img
                                src=\"https://cdn-icons-png.flaticon.com/512/1159/1159633.png\" alt=\"Update\"
                                width='20'></a></td>
                </tr>
                {% endfor %}

            </table>
{% endblock %}
", "grupo/index.html.twig", "/app/templates/grupo/index.html.twig");
    }
}
