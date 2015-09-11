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

//about works pop
$(document).ready(function() {
	// Both black background and PopUp should be hide
	$('.works-black').hide();
	$('.works-black-pop').hide();
	// Clicking the black background will hide b-bg and PopUp
	$('.works-black').click(function() {
		$('.works-black-pop').hide();
		$('.works-black').hide();
	});
	// Clicking any works-pic should show b-bg, PopUp and fill the proper content
	$('.works-pic:nth-of-type(1) .works-pic-hover').click(function() {
		// Show b-bg, PopUp
		$('.works-black').show();
		$('.works-black-pop').fadeIn();
		// fill proper content

	});
});
