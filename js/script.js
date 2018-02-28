$(document).ready(function(){

  $("#resume").click(function(){
    $("#resumeModal").modal();
  });

  // function testAnim(x) {
  //     $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animated');
  // };

  // $('#pokemonModal').on('show.bs.modal', function (e) {
  //   var anim = 'fadeInUpBig'
  //       testAnim(anim);
  // })

  // $('#gymderModal').on('show.bs.modal', function (e) {
  //   var anim = 'fadeInUpBig'
  //       testAnim(anim);
  // })

  // $('#habitrackModal').on('show.bs.modal', function (e) {
  //   var anim = 'fadeInUpBig'
  //       testAnim(anim);
  // })

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