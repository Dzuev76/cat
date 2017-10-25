$(document).ready(function(){
  	$("h1").fadeOut(5000).fadeIn(5000);
      });

jQuery(function(f){
    var element = f('.card');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](1500);          
    });
});
