//   "use strict";

(function($) {
  let width = $(window).width();



  // $(".command__gallery__carousel__item").on('click', function(){
  //   let avatarPosition = $(".card__avatar__position").value();
  //   let avatarName = $(".card__avatar__name").value();
  //   let avatarText = $(".card__avatar__text").value();
  //   let avatarWorkedYears = $(".card__avatar__worked__years").value();

  // console.log(avatarPosition)

  // });



  // Page loading animation loader start
  $(window).on("load", function() {
    if ($(".cover").length) {
      $(".cover").parallax({
        imageSrc: $(".cover").data("image"),
        zIndex: "1"
      });
    }

    $("#preloader").animate(
      {
        opacity: "0"
      },
      600,
      function() {
        setTimeout(function() {
          $("#preloader")
            .css("visibility", "hidden")
            .fadeOut();
        }, 300);
      }
    );
  });
  // Page loading animation loader end

  
  //sticky navbar end
    $(window).scroll(function(){
      setTimeout(function(){
        var scroll = $(window).scrollTop();

        if (scroll >= 500 && width > 580) {
          $("#navbar").css( "display", "flex" )
        } else{
          $("#navbar").css( "display", "none" )
        }
      }, 1000);
    });
  //sticky navbar end


  /*animate scroll start*/ 
  $('a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate( {
      'scrollTop': $target.offset().top-40
    }, 900, 'swing', function () {
      window.location.hash = target;
    } );
  } );
  /*animate scroll end*/ 
  


  $(document).ready(function() {
    /*nav color start*/ 
    //   $('.header__area__bottom__menu__item__link').on('click', function() {
    //     var activeLink = $('.active');
    //     activeLink.removeClass('active'); 
    //     $(this).parent().addClass('active');
    //   });

    //   $('.nav__menu__item__link').on('click', function() {
    //     var activeLink = $('.active');
    //     activeLink.removeClass('active'); 
    //     $(this).parent().addClass('active');
    //   });
     /*nav color end*/ 





    
$(function() {
  $('#breadcrumbs').breadcrumbsGenerator();
});







    //Modal start
    $(".modal").modal({
      fadeDuration: 1200
    });
    //Modal end

    //welcome__banner__carousel start
    $('.welcome__banner__carousel').owlCarousel({
        center: true,
        nav: true,
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        autoplay: true,
        smartSpeed: 2200,
        autoplayTimeout: 4000,
        center: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items: 1,
    });

    //video__gallery__carousel
    $('.video__gallery__carousel').owlCarousel({
        center: true,
        items: 3,
        loop:true,
        dots: true,
        videoWidth: true,
        responsive:{
          0: {
            items: 1,
          },
            600:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    //command__gallery__carousel
    $('.command__gallery__carousel').owlCarousel({
        items: 4,
        loop:true,
        nav: true,
        dots: true,
        videoWidth: true,
        responsive:{
          0: {
            items: 1,
            center: true,
          },
            600:{
                items:2
            },
            1200:{
                items:4
            }
        }
    });

    //feedbacks__carousel
    $('.feedbacks__carousel').owlCarousel({
        items: 2,
        loop:true,
        margin: 75,
        nav: true,
        videoWidth: true,
        responsive:{
            0: {
              items: 1,
              center: true,
            },
            600:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });
    });
  //owl carousel end

  // Mobile menu dropdown start
  $(".hamburger__btn").on("click", function() {
    if (width < 580) {
      $("#mobile__menu__nav").toggleClass("active");
    }
  });
  $("#mobile__menu__nav .nav-item").on("click", function() {
    if (width < 580) {
      $("#mobile__menu__nav").removeClass("active");
    }
  });
  // Mobile menu dropdown end

  /*map start*/ 
  window.onload = function WindowLoad(event) {
    var myLatlng = new google.maps.LatLng(59.938635, 30.323118);//kordinata bu
    var myOptions = {
        zoom: 17, //karta yaqinligi
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map"), myOptions);

    addMarker(map, googleLatLng, "technotip.com")
  }

  function addMarker (map, googleLatLng, title){
    var markerOpen={
      position: googleLatLng,
      map: map,
      title: title,
      animation: google.maps.Animation.DROP //yoki BOUNCE  bu animatsya turi
    }
    var marker = new google.maps.Marker(markerOpen)
  }
  /*map end*/ 



})(window.jQuery);
