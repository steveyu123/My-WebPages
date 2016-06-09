//check off specific todos by clicking
//if LI is gray turn black and vice-versa
$('ul').on("click","li",function(){
 $(this).toggleClass("completed");

})

//click on x to delete TODO
//to prevent the span clicking in affecting li.ul.body, you can use 
//event.stopProgation along with putting an event inside the function

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text'").keypress(function(){
	if(event.which === 13){
		// grabbing new todo text from inputbox
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText  + " </li>")
	};
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
})