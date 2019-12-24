
// Banner Slider
$(document).ready(function() {
  $('.banner-slider').owlCarousel({
    nav : true,
    dots: false,
    singleItem: true,
    autoplay: 4000,
    items: 1,
    navText: [ '<span class="zmdi zmdi-chevron-left zmdi-hc-fw"></span>', '<span class="zmdi zmdi-chevron-right zmdi-hc-fw"></span>' ],
  });
});

// Introduction Slider
$(document).ready(function() {
  $('.introduction-slider').owlCarousel({
    nav : false,
    dots: true,
    singleItem: true,
    items: 1,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
  });
});


