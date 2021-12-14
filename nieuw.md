---
layout: nieuw
---
<h2>Pagina's</h2>
<p>
{% for pag in site.pages %}
<a href="{{ pag.url }}" title="{{ pag.title }}">{{ pag.title }}</a>
{% endfor %}
</p>
<h1><a href="{{ "/" | absolute_url }}">{{ site.title | default: site.github.repository_name }}</a></h1>
<p>{{ site.description | default: site.github.project_tagline }}</p>
<p class="view"><a href="{{ site.github.repository_url }}">View the Project on GitHub <small>{{ site.github.repository_nwo }}</small></a></p>
<p class="view"><a href="{{ site.github.owner_url }}">View My GitHub Profile</a></p>
<p><a href="markdown">markdown</a></p>
<p><a href="voorbeeld">voorbeeld</a></p>
<p><a href="links">links</a></p>
<p><a href="https://www.web2.nl/index.php?p=linux&a=vim_gebruiken_om_tekstbestanden_te_bewerken" title="Vim gebruiken om tekstbestanden te bewerken">Vim gebruiken om tekstbestanden te bewerken</a><img src="assets/img/externe-link.png" width=16 height=16 alt="externe link"/></p>
<p>&nbsp;</p>
      
