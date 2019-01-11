$(document).ready(function() {
    if (window.pageYOffset >= 101) {
        $(".navbar").addClass("collapsed")
    }
});
$(function() {
    var header = $(".navbar");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 101) {
            header.addClass("collapsed");
        } else {
            header.removeClass("collapsed");
        }
    });
});

(function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 116)
          }, 300, "linear");
          return false;
        }
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#top-nav',
      offset: 116
    });
  
  })(jQuery); // End of use strict