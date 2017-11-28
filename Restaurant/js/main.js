$(document).ready(function() {
	$(".hamburger").click(function(){

		$(".menu_active").show("slow");

		$(this).toggleClass("active");

		if ($(".menu_active").hasClass('menu_active-active')) {
        	$(this).parent().parent().removeClass('menu_active-active');
        
        };
	});

	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false
	});

	$(".counter").spincrement({
	    from: 0,                // Стартовое число
	    to: false,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
	    decimalPlaces: 3,       // Сколько знаков оставлять после запятой
	    decimalPoint: ".",      // Разделитель десятичной части числа
	    thousandSeparator: ",", // Разделитель тыcячных
	    duration: 1000          // Продолжительность анимации в миллисекундах
	});

	  var show = true;
    var countbox = ".counter_box";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
 
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
 
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
 
        if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".counter").spincrement({
                thousandSeparator: "",
                duration: 1200
            });
 
            show = false;
        }
    });

});