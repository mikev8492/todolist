//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); //refers to this.parent element
	});
	event.stopPropagation();
});

$("input[type=text]").keypress(function(event){
	if (event.which === 13) {
		//grab new todo text from input
		var todoText = $(this).val();
		//clear input text
		$(this).val("");
		//create a new li and add to ul
		$("ul").append(`<li><span><i class="fas fa-trash-alt"></i></span> ${todoText}</li>`);
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})