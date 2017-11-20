$(document).ready(function() {
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false
	});

	

	$(".send_button").click(function(){

		$(".modal1").show("slow");

		$(this).toggleClass("active");

	});


	 $('.head_menu a').click(function(){

		$('.head_menu a').removeClass('click');

		$(this).addClass('click');

	});


	$(".head_menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 85;
        $('body,html').animate({scrollTop: top}, 500);
        console.log(top);
        if ($(".head_menu").hasClass('head_menu-active')) {
        	$(this).parent().parent().removeClass('head_menu-active');
        	$('#pull').removeClass('active');
        }
    });

    $("#pull").click(function(e){
    	e.preventDefault();
    	$(this).toggleClass('active');
		$(".head_menu").toggleClass('head_menu-active');
		if ($(window).width() <= 460) {
			$('.logo').slideToggle();
		};
	});


});
