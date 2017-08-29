$(document).ready(function() {

  window.addEventListener('scroll', function(e) {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 100,
    header = document.querySelector('#fixed-menu');

    if (distanceY > shrinkOn) {
      $(header).addClass('dark');
    } else {
      if ($(header).hasClass('dark')) {
        $(header).removeClass('dark');
      }
    }
  });

  $('a').smoothScroll({
    offset: -100,
    autoFocus: true
  });

  $('#nav-icon').click(function() {
    $(this).toggleClass('open');
    $('#mobilemenu').toggleClass('open-nav');
  });

  $('a').click(function() {
    $('#nav-icon').removeClass('open');
    $('#mobilemenu').removeClass('open-nav');
  });

  $("#iframe1").height($("#iframe1").width() * 0.4);

  $(window).resize(function() {
    $("#iframe1").height($("#iframe1").width() * 0.4);
  });

});
