$(function(){

AOS.init({
	once: true,
});




$('#nav-icon4').click(function(){
  $(this).toggleClass('open');
  $('.mainMenu').toggleClass('activeMenu');
});




$('.testiSlider').slick({
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
      }
    }
  ]
});
	


$('.banSlider').slick({
  dots: true,
  arrows: true,
  adaptiveHeight: true
});
	

// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();
//     if (scroll >= 200) {
//         $(".banSec header").addClass("fixed");
//     } else {
//         $(".banSec header").removeClass("fixed");
//     }

// });









// Smooth Scroll 
	jQuery(function() {
		jQuery('.smoothClick, .smoothLink > a').click(function() {
		
		var dis = jQuery(this);

		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = jQuery(this.hash);
		  target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top-80
			}, 1000);
			return false;
		  }
		}
	  });
	});
	


  /*jQuery(".questAns:first-child" ).addClass('active');*/
  jQuery(".faq .quest").click(function() {
    var dis = jQuery(this);
    var quest = dis.parent();
    
    if (quest.hasClass('active')){
      quest.find('.ans').slideUp();
      quest.removeClass('active');
    } else {
      quest.siblings().removeClass('active').find('.ans').slideUp();
      quest.find('.ans').slideDown();
      quest.addClass('active'); 
    }
  });



$('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });





if (window.matchMedia("(max-width: 767px)").matches) {
  /* the viewport is less than 768 pixels wide */
  $('.xs-slider').slick({
    dots: false,
    infinite: false,
    arrows: true,
  });

  $('.serv-slider').slick({
    dots: true,
    infinite: false,
    arrows: false,
  });



/*--footer menu toggle script--*/
$('.footer h3').click(function(){
  $(this).parents('.col-12').find('ul').slideToggle();
  $(this).toggleClass('active')

});



} 







}); //---Main Function Close