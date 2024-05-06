$((function() {
	
	
		
	//callback
	
	$('.form-callback').submit( function(event) {
	event.preventDefault();
//	if (!$(this).validationEngine('validate', {promptPosition : "topLeft", scroll: false})) {		return false	};
    var form = $(this),
    formData = $(this).serialize();
	
    formData += "&submit=" + encodeURIComponent("true");
	form.find('.submit').text('отправляем...');
	console.log(formData);
    $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        data: formData,
        dataType: 'json',
        success: function(data) {
            if (data.error != true) {
          
			//$('.form-callback').fadeOut('slow');
			//	$('.form-callback').html('<div class="thanks"><div class="text-center">' + data.msg +'</div></div>');
			
			form.find('.submit').text('Спасибо за заявку!');
			form.find('.submit').addClass('active');
		            }
            else {
                alert('Ошибка отправки почты, свяжитесь с нами по телефону.');
            }
			
	setTimeout(function(){
		$.magnificPopup.close(); 
		$('.form-callback')[0].reset();		
		form.find('.submit').removeClass('active');
		
	}, 6000);
   
           
        }
    });
});

// end : callback
	
	
    svg4everybody();
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    localStorage.getItem("flag") ? $(".like-banner").hide() : $(".like-banner").show();
    $(".like-banner .close").on("click", (function(event) {
        $(this).parent().hide();
        localStorage.setItem("flag", !0);
    }));
    $(".scroll").on("click", (function(event) {
        event.preventDefault();
        var id = $(this).attr("href"), top = $(id).offset().top - 56;
        $("body,html").animate({
            scrollTop: top
        }, 600);
    }));
    $(".to-top").on("click", (function(event) {
        $("body,html").animate({
            scrollTop: 0
        }, 600);
    }));
    $(".form__item input, .form__item textarea").focus((function() {
        $(this).parent().addClass("form__item--focus");
    })).blur((function() {
        "" === $(this).val() && $(this).parent().removeClass("form__item--focus");
    }));
    $(".accordion__content").eq(0).stop(!0, !0).slideToggle("200");
    $(".accordion__item").eq(0).addClass("accordion__item--active");
    $(".accordion__title").click((function() {
        var $this = $(this);
        $this.next(".accordion__content").stop(!0, !0).slideToggle("200");
        $this.parent().toggleClass("accordion__item--active");
        $this.parent().siblings(".accordion__item").children(".accordion__content").stop(!0, !0).slideUp("200");
        $this.parent().siblings(".accordion__item").removeClass("accordion__item--active");
    }));
    if ($(".room-sl").length) {
        let galleryTop = new Swiper(".room-sl", {
            spaceBetween: 20,
            slidesPerView: 1.5,
            navigation: {
                prevEl: ".room-sl__controll .sl-btn--prev",
                nextEl: ".room-sl__controll .sl-btn--next"
            },
            pagination: {
                el: ".room-sl__controll-counter span",
                type: "fraction"
            },
            loop: !0,
            loopedSlides: 4,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                576: {
                    slidesPerView: 1.2,
                    spaceBetween: 20
                },
                991: {
                    slidesPerView: 1.5,
                    spaceBetween: 20
                },
                1921: {
                    slidesPerView: 2.5,
                    spaceBetween: 20
                }
            }
        }), galleryThumbs = new Swiper(".rooms-info-sl", {
            spaceBetween: 0,
            effect: "fade",
            fadeEffect: {
                crossFade: !0
            },
            slidesPerView: 1,
            slideToClickedSlide: !0,
            loop: !0,
            loopedSlides: 4
        });
        galleryTop.controller.control = galleryThumbs;
        galleryThumbs.controller.control = galleryTop;
    }
    if ($(".room-top__sl").length) {
        new Swiper(".room-top__sl", {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: !0,
            loop: !0,
            navigation: {
                prevEl: ".room-top__sl-control .sl-btn--prev",
                nextEl: ".room-top__sl-control .sl-btn--next"
            },
            pagination: {
                el: ".room-top__sl-control span",
                type: "fraction"
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                991: {
                    spaceBetween: 30
                }
            }
        });
    }
    $(window).on("load resize", (function(event) {
        if ((windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 991) {
            let slHeight = $(".room-sl-wrap").outerHeight(!0, !0);
            $(".htsh").css("min-height", slHeight);
        } else $(".htsh").prop("style", "");
        if (windowWidth <= 1140) {
            $(".top .universal__box .universal__infobox").appendTo(".top .nav");
            $(".top .universal__box .btn--login").appendTo(".top .nav");
            $(".top .universal__box .btn--recall").appendTo(".top .universal__menu");
            windowWidth <= 991 ? $(".room-sl-wrap .room-sl__controll").appendTo(".rom-cntrl-box") : $(".rom-cntrl-box .room-sl__controll").appendTo(".room-sl-wrap");
            windowWidth <= 576 ? $(".top .universal__menu .btn--recall").appendTo(".top .nav") : $(".top .nav .btn--recall").appendTo(".top .universal__menu");
        } else {
            $(".top .nav .universal__infobox").appendTo(".top .universal__box");
            $(".top .nav .btn--login").appendTo(".top .universal__box");
            $(".top .universal__menu .btn--recall").appendTo(".top .universal__box");
        }
    }));
    $("[data-fancybox]").fancybox({
        touch: !1,
        backFocus: !1,
        autoFocus: !1
    });
    $("header .hamburger--js").on("click", (function(event) {
        $(this).toggleClass("open");
        $(".universal ").toggleClass("open");
        $(".nav").stop(!0, !0).slideToggle();
    }));
    $(".fixed-nav .hamburger--js").on("click", (function(event) {
        $(this).toggleClass("open");
        $(".fixed-nav__inner").stop(!0, !0).slideToggle();
    }));
    $(window).scroll((function() {
        $(window).scrollTop() >= 700 ? $(".fixed-nav").addClass("fixed-nav--fixed") : $(".fixed-nav").removeClass("fixed-nav--fixed");
    }));
}));