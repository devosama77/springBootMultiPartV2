$( document ).ready(function() {
	
	var url = window.location;
	
	// GET REQUEST
	$("#btnGetFiles").click(function(event){
		event.preventDefault();
		ajaxGet();
	});
	
	// DO GET
	function ajaxGet(){
		$.ajax({
			type : "GET",
			url : url + "/getallfiles",
			success: function(data){
				$("#result").html("");
				$.each(data,function(i,v){
					$("#result").append('<a href=' + v +'>' + v + '</a> </br>' )
            });
			},
			error : function(e) {
				$("#result").html(e.responseText);
			}
		});	
	}
})