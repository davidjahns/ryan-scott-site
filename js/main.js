
//work section hide and show sliders
// $('').click(function(){
// 	var id = $(this).attr("id");

// 	// $('nav a').css('border-bottom', '3px solid transparent');
// 	$('#work-brand, #work-web, #work-interactive').hide();

// 	// $(this).css('border-bottom', '3px solid #ebe711');
// 	$('#work-'+id).show();

// });



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


