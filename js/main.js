jQuery(function () {

    
   
	
	new WOW().init();
	
	
	jQuery(".main_menu a").click(function (){
	   var var_name = jQuery(this).attr("href");
	   //alert(var_name);
		jQuery('html, body').animate({
			scrollTop: jQuery(var_name).offset().top
		}, 2000);
		return false;
	});
     
    
        
});

