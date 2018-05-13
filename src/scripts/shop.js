$(function() {

	$( window ).scroll(function() {
		if ( $(window).scrollTop() > 80) {
			$("div.top_menu").css("top", "0px");

		} else {
			$("div.top_menu").css("top", 101 - $(window).scrollTop()  + "px");
		}
	});


    $("#shashlik_button").click(function() {
        $("html, body").animate({
            scrollTop: ($("#shashlik").offset().top) - 60 + "px"
        }, {
            duration: 500
        });
        return false;
    });

    $("#pizza_button").click(function() {
        $("html, body").animate({
            scrollTop: ($("#pizza").offset().top) - 60 + "px"
        }, {
            duration: 800
        });
        return false;
    });

    $("#hachapuri_button").click(function() {
        $("html, body").animate({
            scrollTop: ($("#hachapuri").offset().top) - 60 + "px"
        }, {
            duration: 800
        });
        return false;
    });

    $("#shaurma_button").click(function() {
        $("html, body").animate({
            scrollTop: ($("#shaurma").offset().top) - 60 + "px"
        }, {
            duration: 800
        });
        return false;
    });

    $("#koktely_button").click(function() {
        $("html, body").animate({
            scrollTop: ($("#koktely").offset().top) - 60 + "px"
        }, {
            duration: 800
        });
        return false;
    });

    $("#napitki_button").click(function() {
        $("html, body").animate({
            scrollTop: ($("#napitki").offset().top) - 60 + "px"
        }, {
            duration: 800
        });
        return false;
    });

    $("a.big_images").fancybox();
});

$(document).ready(function() {
    $("a.big_images").fancybox();
});