// Make front image full paged
function full() {
	height = $(window).height();
	$('header').css("height", height);
}
$(document).ready(full);
var ww = $(window).width;
if (ww > 768) {
	$(window).resize(full);
}

// scroll to about
function scrolltoabout() {
	$('html, body').animate({
		scrollTop: $(".about").offset().top
	}, 700);
}
$(document).ready(function() {
	$(".scroll-down").click(scrolltoabout);
});

// scroll to home
function scrolltoHome() {
	$('html, body').animate({
		scrollTop: $("header").offset().top
	}, 700);
}
$(document).ready(function() {
	$(".upper").click(scrolltoHome);
});

// hide and show nav bar
function hideorshow() {
	var sd = $(".banner-wrapper").offset().top;
	var dd = $("body").scrollTop();
	var ld = $(".about").offset().top;
	var ww = $(window).width();
	if ( ww >= 768) {
		if (dd >= ld) {
			$("nav").css({
				"background-color": "#333333",
				"opacity": "1"
			});
		} else if (dd <= sd) {
			$("nav").css({
				"background-color": "rgba(0,0,0,0)",
				"opacity": "1"
			});
		} else {
			$("nav").css("opacity", 0);
		}
	}else{
		$("nav").css("opacity", 1);
	};
}
$(document).scroll(hideorshow);
$(window).resize(hideorshow);


// Range sliders animation
var done = false;
function rangebaranimate() {
	dd = $("body").scrollTop() + $(window).height();
	ld = $(".up3").offset().top;
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
	$('.works-bg, .works-black-wrapper, .works-black-pop-black a:nth-of-type(2)').click(function() {
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
		$('.works-black-pop img').attr('src', 'http://7xqrvo.com1.z0.glb.clouddn.com/m-coffee.jpg');
		$('.works-black-pop p').html("Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.");
	});
	$('.works-pic:nth-of-type(2) .works-pic-hover').click(function() {
		// fill proper content
		$('.works-black-pop img').attr('src', 'http://7xqrvo.com1.z0.glb.clouddn.com/m-console.jpg');
		$('.works-black-pop p').html("Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.");
	});
	$('.works-pic:nth-of-type(3) .works-pic-hover').click(function() {
		// fill proper content
		$('.works-black-pop img').attr('src', 'http://7xqrvo.com1.z0.glb.clouddn.com/m-judah.jpg');
		$('.works-black-pop p').html("Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.");
	});
	$('.works-pic:nth-of-type(4) .works-pic-hover').click(function() {
		// fill proper content
		$('.works-black-pop img').attr('src', 'http://7xqrvo.com1.z0.glb.clouddn.com/m-intothelight.jpg');
		$('.works-black-pop p').html("Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.");
	});
	$('.works-pic:nth-of-type(5) .works-pic-hover').click(function() {
		// fill proper content
		$('.works-black-pop img').attr('src', 'http://7xqrvo.com1.z0.glb.clouddn.com/m-farmerboy.jpg');
		$('.works-black-pop p').html("Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.");
	});
	$('.works-pic:nth-of-type(6) .works-pic-hover').click(function() {
		// fill proper content
		$('.works-black-pop img').attr('src', 'http://7xqrvo.com1.z0.glb.clouddn.com/m-girl.jpg');
		$('.works-black-pop p').html("Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.");
	});
	$('.works-pic:nth-of-type(7) .works-pic-hover').click(function() {
		// fill proper content
		$('.works-black-pop img').attr('src', 'http://7xqrvo.com1.z0.glb.clouddn.com/m-origami.jpg');
		$('.works-black-pop p').html("Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.");
	});
	$('.works-pic:nth-of-type(8) .works-pic-hover').click(function() {
		// fill proper content
		$('.works-black-pop img').attr('src', 'http://7xqrvo.com1.z0.glb.clouddn.com/m-retrocam.jpg');
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

// Set testimonial slider's animation
// ------ Solution No.1 ------
// function testAnimate() {
// 	var bWidth = $('blockquote').width() * -1 - 1;
// 	$('.b-wrapper-i').animate({marginLeft: "0px"}, 800, "easeInOutQuint").delay(10000).animate({marginLeft: bWidth}, 800, "easeInOutQuint", testAnimate).delay(10000);
// }

// $(document).ready(testAnimate);
// $(window).resize(testAnimate);

// ------ Solution No.2 ------
var loop = setInterval(anim, 21600);
function anim(){
	var bWidth = $('blockquote').width() * -1 - 1;
	$('.b-wrapper-i').animate({marginLeft: "0px"}, 800, "easeInOutQuint").delay(10000).animate({marginLeft: bWidth}, 800, "easeInOutQuint").delay(10000);
}
$(document).ready(anim);
$(window).resize(anim);

// circle active or inactive, class toggle
function circleToggle() {
	lmargin = $('blockquote').width() * -1 -1;
	if ($('.b-wrapper-i').css("margin-left") === 0 * lmargin + "px") {
		// $('.circle').removeClass("c-active");
		$('.circle:nth-of-type(1)').addClass("c-active");
	} else if ($('.b-wrapper-i').css("margin-left") === 1 * lmargin + "px") {
		// $('.circle').removeClass("c-active");
		$('.circle:nth-of-type(2)').addClass("c-active");
	};
};

$(document).ready(circleToggle);

// Click nav-button to show/hide nav bar
$(document).ready(function() {
	$('.nav-button').click(function() {
		$('nav').fadeIn(200);
	});
});

$(document).mouseup(function() {
	var containerStatus = $('nav').css("display");
	var winWidth = $(window).width();
	if (containerStatus = "block"
		&& winWidth < 768) {
		$('nav').fadeOut(200);
	}
})

// scroll to place remove previous active class and add active class
function scrollToPlace() {
	dd = $("body").scrollTop();
	d1 = $("header").offset().top;
	d2 = $(".about").offset().top;
	d3 = $(".resume").offset().top;
	d4 = $(".works").offset().top;
	d5 = $(".testimonials").offset().top;
	d6 = $(".contact").offset().top;
	if (dd >= d6) {
		$("nav a").removeClass("active");
		$("nav a[href='#contact']").addClass("active");
	} else if (dd >= d5) {
		$("nav a").removeClass("active");
		$("nav a[href='#testimonials']").addClass("active");
	} else if (dd >= d4) {
		$("nav a").removeClass("active");
		$("nav a[href='#works']").addClass("active");
	} else if (dd >= d3) {
		$("nav a").removeClass("active");
		$("nav a[href='#resume']").addClass("active");
	} else if (dd >= d2) {
		$("nav a").removeClass("active");
		$("nav a[href='#about']").addClass("active");
	} else if (dd >= d1) {
		$("nav a").removeClass("active");
		$("nav a[href='#home']").addClass("active");
	}
}
$(document).ready(scrollToPlace);
$(window).scroll(scrollToPlace);

// Click the nav bar scroll to place
$(document).ready(function() {
	$('nav a').click(function() {
		$('html, body').animate({
			scrollTop: $('[name="' + $.attr(this, 'href').substr(2) + '"]').offset().top
		}, 700);
		return false;
	});
});