(function($) {
//   "use strict";
// //sticky navbar start
var width = $(window).width();

  $(window).scroll(function(){
    setTimeout(function(){
      var scroll = $(window).scrollTop();
      var width = $(window).width();

      if (scroll >= 500 && width > 580) {
        $("#navbar").css( "display", "inherit" )
      } else{
        $("#navbar").css( "display", "none" )
      }
    }, 1000);
  });
//sticky navbar end

//owl carousel start
  $(document).ready(function() {
      var owl = $(".welcome__banner__carousel"),
      // rangeArr = [],
      inputType =$("input[type=range]");
      owl.owlCarousel({
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
    //   function getIndex(event) {
      
    //   }
        owl.on('changed.owl.carousel', function(event) {
        console.log(event.item.index);
        inputType.val(event.item.index);
      });
    
    $(".go-me").click(function() {
      owl.trigger("next.owl.carousel");
    });

    $(".back-me").on("click", function() {
      owl.trigger("prev.owl.carousel");
    });

    $("input").on("change", function(e) {
      e.preventDefault();
      console.log(inputType.val());
      // console.log(e.item.index);
      // FIGURE OUT HOW TO GET CAROUSEL INDEX
      $('.owl-carousel').trigger('to.owl.carousel', [inputType.val(),1,true]);
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


  /*nav color start*/ 
$('.header__bottom__nav .nav-item .nav-link').on('click', function() {
  var activeLink = $('.active');
  activeLink.removeClass('active'); 
  $(this).parent().addClass('active');
});

$('.nav-menu .nav-item .nav-link').on('click', function() {
  var activeLink = $('.active');
  activeLink.removeClass('active'); 
  $(this).parent().addClass('active');
});
  /*nav color end*/ 

  /*animate scroll */ 
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
  /*nav color end*/ 

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




  // Mobile menu dropdown start
  $(".hamburger__btn").on("click", function() {
    if (width < 580) {
      $("#mobile__menu__nav").toggleClass("active");
    }
  });
  $("#mobile__menu__nav .nav-item").on("click", function() {
    if (width < 580) {
      $("#mobile__menu__nav").removeeClass("active");
    }
  });

  //   $(document).ready(function() {
  //     $('body').fullpage({
  //         anchors: ['home', 'contacts', 'extra__services', 'video__gallery', 'advantages', 'command', "contacts__second__banner", "about__us", "feedbacks", "location"],
  //         menu: ['#mobile__menu__nav, #navbar'],
  //         css3: true,
  //         scrollingSpeed: 1000
  //     });
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


})(window.jQuery);
