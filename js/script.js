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

  // Bind the hashchange event listener
  $(window).bind('hashchange', function(event) {
    $.smoothScroll({
      // Replace '#/' with '#' to go to the correct target
      scrollTarget: location.hash.replace(/^\#\/?/, '#'),
      offset: -150
    });
  });
  $('a[href*="#"]')
  .bind('click', function(event) {
    // Remove '#' from the hash.
    var hash = this.hash.replace(/^#/, '')
    if (this.pathname === location.pathname && hash) {
      event.preventDefault();
      // Change '#' (removed above) to '#/' so it doesn't jump without the smooth scrolling
      location.hash = '#/' + hash;
    }
  });

  // Trigger hashchange event on page load if there is a hash in the URL.
  if (location.hash) {
    $(window).trigger('hashchange');
  }

  $('#nav-icon').click(function() {
    $(this).toggleClass('open');
    $('#mobilemenu').toggleClass('open-nav');
  });

  $("#iframe1").height($("#iframe1").width() * 0.4);

  $(window).resize(function() {
    $("#iframe1").height($("#iframe1").width() * 0.4);
  });

});
