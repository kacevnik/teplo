jQuery(document).ready(function ($) {
	new WOW().init();

	//Иницилизация и отправка плагина AjaxForm отправки даных из форм
    $('form').ajaxForm(function(){
		//$("a[title='Close']").trigger("click");
		$('form').clearForm();
		$(".fancybox-close-small").trigger("click");		
	});

    //Иницилизация и настройка Галереи-Слайдера OWL-carusel
  	$(".owl-carousel").owlCarousel({
  		items : 1,
  		loop:true,
  		autoplaySpeed:1200,
  		navSpeed:1200,
  		autoplay:5000,
  		nav:true,
  		navText: ['<div class="arrow_prev_owl"></div>', '<div class="arrow_next_owl"></div>']
  	});

  	//Плавная прокрутка
  	$("a[href*='#']").bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 500);
		e.preventDefault();
		return false;
	});

  	//Библиотека Fancybox
  	$("[data-fancybox]").fancybox({
  		padding: '300px'
	});


  	//Маска под телефонный номер для поля Input
  	$('input[name="phone"]').mask("+7 (999) 999-99-99"); 	

  	$('#select_body .select_body_show .item a').click(function(event) {
  		$('#select_body .select_body_show .item a').removeClass('selected');
  		$(this).addClass('selected');
  		if($('#more').attr('data_to') == 'step_2'){
  			$('input[name="home"]').val($(this).html());
  		}  		
  		if($('#more').attr('data_to') == 'step_3'){
  			$('input[name="fuel"]').val($(this).html());
  		}
  		$('#more').attr('data_ok', 'ok');
  		return false;
  	});

  	$('#select_body input').keyup(function(event) {
  		if($(this).val() != ''){
  			$('#more').attr('data_ok', 'ok');
  		}
  		else{
  			$('#more').attr('data_ok', '');
  		}
  	});


  	$('.link').click(function(event) {
  		var step = $(this).attr('data_to').split('_')[1];
	  	if($('#more').attr('data_ok') == 'ok'){
	  		$('#select .answer ul li[data-activ='+step+']').addClass('activ');

	  		$('.select_body_show').hide();
	  		$('#step_' + step).show();
	  		$('.link').attr('data_to', 'step_' + (step*1 + 1));

	  		$('#more').attr('data_ok', '');
	  		$(this).blur();
	  		$(this).next().hide();

	  		if(step == 4){
	  			$(this).hide();
	  			$('#select_body input[name="submit"]').show();
	  		}	  		

	  		if(step == 5){
	  			$('#select_body input[name="submit"]').hide();
	  		}
	  	}
  		return false;
  	});

});