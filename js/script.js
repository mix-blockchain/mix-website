jQuery(document).ready(function() {

  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 100,
    header = document.querySelector('.default');

    if (distanceY > shrinkOn) {
      $(header).addClass('changeit');
    } else {
      if ($(header).hasClass('changeit')) {
        $(header).removeClass('changeit');
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

  jQuery('#nav-icon4').click(function(){
    jQuery(this).toggleClass('open');
    jQuery('#mobilemenu').toggleClass('open-nav');
  });

  jQuery("#iframe1").height(jQuery("#iframe1").width() * 0.4);

  jQuery(window).resize(function() {
    jQuery("#iframe1").height(jQuery("#iframe1").width() * 0.4);
  });

});
