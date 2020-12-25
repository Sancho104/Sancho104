
$('.slider').slick({
	infinite: true,
    slidesToShow: 5,
	slidesToScroll: 1,
	appendArrows: $('.navy'),
	prevArrow: '<button class="navy-button"><img src="img/Line left.png"></button>',
	nextArrow: '<button class="navy-button"><img src="img/Line right.png"></button>',
	// respondTo : 'slider',
	responsive: [
		// {
		// 	breakpoint: 2000,
		// 	settings: {
		// 	  slidesToShow: 5,
		// 	  slidesToScroll: 1,
		// 	  infinite: true,
		// 	  prevArrow: '<button class="navy-button"><img src="img/Line left.png"></button>',
		// 	  nextArrow: '<button class="navy-button"><img src="img/Line right.png"></button>'
		// 	}
		//   },
		{
			breakpoint: 1600,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  infinite: true,
			  prevArrow: '<button class="navy-button"><img src="img/Line left.png"></button>',
			  nextArrow: '<button class="navy-button"><img src="img/Line right.png"></button>'
			}
		  },
		{
		  breakpoint: 1300,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			prevArrow: '<button class="navy-button"><img src="img/Line left.png"></button>',
			nextArrow: '<button class="navy-button"><img src="img/Line right.png"></button>'
		  }
		},
		{
		  breakpoint: 1000,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
			prevArrow: '<button class="navy-button"><img src="img/Line left.png"></button>',
			nextArrow: '<button class="navy-button"><img src="img/Line right.png"></button>'
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			prevArrow: '<button class="navy-button"><img src="img/Line left.png"></button>',
			nextArrow: '<button class="navy-button"><img src="img/Line right.png"></button>'
		  }
		}

	  ]
	
	});



	$(document).ready(function() {
        var $slider = $('.head-slider');
        var $progressBar = $('.progress');
        var $progressBarLabel = $( '.slider__label' );
        
        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
          var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
          
          $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc );
          
          $progressBarLabel.text( calc + '% completed' );
        });
        
        $slider.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
		  autoplay: true,
		//   autoplaySpeed: 3000,
		  appendArrows: $('.navy-button-head'),
		  prevArrow: '<button class="navy-button-h head-prev"><img src="img/Line left.png"></button>',
		  nextArrow: '<button class="navy-button-h head-next"><img src="img/Line right.png"></button>'
        });  
      });
