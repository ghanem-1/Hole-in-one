$(document).ready(function(){       /*علامة $ تدل على استخدام jquery*/
    $('.fa-bars').click(function(){    /*عند الضغط على (fa-bars) قم بتفعيل وظيفة التي تقوم :*/
       $(this).toggleClass('fa-xmark');  /*هذا الكود يغير  (fa-bars) الى ايقونة (fa-xmark)*/
       $('.navbar').toggleClass('nav-toggle');
    });
    
    $(window).on('scroll load', function () {
        $('.fa-bars').removeClass('fa-xmark');
        $('.navbar').removeClass('nav-toggle');
    });

    $('.owl-carousel1').owlCarousel({
      loop: true,
      margin: 0,
        nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 1100,
      autoplayHoverPause: true,
      navText: ["<i class = 'fa fa-chevron-left'></i>", "<i class = 'fa fa-chevron-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1,
        },
        1000: {
          items: 6
        }
      }
    })
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        navText: ["<i class = 'fa fa-chevron-left'></i>", "<i class = 'fa fa-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      })


  });
