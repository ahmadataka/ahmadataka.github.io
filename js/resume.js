(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
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
    target: '#sideNav'
  });

})(jQuery); // End of use strict

/* Change this to define your colors. Can also be rgb(0,0,0) etc
var ColorForSection = {
  '#about': '#ffffff',
  '#experience': "#000000",
  '#education': "#000000",
  '#skills': "#000000",
  '#interests': "#000000",
  '#awards': "#000000",
}

// Change the navbar's link color to a defined one based on the active nav link
function ChangeNavColor() {
        // Get the section name from the navbar' now active URL
    var currentSection = $(".nav li.active > a").attr('href');
    // Set the link color
    $(".navbar a:link").css('color', ColorForSection[currentSection]);  
	
}

// When scrollspy activates a new section, execute the ChangeNavColor function
$(document).on('activate.bs.scrollspy', ChangeNavColor);

// Call the function when the navbar's done loading
// So we also have the correct color to begin with.
$('.navbar').ready(ChangeNavColor);*/
