
//work section hide and show sliders
$('#work-links a').click(function(){
	var id = $(this).attr("id");
	console.log(id);

	// $('nav a').css('border-bottom', '3px solid transparent');
	$('#brand-carousel, #web-carousel, #interactive-carousel').hide();

	// $(this).css('border-bottom', '3px solid #ebe711');
	$('#'+id + "-carousel").show();

});



//creating styleable "strikethrough effect" on links
$('.strike-links li a').hover(function(){
	$(this).toggleClass('strike');
});

//hide contact form labels when there is text input
$('.input__field').change(function(){
	var fieldId = $(this).attr("id");
	if($(this).val() !== "") {
	  	$("label[for='"+fieldId+"'] span").hide();
	} else {
		$("label[for='"+fieldId+"'] span").show();
	}
});


//submit form validation
$('#contact-form').submit(function(e){

	if( $('#email-input').val().length === 0 ) {
		$('#email-warning').removeClass('hidden');
		e.preventDefault();
	}

	if( $('#message-input').val().length === 0 ) {
		$('#message-warning').removeClass('hidden');
		e.preventDefault();
	}

});

$('#email-input').keypress(function(){
	if( $(this).val().length !== 0 ) {
		$('#email-warning').addClass('hidden');
	}
});

$('#message-input').keypress(function(){
	if( $(this).val().length !== 0 ) {
		$('#message-warning').addClass('hidden');
	}
});


