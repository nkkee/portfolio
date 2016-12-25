$(document).ready(function(){
	/*$("#copyright").click(function(){
  		$(this).css('color','purple');
	});*/
	
	//General
	document.getElementById('copyright').addEventListener("click", function() {
		this.style.color = 'red';
	});

	//Home
	$("#text-slider div:gt(0)").hide();
	setInterval(function() {
		$("#text-slider div:first").fadeOut(500).next().fadeIn(1000).end().appendTo("#text-slider");
	}, 4000);

	//About
	$(function(){
		$('#about').hide();
	});

	$('body').on('click','#sectionChoice .row .showSingle .tab', function(e){
		$('#about').show();
		$('#about').children().hide();
		$($(this).attr('href')).show();
		e.preventDefault();
	});
	
});

