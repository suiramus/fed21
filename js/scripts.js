
// Testimonial Carousel
// https://swiperjs.com/

const testimonialswiper = new Swiper('.testimonials-carousel', {
	// Optional parameters
	// direction: 'vertical',
	loop: true,
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
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

});
