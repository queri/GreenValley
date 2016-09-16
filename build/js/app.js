$(document).ready(function() {

// form
  $('input:radio.living-place').on('click', function(){
    var newVal = $(this).val();
    $('input:radio.living-type').prop('checked', false);
    $('.booking-block__type-list--visible').removeClass('booking-block__type-list--visible');
    $('.booking-block__living-type--visible').removeClass('booking-block__living-type--visible');
    $('div#'+newVal).addClass('booking-block__living-type--visible');
  });

  $('input:radio.living-type').on('click', function(){
    var newType = $(this).val();
    $('.booking-block__type-list--visible').removeClass('booking-block__type-list--visible');
    $('ul#'+newType).addClass('booking-block__type-list--visible');
  });


// mobile-menu
  $('#toggler').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('main-nav__toggler--close');
      $('.mobile-nav').toggleClass('mobile-nav--visible');
  });


// slider
  var owl = $("#owl-slider-1");
  $("#owl-slider-1").owlCarousel({

    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem : true

  });

  $(".carousel-next").on('click', function(e){
    var activeLink = this;
    e.preventDefault();
    owl.trigger('owl.next');
    $('.relax__tab-link--active').removeClass('relax__tab-link--active');
    $(activeLink).addClass('relax__tab-link--active');
  });
  $('.carousel-prev').on('click', function(e){
    var activeLink = this;
    e.preventDefault();
    owl.trigger('owl.prev');
    $('.relax__tab-link--active').removeClass('relax__tab-link--active');
    $(activeLink).addClass('relax__tab-link--active');
  });


});