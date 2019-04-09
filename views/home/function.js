$(document).ready(e => {
  function alertMSG(time) {
    $(".alert").fadeIn(1000);

    setTimeout(function(){
      $(".alert").fadeOut(1000);
    }, time);
  }

  $(".startBodyBracket").text("<body>");
  $(".endBodyBracket").text("</body>");

  $(".home").on('click',function(e) {
    window.scrollTo({top:0, behavior:'smooth'})
  });

  $(".about").on('click',function(e) {
    window.scrollTo({top:320, behavior:'smooth'})
  });

  $(".skills").on('click',function(e) {
    window.scrollTo({top:750, behavior:'smooth'})
  });

  $(".projects").on('click',function(e) {
    alertMSG(1500);
  });

});
