// Make front image full paged
function full() {
	height = $(window).height();
	$('header').css("height", height);
}
$(document).ready(full);
$(window).resize(full);


// scroll to about
function scrolltoabout() {
	$('html, body').animate({
		scrollTop: $(".about").offset().top
	}, 700);
}
$(document).ready(function() {
	$(".scroll-down, .nav-wrapper a:nth-of-type(2)").click(scrolltoabout);
});


// hide and show nav bar
function hideorshow() {
	sd = $(".banner-wrapper").offset().top;
	dd = $("body").scrollTop();
	ld = $(".about").offset().top;
	if (dd >= ld) {
		$("nav").fadeIn(200);
		$("nav").css("background-color", "#333333");
	} else if (dd <= sd) {
		$("nav").fadeIn(200);
		$("nav").css("background-color", "rgba(0,0,0,0)");
	} else {
		$("nav").fadeOut(200);
	}
}
$(document).scroll(hideorshow);
$(window).resize(hideorshow);


// Range sliders animation
var done = false;
function rangebaranimate() {
	dd = $("body").scrollTop() + $(window).height();
	ld = $(".up5").offset().top;
	if (dd > ld && !done) {
		$(".up").animate({width:"100%"});
		done = true;
	};
}
$(document).scroll(rangebaranimate);

// Make works-pic's height as its width
function heightAsWidth() {
	var picwidth = $('.works-pic').width();
	$('.works-pic').height(picwidth);
}
$(document).ready(heightAsWidth);
$(window).resize(heightAsWidth);

// Vertical-align into basement if PopUP height is more than window height
function checkHeight() {
	var popheight = $('.works-black-pop').height();
	if (popheight > $(window).height()) {
		$('.works-balck-wrapper').css("vertical-align", "baseline");
	};
}
$(document).ready(checkHeight);
$(window).resize(checkHeight);

//about works pop
$(document).ready(function() {
	// Both black background and PopUp should be hide
	$('.works-bg').hide();
	$('.works-black').hide();
	// Clicking the works-black-wrapper will hide works-bg and works-black
	$('.works-bg, .works-black-wrapper, .works-black-pop-black a[href="#works"]').click(function() {
		$('.works-bg').hide();
		$('.works-black').hide();
	});
	$('.works-black-pop').click(function(e) {
		e.stopPropagation();
	})
	// Clicking any works-pic should show b-bg, PopUp and fill the proper content
	$('.works-pic-hover').click(function() {
		// fill proper content
		h = $('h5', this).html();
		p = $('p', this).html();
		$('.works-black-pop h5').html(h);
		$('.works-black-pop span').html(p);
		// Show b-bg, PopUp
		$('.works-bg').show();
		$('.works-black').fadeIn();
	});
	$('.works-pic:nth-of-type(1) .works-pic-hover').click(function() {
		// fill proper content
		$('.works-black-pop img').attr('src', 'img/m-coffee.jpg');
		$('.works-black-pop p').html("Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.");
	});
	$('.works-pic:nth-of-type(2) .works-pic-hover').click(function() {
		// fill proper content
		$('.works-black-pop img').attr('src', 'img/m-console.jpg');
		$('.works-black-pop p').html("Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.");
	});
	$('.works-pic:nth-of-type(3) .works-pic-hover').click(function() {
		// fill proper content
		$('.works-black-pop img').attr('src', 'img/m-judah.jpg');
		$('.works-black-pop p').html("Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.");
	});
	$('.works-pic:nth-of-type(4) .works-pic-hover').click(function() {
		// fill proper content
		$('.works-black-pop img').attr('src', 'img/m-intothelight.jpg');
		$('.works-black-pop p').html("Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.");
	});
	$('.works-pic:nth-of-type(5) .works-pic-hover').click(function() {
		// fill proper content
		$('.works-black-pop img').attr('src', 'img/m-farmerboy.jpg');
		$('.works-black-pop p').html("Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.");
	});
	$('.works-pic:nth-of-type(6) .works-pic-hover').click(function() {
		// fill proper content
		$('.works-black-pop img').attr('src', 'img/m-girl.jpg');
		$('.works-black-pop p').html("Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.");
	});
	$('.works-pic:nth-of-type(7) .works-pic-hover').click(function() {
		// fill proper content
		$('.works-black-pop img').attr('src', 'img/m-origami.jpg');
		$('.works-black-pop p').html("Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.");
	});
	$('.works-pic:nth-of-type(8) .works-pic-hover').click(function() {
		// fill proper content
		$('.works-black-pop img').attr('src', 'img/m-retrocam.jpg');
		$('.works-black-pop p').html("Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.");
	});
});

// Give works-black a top value
var scrollValue = 0;
$(window).scroll(function() {
	scrollValue = $(window).scrollTop() + "px";
});

$(document).ready(function() {
	$('.works-pic-hover').click(function() {
		$('.works-black').css("top", scrollValue);
	});
});