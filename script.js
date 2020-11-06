$(document).ready(function() {
    $('.nav .dropdown-menu').prev('a').on('click', function(e) {
      e.preventDefault();
      $(this).parent().find('.dropdown-menu').slideToggle();
    });
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      dots: false,
      responsiveClass:true,
      autoplay: true,
      autoplayTimeout:5000,
      autoplayHoverPause: true,
      autoplaySpeed: 1000,
      responsive:{
          0:{
              items:3,
              nav:true
          },
          600:{
              items:4,
              nav:true
          },
          1000:{
              items:4,
              nav:true,
              loop:true,
              margin:30
          }
      }
  })
});
