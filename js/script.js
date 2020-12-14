(function($) {
	var gallery = $(".gallery");

	//*** LIGHTBOX

	//vytvorenie overlay

	var overlay = $('<div/>', { id: "overlay" });
		overlay.appendTo("body").hide();

	//po kliknuti na obrazok

	gallery.find("a").on("click", function(event) {

		var href  = $(this).attr("href"),
			image = $("<img>", { src: href, alt: "blabolblaba" });

		overlay .html( image )
				.show("swing");

		event.preventDefault();
	});

	// skrytie overlay

	function overlaygo() {
		overlay.hide("swing");
	};

	overlay.on("click", overlaygo);

	$(document).on("keyup", function(event) {
		if ( event.which === 27 ) overlaygo();
	});

	$(".nav-bar").find("li").on("mouseenter", function() {
		$(this).css({ backgroundColor: "purple" });
	});


})(jQuery);