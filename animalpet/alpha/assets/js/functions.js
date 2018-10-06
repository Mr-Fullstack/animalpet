$(function(){ //ABRINDO A FUNCTION MAIN

var audio = document.getElementById('audio');
  
  
function playAudio() { 
    audio.play(); 
} 
/*-------------------------------------------------------*/
/*CÓDIGOS DO LOGIN */
$('.jw_name > .fa-exclamation-circle').hide();
$('.jw_name >.fa-check-circle').hide();

$('.jw_mail > .fa-exclamation-circle').hide();
$('.jw_mail >.fa-check-circle').hide();

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
$('form[name="login"]')[0].reset();
$('jw-cad-open').fadeIn("slow");
$('.jw-login-close ').fadeOut("slow");	
$('.jw-login-open').delay(400).fadeIn('slow').slideDown("slow");
$('.form--login').fadeOut("slow").removeClass( "animated fliIntY" ).addClass("animated flipOutY");
});/*close do fechar login*/

/*-------------------------------------------------------*/
/*CÓDIGOS DO PASS RECOVER*/

/* código que abrir a area de  reset pass */
$('.reset-pass').click(function(){
$('.content ').css({"filter": "blur(10px)"});
$('.reset-password').fadeIn("slow").removeClass('animated zoomOut').addClass('animated bounceIn');
$('.jw-pass-close ').fadeIn("slow");

playAudio();

});/*close do abrir reset pass*/

/* código que fechar a area de  reset pass */
$('.jw-pass-close ').click(function(){
$('.content ').css({"filter": "blur(0px)"});	
$('form[name="pass"]')[0].reset();
$('.reset-password').fadeOut("slow").removeClass('animated bounceIn').addClass('animated zoomOut');
$('.jw-pass-close ').fadeOut("slow");	
});/*close do fechar reset pass*/

/*-------------------------------------------------------*/
/*CÓDIGOS DO CADASTRO */

$('.jw-cad').hide();	
/* código que que abri a area de cadastro */
$('.jw-cad-open').click(function(){
$('.content ').css({"filter": "blur(10px)"});
$('.jw-login-close ').fadeOut("slow");	
$('.reset-password').fadeOut("slow").removeClass('animated zoomIn').addClass('animated zoomOut');
$('.form--login').fadeOut("slow").removeClass( "animated fliIntY" ).addClass("animated flipOutY");
$('.jw-cad').fadeIn("slow").removeClass('animated zoomOut').addClass('animated zoomIn');

/* código que que fechar a area de cadastro */
$('.jw-cad-close').click(function(){
$('.content ').css({"filter": "blur(0px)"});	
$('.jw-login-open').fadeIn('slow');
$('form[name="cad"]')[0].reset();
$('.jw-cad').fadeOut("slow").removeClass('animated zoomIn').addClass('animated zoomOut');	

});;/*close do fechar cadastro*/

});;/*close do abrir cadastro*/

/*VERIFICAÇÃO E VALIDAÇÃO DOS INPUTS */
/*	NOME*/
var valuenome=$('#name').val();


$('#name').focusin(function(){
$('.jw_name > .fa-exclamation-circle').fadeOut("slow");


$('.jw_name').css({"color":"#4caf50"});

});

$('#name').focusout(function(){

var valuenomeatual= $('#name').keyup(function(){ 

 var nome=$(this).val();

 })

if(valuenomeatual.val() == valuenome ){
	
$('.jw_name').delay(700).css({"color":"red"});
$('.jw_name > .fa-exclamation-circle').delay(500).fadeIn("slow");
$('.jw_name > .fa-check-circle').fadeOut("slow");
}
else{$('.jw_name').css({"color":"green"});
$('.jw_name > .fa-check-circle').fadeIn('slow'); }

});


$('#subname').focusin(function(){
$('.jw_subname').css({"color":"#4caf50"});

$('#subname').focusout(function(){
$('.jw_subname').css({"color":"#ccc"});
});

});

$('#phone').focusin(function(){
$('.jw_phone').css({"color":"#4caf50"});

$('#phone').focusout(function(){
$('.jw_phone').css({"color":"#ccc"});
});

});




/*EMAIL*/

var valuemail=$('#mail').val();

$('#mail').focusin(function(){

$('.jw_mail >.fa-exclamation-circle').fadeOut("slow");
$('.jw_mail').css({"color":"#4caf50"});

});


$('#mail').focusout(function(){
 var mailvalueatual= $('#mail').keyup(function(){ 

 var test=$(this).val();

 })

if(mailvalueatual.val() == valuemail ){
	
$('.jw_mail > .fa-exclamation-circle').delay(500).fadeIn("slow");	
$('.jw_mail').delay(500).css({"color":"red"});
$('.jw_mail >.fa-check-circle').fadeOut("slow");}

else{$('.jw_mail').css({"color":"green"});
$('.jw_mail >.fa-check-circle').fadeIn("slow");

}


});

/*IDADE*/

$('#city').focusin(function(){
$('.jw_city').css({"color":"#4caf50"});

$('#city').focusout(function(){
$('.jw_city').css({"color":"#ccc"});
});

});





/*--------------------------
-----------------------------*/
});//FECHANDO A FUNCTION MAIN

