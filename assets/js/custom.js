(function($) {
	"use strict";
	/*----------------------------------------------------
		* Theme Loader
		* Mobile Menu
		* Menu Bar Popup Icon
		* Search Icon Popup
		* Sidebar Popup
		* Service One
		* Service Two
		* Portfolio One
		* Portfolio Two
		* Portfolio Three
		* Testimonial One
		* Testimonial Two
		* Blog
		* Banner
		* CounterUp
		* Video Popup
		* WOW
		* Services
		* Thumb Banner Slider
		* Dark & Light Switch
		* Custom Cursor
		* Portfolio Filter
		* Scroll To Top
		* Register GSAP
		* Bounce Animation
		* Split Title
	----------------------------------------------------*/

	///=============  * Theme Loader  =============\\\
	$(document).ready(function () {
		$('.theme-loader').hide();
	});

	///=============  * Mobile Menu  =============\\\
	document.addEventListener("DOMContentLoaded", function() {
		var mobileMenu = document.getElementById("mobilemenu");
		var mainMenu = document.querySelector(".vertical_menu");
		var clonedMenu = mobileMenu.cloneNode(true);
		mainMenu.appendChild(clonedMenu);
	});
	jQuery(document).ready(function($) {
		$('.vertical_menu ul li.menu-item-has-children').append('<span class="mobile-arrows far fa-plus"></span>');

		$(".vertical_menu .mobile-arrows").click(function() {
			$(this).parent().find('ul:first').slideToggle(300);
			$(this).toggleClass('is-open');
		});
	});

	///=============  * Menu Bar Popup Icon  =============\\\
	$('.menu__bar i').on("click", function() {
		$(this).toggleClass('clicked');
		$('.menu__bar-popup').toggleClass('show');
		$('.menu__bar-popup-overlay').addClass('show');
	});	  
	$('.menu__bar-popup .close').on("click", function() {
		$('.menu__bar i').removeClass('clicked');
		$('.menu__bar-popup').removeClass('show');
		$('.menu__bar-popup-overlay').removeClass('show');
	});

    ///=============  * Search Icon Popup  =============\\\
    $(".header__area-menubar-center-search-icon.open, .header__area-menubar-right-search-icon.open").on("click", function () {
        $(".header__area-menubar-center-search-box, .header__area-menubar-right-search-box")
            .fadeIn()
            .addClass("active");
        }
    );
    $(".header__area-menubar-center-search-box-icon, .header__area-menubar-right-search-box-icon").on("click", function () {
        $(this).fadeIn().removeClass("active");
    });
    $(".header__area-menubar-center-search-box-icon i, .header__area-menubar-right-search-box-icon i").on("click", function () {
        $(".header__area-menubar-center-search-box, .header__area-menubar-right-search-box")
            .fadeOut()
            .removeClass("active");
        }
    );
	
	///=============  * Sidebar Popup  =============\\\
	$(document).on("click", ".header__area-menubar-right-sidebar-icon", function () {
		$('.header__area-menubar-right-sidebar-popup').addClass('active');
		$('.sidebar-overlay').addClass('show');
	});
	$(document).on("click", ".header__area-menubar-right-sidebar-popup .sidebar-close-btn", function () {
		$('.header__area-menubar-right-sidebar-popup').removeClass('active');
		$('.sidebar-overlay').removeClass('show');
	});

	///=============  * Service One  =============\\\
	$(document).ready(function () {
		var swiper = new Swiper(".services_slide", {
			spaceBetween: 25,
			slidesPerView: 4,
			speed: 1000,
			loop: true,
			autoplay: {
				delay: 4000,
				reverseDirection: false,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.service_next',
				prevEl: '.service_prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1025: {
					slidesPerView: 4,
				},
				1600: {
					slidesPerView: 4,
				},
			}
		});
	});

	///=============  * Service Two  =============\\\
	$(document).ready(function () {
		var swiper = new Swiper(".services_four_slide", {
			spaceBetween: 25,
			slidesPerView: 3,
			speed: 1000,
			loop: true,
			autoplay: {
				delay: 4000,
				reverseDirection: false,
				disableOnInteraction: false,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1025: {
					slidesPerView: 3,
				},
			}
		});
	});

	///=============  * Portfolio One  =============\\\
	jQuery(document).ready(function($) {
		$('.portfolio__four-area-item').mouseenter(function() {
			$('.portfolio__four-area-item').removeClass('active');
			$(this).addClass('active');
		});
	});

	///=============  * Portfolio Two  =============\\\
	$(document).ready(function () {
		var swiper = new Swiper(".portfolio_slide", {
			spaceBetween: 25,
			slidesPerView: 4,
			speed: 1000,
			loop: true,
			autoplay: {
				delay: 4000,
				reverseDirection: false,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.portfolio_next',
				prevEl: '.portfolio_prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1025: {
					slidesPerView: 3,
				},
				1600: {
					slidesPerView: 2.7,
				},
			},
		});
	});

	///=============  * Portfolio Three  =============\\\
	$(document).ready(function () {
		var swiper = new Swiper(".portfolio_three_slide", {
			spaceBetween: 25,
			centeredSlides: true,
			speed: 1000,
			loop: true,
			autoplay: {
				delay: 4000,
				reverseDirection: false,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.portfolio_next',
				prevEl: '.portfolio_prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1.5,
				},
				1025: {
					slidesPerView: 3,
				},
				1600: {
					slidesPerView: 3.7,
				},
			},
		});
	});

	///=============  * Testimonial One  =============\\\
	$(document).ready(function () {
		var swiper = new Swiper(".testimonial_slide", {
			spaceBetween: 25,
			centeredSlides: true,
			speed: 1000,
			loop: true,
			autoplay: {
				delay: 4000,
				reverseDirection: false,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.testimonial_next',
				prevEl: '.testimonial_prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1.4,
				},
				1025: {
					slidesPerView: 2.4,
				},
				1600: {
					slidesPerView: 2.5,
				},
			},
		});
	});

	///=============  * Testimonial Two  =============\\\
	$(document).ready(function () {
		var swiper = new Swiper(".testimonial_two_slide", {
			spaceBetween: 25,
			centeredSlides: true,
			speed: 1000,
			loop: true,
			autoplay: {
				delay: 4000,
				reverseDirection: false,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.testimonial_next',
				prevEl: '.testimonial_prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
					centeredSlides: false,
				},
				1025: {
					slidesPerView: 3,
				},
				1600: {
					slidesPerView: 4,
				},
			},
		});
	});

	///=============  * Blog  =============\\\
	$(document).ready(function () {
		var swiper = new Swiper(".blog_slide", {
			spaceBetween: 25,
			speed: 1000,
			loop: true,
			slidesPerView: 3,
			autoplay: {
				delay: 4000,
				reverseDirection: false,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.blog_next',
				prevEl: '.blog_prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
				},
			},
		});
	});

	///=============  * Banner  =============\\\
	$(document).ready(function () {
		var swiper = new Swiper(".banner_three", {
			spaceBetween: 25,
			speed: 1000,
			loop: true,
			autoplay: {
				delay: 4000,
				reverseDirection: false,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: '.banner_next',
				prevEl: '.banner_prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1.3,
				},
				768: {
					slidesPerView: 2,
				},
				1025: {
					slidesPerView: 1.6,
				},
				1600: {
					slidesPerView: 1.7,
				},
			},
		});
	});

	///=============  * CounterUp  =============\\\
	var counter = $('.counter');
	counter.counterUp({
		time: 2500,
		delay: 100
	});

	///============= * Skill Bar  =============\\\
	if($('.skill__area-item-bar').length) {
		$('.skill__area-item-bar').appear(function() {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	};

	///=============  * Video Popup  =============\\\
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});

	/*========== * Award Active Hover  ==========*/
	$('.award__area-list-item').on('mousemove', function (e) {
		var service_id = $(this).data("service");
		$('.award__area-left-image.item-' + service_id).addClass('active').siblings().removeClass('active');
		$(this).addClass('active').siblings().removeClass('active');
	});	

	///=============  * WOW  =============\\\
    if ($(".wow").length) {
        var wow = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            mobile: true,
            live: true,
        });
        wow.init();
    }

	///=============  * Services  =============\\\
	$(document).ready(function(){
		$(".services__three-item-title.active")
			.closest('.services__three-item')
			.addClass('active')
			.find('.services__three-item-body').show();
		
		$(".services__three-item-title").mouseenter(function(){
			var $toggle = $(this).closest('.services__three-item');
			
			$(".services__three-item-title").not(this).removeClass("active");
			$(".services__three-item").not($toggle).removeClass('active').find('.services__three-item-body').slideUp(300);

			$(this).toggleClass("active");
			$toggle.toggleClass('active').find('.services__three-item-body').slideToggle(300);
		});
	});

	///=============  * Thumb Banner Slider  =============\\\
	var banner_three_thumb = new Swiper(".slide_thumb", {
		spaceBetween: 0,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
		autoplay: {
			delay: 4500,
			reverseDirection: false,
			disableOnInteraction: false,
		}
	});
	let sliderActive2 = '.slide_three';
	let sliderInit2 = new Swiper(sliderActive2, {
		slidesPerView: 1,
		loop: true,
		effect: 'fade',
		autoplay: {
			delay: 4500,
			reverseDirection: false,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.banner_next',
			prevEl: '.banner_prev',
		},
		thumbs: {
			swiper: banner_three_thumb,
		},
	});
	function animated_swiper(selector, init) {
		let animated = function animated() {
			$(selector + ' [data-animation]').each(function() {
				let anim = $(this).data('animation');
				let delay = $(this).data('delay');
				let duration = $(this).data('duration');
				$(this).removeClass('anim' + anim).addClass(anim + ' animated').css({
					webkitAnimationDelay: delay,
					animationDelay: delay,
					webkitAnimationDuration: duration,
					animationDuration: duration
				}).one('animationend', function() {
					$(this).removeClass(anim + ' animated');
				});
			});
		};
		animated();
		init.on('slideChange', function() {
			$(sliderActive2 + ' [data-animation]').removeClass('animated');
		});
		init.on('slideChange', animated);
	}
	animated_swiper(sliderActive2, sliderInit2);

	///=============  * Dark & Light Switch  =============\\\
	$('.switch__tab-open').on('click', function () {
		$(this).hide();
		$('.switch__tab-close').show();
		$('.switch__tab-icon').css('right', '260px');
		$('.switch__tab-area').css({
			'right': '0',
		});
	});
	$('.switch__tab-close').on('click', function () {
		$(this).hide();
		$('.switch__tab-open').show();
		$('.switch__tab-icon').css('right', '0');
		$('.switch__tab-area').css({
			'right': '-260px',
		});
	});
	$('.type-dark-mode button').on('click', function (e) {
		$(this).addClass('active').siblings().removeClass('active');
		var themeDark = $('.type-dark-mode button.active').attr('data-mode');
		if (themeDark == 'dark-mode') {
			$('body').addClass('dark-mode');
		} 
		else {
			$('body').removeClass('dark-mode');
		}		
	});

	///=============  * Custom Cursor  =============\\\
	var ball = document.getElementById("cursor-ball");
	var cursorText = document.getElementById("cursor-text");
	var hoverAreas = document.querySelectorAll('.data_cursor');
	var lastHoveredElement = null;
	var mouseX = 0,
	mouseY = 0;
	var ballX = 0,
	ballY = 0;
	var speed = 0.1;
	function updateCursor() {
		ballX += (mouseX - ballX) * speed;
		ballY += (mouseY - ballY) * speed;
		ball.style.left = ballX + "px";
		ball.style.top = ballY + "px";
		cursorText.style.left = ballX + "px";
		cursorText.style.top = ballY + "px";
		if (lastHoveredElement === null) {
			ball.style.display = 'block';
			ball.style.height = "12px";
			ball.style.width = "12px";
			cursorText.style.opacity = '0';
		}
		requestAnimationFrame(updateCursor);
	}
	function handleMouseMove(e) {
		var scrollX = window.pageXOffset || document.documentElement.scrollLeft;
		var scrollY = window.pageYOffset || document.documentElement.scrollTop;
		mouseX = e.clientX + scrollX;
		mouseY = e.clientY + scrollY;
	}
	function handleHoverEnter(e) {
		cursorText.innerHTML = e.target.getAttribute('data-cursor-text');
		cursorText.style.opacity = '1';
		ball.style.height = "90px";
		ball.style.width = "90px";
		lastHoveredElement = e.target;
	}
	function handleHoverLeave(e) {
		cursorText.style.opacity = '0';
		ball.style.display = 'block';
		lastHoveredElement = null;
	}
	document.addEventListener('mousemove', handleMouseMove);
	hoverAreas.forEach(function(elem) {
		elem.addEventListener('mouseenter', handleHoverEnter);
		elem.addEventListener('mouseleave', handleHoverLeave);
	});
	updateCursor();
	$(document).ready(function () {
		toggleCursor($('#cursor_style button.active').data('cursor'));
		$('#cursor_style button').on('click', function () {
			$('#cursor_style button').removeClass('active'); 
			$(this).addClass('active'); 
			toggleCursor($(this).data('cursor')); 
		});
		function toggleCursor(value) {
			if (value == 2) {
				$('.hide').fadeOut(); 
				$('.cursor').removeClass('yes').addClass('no'); 
			} else {
				$('.hide').fadeIn(); 
				$('.cursor').removeClass('no').addClass('yes'); 
			}
		}
	});

	///=============  * Portfolio Filter  =============\\\
	$(window).on('load', function(){
		var $grid = $('.gallery__area-active').isotope();
		$('.gallery__area-button').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});
		$('.gallery__area-button').on('click', 'button', function () {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
		});
   })

	///=============  * Scroll To Top  =============\\\
	var scrollPath = document.querySelector('.scroll-up path');
	var pathLength = scrollPath.getTotalLength();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = 'none';
	scrollPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	scrollPath.style.strokeDashoffset = pathLength;
	scrollPath.getBoundingClientRect();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
	var updatescroll = function() {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var scroll = pathLength - (scroll * pathLength / height);
		scrollPath.style.strokeDashoffset = scroll;
	}
	updatescroll();
	$(window).scroll(updatescroll);
	var offset = 50;
	var duration = 950;
	jQuery(window).on('scroll', function() {
		if(jQuery(this).scrollTop() > offset) {
			jQuery('.scroll-up').addClass('active-scroll');
		} else {
			jQuery('.scroll-up').removeClass('active-scroll');
		}
	});
	jQuery('.scroll-up').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({
			scrollTop: 0
		}, duration);
		return false;
	});

	///=============  * Register GSAP  =============\\\
	gsap.registerPlugin(ScrollTrigger);

	gsap.config({
		nullTargetWarn: false,
	});
	///=============  * Bounce Animation  =============\\\
	gsap.set(".item_bounce", { opacity: 0, y: -100 });
	ScrollTrigger.batch(".item_bounce", {
		onEnter: (batch) => gsap.to(batch, {
			opacity: 1,
			y: 0,
			stagger: 0.4,
			duration: 1.5,
			ease: "bounce",
		}),
		start: 'top 90%',
	});
	///=============  * Split Title  =============\\\
    let des_anim_item_one = document.querySelectorAll(".title_split_anim");
    des_anim_item_one.forEach((des_anim_item) => {
        let data_duration = des_anim_item.getAttribute("data-duration") || 0.80;
        let data_delay = des_anim_item.getAttribute("data-delay") || 0.2;
        let translateX_value = des_anim_item.getAttribute("data-translateX") || 0;
        let translateY_value = des_anim_item.getAttribute("data-translateY") || 0;
        let onscroll_value = des_anim_item.getAttribute("data-on-scroll") || 1;
        let stagger_value = des_anim_item.getAttribute("data-stagger") || 0.06;
        let split_word = new SplitText(des_anim_item, { type: "chars, words" });
        let gsapConfig = {
            duration: data_duration,
            delay: data_delay,
            x: translateX_value || 20,
            y: translateY_value,
            autoAlpha: 0,
            stagger: stagger_value
        };
        if (onscroll_value == 1) {
            gsapConfig.scrollTrigger = {
                trigger: des_anim_item,
                start: 'top 90%'
            };
        }
        gsap.from(split_word.words, gsapConfig);
    });
    let des_anim_item = document.querySelectorAll(".title_split_anim");
    des_anim_item.forEach((des_anim_item) => {    
        let stagger_value = des_anim_item.getAttribute("data-stagger") || 0.04;
        let translateX_value = des_anim_item.getAttribute("data-translateX") || 0;
        let translateY_value = des_anim_item.getAttribute("data-translateY") || 0;
        let onscroll_value = des_anim_item.getAttribute("data-on-scroll") || 1;
        let data_delay = des_anim_item.getAttribute("data-delay") || 0.1;
        let data_duration = des_anim_item.getAttribute("data-duration") || 0.75;
        let split_word = new SplitText(des_anim_item, { type: "chars, words" });
        let gsapConfig = {
            duration: data_duration,
            delay: data_delay,
            x: translateX_value || 20,
            y: translateY_value,
            autoAlpha: 0,
            stagger: stagger_value
        };
        if (onscroll_value == 1) {
            gsapConfig.scrollTrigger = {
                trigger: des_anim_item,
                start: 'top 90%'
            };
        }
        gsap.from(split_word.words, gsapConfig);
    });
})(jQuery);
