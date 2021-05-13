
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
