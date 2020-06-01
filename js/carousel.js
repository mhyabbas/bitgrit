$(document).ready(function() {

  $('.partners').slick({
    prevArrow: "#partners-previous",
    nextArrow: "#partners-next",
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1
      }
    }
    ]
  });

  $('.event').slick({
    prevArrow: "#event-previous",
    nextArrow: "#event-next",
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1
      }
    }
    ]
  });

});