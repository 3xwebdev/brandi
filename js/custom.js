$(document).ready(function() {

    $(".type").typed({
    	strings:[
    	'Creative Agency and Company',
    	'Proffetional Web Designer',
    	'Top Rated Freelancer',
    	'Well Known and Friendly '
    	],
    	loop:true,
    	typeSpeed:50
    });

    $(".bg-sec").owlCarousel({
        //navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        loop:true,
        pagination:false,
        navigation : false,
        margin:10,
        autoplay:true,
        items:1,
        animateIn:"fadeIn",
        animateOut:"fadeOut",
        smartSpeed:1000
    });
    $(".teamslider").owlCarousel({
            items:4,
            autoplay:true,
            smartSpeed:600,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            slideBy:4,
            responsiveClass:true,
            loop:true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items : 1,
                    nav:true
                },
                // breakpoint from 480 up
                480 : {
                    items : 2,
                    nav:true
                },
                // breakpoint from 768 up
                768 : {
                    items : 3,
                    nav:true
                },
                991 : {
                    items:4
                }
            }
    });

    $('.postslider').owlCarousel({
        pagination:true,
        navigation : true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        loop:true,
        items:3,
        margin:10,
        autoplay:true,
        //slideBy:3,
        animateIn:"fadeIn",
        animateOut:"fadeOut",
        smartSpeed:600,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items : 1, 
                nav:true
            },
            // breakpoint from 480 up
            480 : {
                items : 2,
                nav:true
            },
            //breakpoint from 768 up
            768: {
                items:3
            }
        }
    });

    // filter items on button click
    $('ul.filtermenu').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

 
    var $grid = $('.filterimg').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      stagger:200,
      stagger:200,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item'
      }
    });
	
	$(window).ready(function() {
		$(".site-preloader").fadeOut('slow');
	});

});

