$(document).ready(function(){
	//1.banner
	$("div.btn li").on("mouseover",function(){
		$("div.btn li").removeClass().eq($(this).index()).addClass("first");
		$("ul.ban_top li").removeClass().eq($(this).index()).addClass("active")
	})




})