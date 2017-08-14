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

  jQuery('body').smoothScroll({
    delegateSelector: '#menu li a',
    offset: -150
  });
  jQuery('body').smoothScroll({
    delegateSelector: '#downMenu li a',
    offset: -150
  });
  jQuery('body').smoothScroll({
    delegateSelector: '#mobilemenu a',
    offset: -150
  });
  jQuery('#logo').smoothScroll();

  jQuery('#nav-icon4').click(function(){
    jQuery(this).toggleClass('open');
    jQuery('#mobilemenu').toggleClass('open-nav');
  });

});
