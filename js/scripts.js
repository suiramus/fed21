
// Responsive Menu

function menuFunction(hamburgerIcon) {
	// Selecteaza meniul
	let topNav = document.getElementById('top-nav');
	// Schimba iconita din hamburger in close
	hamburgerIcon.classList.toggle("ham-close");
	// Adauga clasa top-nav-open la meniu pentru a fi vizibil
	topNav.classList.toggle("top-nav-open");
}



// Testimonial Carousel
// https://swiperjs.com/

const testimonialswiper = new Swiper('.testimonials-carousel', {
	// Optional parameters
	// direction: 'vertical',
	loop: false,
	slidesPerView: 1,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	keyboard: {
		enabled: true,
	},
	centeredSlides: true,
	autoplay: {
		delay: 4500,
		disableOnInteraction: true,
		pauseOnMouseEnter: true,
		stopOnLastSlide: true,
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


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
