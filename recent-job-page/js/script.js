$(".profile-slider").slick({
    slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.details-slider',
  dots: true,
  centerMode: true,
  centerPadding: '0px',
});

$(".details-slider").slick({
    slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.profile-slider',
  centerMode: true,
  centerPadding: '0px',
});

$('.counter').counterUp();