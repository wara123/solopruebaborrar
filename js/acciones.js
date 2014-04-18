// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
	$('.btn').tap(function(){
	var boton = (($(this).attr('class')).split(' '))[1];
	switch (boton)
	{
		case 'b1':
		navigator.notification.beep(2);
		break;
		case 'v1':
		navigator.notification.vibrate(3000);
		
		break;
	}//switch
	});//tap
	},false);
});//document