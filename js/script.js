$('#bio').typeIt({
     // strings: ["Hi, I'm Evan the web developer.", "I currently reside in Seattle.", "I like to code, play video games, and anything sports-related."],
     speed: 35,
     breakLines: true,
     autoStart: true
})
.tiType("Hi, I'm Evan. I.... develop webs?")
.tiPause(1500)
.tiDelete(18)
.tiPause(500)
.tiType(' am a web developer.')
.tiBreak()
.tiPause(1000)
.tiType("I currently reside in Seattle.")
.tiBreak() .tiPause(750)
.tiType("I like to code, play video games, and anything sports-related.")
.tiBreak() .tiPause(500)
.tiType("Check out some of my projects below!")

$(document).ready(function(){
    $("#resume").click(function(){
        $("#resumeModal").modal();
    });
});

$(document).ready(function(){
    $("#gymder").click(function(){
        $("#gymderModal").modal();
    });
});

$(document).ready(function(){
    $("#habitrack").click(function(){
        $("#habitrackModal").modal();
    });
});

$(function() { 
	$("#projlink").on('click', function() { 
		var position = $("#projects").offset().top; 
		$("HTML, BODY").animate({ scrollTop: position }, 1000); 
	}); 
});

$(function() { 
	$("#conlink").on('click', function() { 
		var position = $("#contact").offset().top; 
		$("HTML, BODY").animate({ scrollTop: position }, 1000); 
	}); 
});