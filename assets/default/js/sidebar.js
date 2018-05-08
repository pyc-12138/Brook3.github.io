$$(".site-sidebar span").each(function(e){
	e.addEvent('click',function(){
		$$("."+e.get("id")).getParent().getChildren().each(function(e1){
			e1.removeClass("display-block").addClass("display-none");
		});
		$$("."+e.get("id")).removeClass("display-none").addClass("display-block");
	});
});
