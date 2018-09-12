$(function(){
	//Force scroll position to top of page after refresh
	window.onbeforeunload = function(){
		window.scrollTo(0, 0);
	}

	//Scroll Animation Rules
	window.sr = ScrollReveal();
	sr.reveal('.navbar', {
		duration: 2000,
		origin: 'top'
	});
	sr.reveal('#myCarousel', {
		duration: 2000,
		origin: 'left',
		distance: '1000px'
	});
	sr.reveal('.showcase-left', {
		duration: 2000,
		origin: 'left',
		distance: '1000px',
		viewFactor: 0.2
	});
	sr.reveal('.showcase-right', {
		duration: 2000,
		origin: 'right',
		distance: '1000px',
		viewFactor: 0.2
	});
	sr.reveal('.showcase-btn', {
		duration: 1000,
		delay: 1000,
		origin: 'bottom',
	});
	sr.reveal('.gizmo', {
		duration: 2000,
		origin: 'right',
		distance: '200px',
		viewFactor: 0.02
	});
	sr.reveal('#contact', {
		duration: 2000,
		origin: 'bottom',
		distance: '200px',
		viewFactor: 0.02
	});
});