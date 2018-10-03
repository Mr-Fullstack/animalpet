$(function(){

/*-------------------------------------------------------*/
/*CÓDIGOS DO LOGIN */

$('.reset-password').hide();
$('.form--login').hide();
$('.jw-login-close').hide();	
/* código que que abri a area de login */
$('.jw-login-open').click(function(){

$('.jw-login-close').delay(350).fadeIn("slow");	
$('.jw-login-open').hide('slow');
$('.form--login').fadeIn("slow").removeClass( "animated flipOutY" ).addClass( "yourClass" ).addClass("animated flipInY").css({

	"background-color":"rgba(153, 255, 204, 1)",
	"padding":"10px",
	"border-radius":"15px",
	"box-shadow": "0px 0px 25px rgba(0, 189, 77, 0.38)" 
	
});
$('jw-cad-open').fadeOut("slow");


});/*close do abrir login*/

/* código que fecha a area de login */
$('.jw-login-close ').click(function(){
$('jw-cad-open').fadeIn("slow");
$('.jw-login-close ').fadeOut("slow");	
$('.jw-login-open').delay(400).fadeIn('slow').slideDown("slow");
$('.form--login').fadeOut("slow").removeClass( "animated fliIntY" ).addClass("animated flipOutY");



});/*close do fechar login*/





$('.reset-pass').click(function(){

$('.reset-password').fadeIn("slow").removeClass('animated zoomOut').addClass('animated slideInDown');
$('.jw-pass-close ').fadeIn("slow");

});

$('.jw-pass-close ').click(function(){
$('.reset-password').fadeOut("slow").removeClass('animated slideInDown').addClass('animated zoomOut');
$('.jw-pass-close ').fadeOut("slow");	


});

/*CÓDIGOS DO CADASTRO */

$('.jw-cad').hide();	
/* código que que abri a area de cadastro */
$('.jw-cad-open').click(function(){
$('.jw-login-close ').fadeOut("slow");	
$('.reset-password').fadeOut("slow").removeClass('animated zoomIn').addClass('animated zoomOut');
$('.form--login').fadeOut("slow").removeClass( "animated fliIntY" ).addClass("animated flipOutY");
$('.jw-cad').fadeIn("slow").removeClass('animated zoomOut').addClass('animated zoomIn');
$('.jw-cad-close').click(function(){
$('.jw-login-open').fadeIn('slow');

$('.jw-cad').fadeOut("slow").removeClass('animated zoomIn').addClass('animated zoomOut');	

});

});

/*-------------------------------------------------------*/




});/* FECHANDO A FUNCTION MAIN*/