
// Responsive Menu

function menuFunction(hamburgerIcon) {
	// Selecteaza meniul
	let topNav = document.getElementById('top-nav');
	// Schimba iconita din hamburger in close
	hamburgerIcon.classList.toggle("ham-close");
	// Adauga clasa top-nav-open la meniu pentru a fi vizibil
	topNav.classList.toggle("top-nav-open");
}

// ===================================== //

// Scroll to anchor
// https://perishablepress.com/vanilla-javascript-scroll-anchor/

(function() {
	scrollTo();
})();

// scrollTo - selecteaza linkurile cu clasa "scroll"
	function scrollTo() {
		const links = document.querySelectorAll('.scroll');
		links.forEach(each => (each.onclick = scrollAnchors));
	}

/*
// Ca sa functioneze cu linkuri fara clasa "scroll":
	function scrollTo() {
		var links = document.getElementsByTagName('a');
		for (var i = 0; i < links.length; i++) {
			var link = links[i];
			if ((link.href && link.href.indexOf('#') != -1) && ((link.pathname == location.pathname) || ('/' + link.pathname == location.pathname)) && (link.search == location.search)) {
				link.onclick = scrollAnchors;
			}
		}
	}
*/

	function scrollAnchors(e, respond = null) {
		const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
		e.preventDefault();
		var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
		const targetAnchor = document.querySelector(targetID);
		if (!targetAnchor) return;
		const originalTop = distanceToTop(targetAnchor);
		window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
		const checkIfDone = setInterval(function() {
			const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
			if (distanceToTop(targetAnchor) === 0 || atBottom) {
				targetAnchor.tabIndex = '-1';
				targetAnchor.focus();
				window.history.pushState('', '', targetID);
				clearInterval(checkIfDone);
			}
		}, 100);
	} // scrollAnchors ends here


// ===================================== //

// Scroll to top button
// HTML: <a id="scroll-to-top" class="scroll" href="#topscroll" title="Deruleaza pana sus"></a>
// Selecteaza butonul "#scroll-to-top"
var scrollButton = document.getElementById('scroll-to-top');
// On scroll
window.onscroll = function() {
	scrollFunction()
};
function scrollFunction() {
	// Daca distanta fata de top este mai mare de 400px
	if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
		// console.log(document.documentElement.scrollTop);
		scrollButton.style.display = "block";
	} else {
		scrollButton.style.display = "none";
	}
} // Scroll to top END

// ===================================== //



// Mesaj comentariu in single-blog pages

// Verifica daca form.comment-form !==null (daca este prezent in pagina)
if (document.querySelector('form.comment-form') !== null) {

	// Selecteaza formularul de comentariu
	// Cand se apasa butonul de Submit, afiseaza un mesaj de multumire
	document.querySelector("form.comment-form").addEventListener("submit", function(event) {
		event.preventDefault();
		this.reset(); // Clear form
		// alert("Mesaj trimis.");

		let mesaj = document.getElementById('mesaj-trimis');
		// Arata mesajul de multumire de sub butonul de submit
		mesaj.style.display="block";

		// Sterge mesajul cand se da click pe "x"
		document.querySelector("#mesaj-inchide").addEventListener("click", function(){
			mesaj.style.display = "none";
		});

		// Sterge mesajul dupa 10 secunde
		setTimeout(function(){
			mesaj.style.display = "none";
		}, 10000);
	});

} // if not null