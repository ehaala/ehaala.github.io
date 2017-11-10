$(document).ready(function(){

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
  .tiType("Check out some of my projects below!");

  $("#resume").click(function(){
    $("#resumeModal").modal();
  });

  function testAnim(x) {
      $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animated');
  };

  $('#pokemonModal').on('show.bs.modal', function (e) {
    var anim = 'fadeInUpBig'
        testAnim(anim);
  })

  $('#gymderModal').on('show.bs.modal', function (e) {
    var anim = 'fadeInUpBig'
        testAnim(anim);
  })

  $('#habitrackModal').on('show.bs.modal', function (e) {
    var anim = 'fadeInUpBig'
        testAnim(anim);
  })

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

});