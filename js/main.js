
//Navigation hide and show
$('nav a').click(function(){
	var id = $(this).attr("id");

	// $('nav a').css('border-bottom', '3px solid transparent');
	$('#about-section, #work-section, #contact-section').hide();

	// $(this).css('border-bottom', '3px solid #ebe711');
	$('#'+id+'-section').show();

});



//creating styleable "strikethrough effect" on social links
$('#socials li a').hover(function(){
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


