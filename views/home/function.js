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
    // $('html, body').animate({
    //   scrollTop: $(".aboutBackground").offset().top
    // }, 500);
    window.scrollTo({top:320, behavior:'smooth'})
  });

  $(".skills").on('click',function(e) {
    window.scrollTo({top:850, behavior:'smooth'})
  });

  $(".projects").on('click',function(e) {
    alertMSG(1500);
  });

  $(".contacts").on('click',function(e) {
    $(".contactMe").fadeIn(200);
  });

  $(".back").on('click', function(e) {
    $(".contactMe").fadeOut(200);
  })

  $(function () {
         $('form').submit(function () {
             if ($('#name').val() === "") {
                 alert('Please enter your name.');
                 return false;
             }
             if ($('#email').val() === "") {
                 alert('Please enter your email.');
                 return false;
             }
             if ($('#txtarea').val() === "") {
                 alert('Please enter a message.');
                 return false;
             }
         });
     })
});
