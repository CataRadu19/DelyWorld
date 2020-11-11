$(document).ready(function() {
    $('.nav .dropdown-menu').prev('a').on('click', function(e) {
      e.preventDefault();
      $(this).parent().find('.dropdown-menu').slideToggle();
    });
    
  lightbox.option({
    'disableScrolling': true,
    'positionFromTop': 200
  })
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
              items:2,
              nav:true
          },
          600:{
              items:3,
              nav:true
          },
          1000:{
              items:4,
              nav:true,
              loop:true,
              margin:30
          },
          1300:{
            items:5,
            nav:true,
            margin:30
          }
      }
  })

  //Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document

});
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function myFunction(x) {
    x.classList.toggle("change");
  }

  $(".container-hamburger").click(function(){
    $(".nav-links").toggle();
  });
