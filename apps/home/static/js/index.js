(function($) {
    $("#top-news-slider").owlCarousel({
        // Most important owl features
        items : 3,  
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],  
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 100,
        autoplayHoverPause: true,
        // Responsive options
        responsive: true,
        responsive:{
            0:{
              items:1 // In this configuration 1 is enabled from 0px up to 479px screen size 
            },

            480:{

              items:1, // from 480 to 677 
              nav:true // from 480 to max 

            },

            678:{

              items:1, // from this breakpoint 678 to 959
              center:false // only within 678 and next - 959
            },

            960:{

              items:2, // from this breakpoint 960 to 1199
              margin:20, // and so on...
              center:false 

            },

            1200:{

              items:3,
              margin: 0

            }
        } 
    });
})(jQuery);