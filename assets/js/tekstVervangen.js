function tekstVervangen(element,vervangendeTekst) {
    var el = document.getElementById(element);
    el.innerHTML = vervangendeTekst;
}

var nieuweTekst = '<ul class="bovenaan"><strong>Op deze pagina:</strong>';
const xx = document.querySelectorAll("h1, h2, h3");

for (var i = 0; i < xx.length; i++) {
	xx[i].id = i;
	if (xx[i].innerHTML.includes('~') != true) {
	    if (xx[i].tagName == 'H3') {
	        nieuweTekst +='<ul><li><a href="#'+i+'">'+xx[i].innerHTML+'</a></li></ul>';
	    }
	    else {
	    	nieuweTekst +='<li><a href="#'+i+'">'+xx[i].innerHTML+'</a></li>';
	    }
	}
}
nieuweTekst +='</ul>'

// element 0 is de eerste h1
var eerste = document.getElementById("0");
var tweede = document.getElementById("submenu");
eerste.insertAdjacentElement("afterend", tweede);

tekstVervangen('submenu',nieuweTekst);


