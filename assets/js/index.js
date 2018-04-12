window.onload = function (e) {
	$('#page-loader').fadeOut();
}

const showAndHideSocialNetworks = () => {
	$('#socialNetworksFixed').hide();

	$(window).scroll(() => {
		var windowHeight = $(window).scrollTop();
		var contactSection = $("#contact-section").offset();
		contactSection = contactSection.top;

		if (windowHeight >= contactSection) {
			$('#socialNetworksFixed').fadeOut(500);
		} else {
			$('#socialNetworksFixed').fadeIn(500);
		}
	});
}

$(document).ready(function () {
	$(".button-collapse").sideNav({
		menuWidth: '60%',
		closeOnClick: true
	});
	// $('.parallax').parallax();

	showAndHideSocialNetworks();
});