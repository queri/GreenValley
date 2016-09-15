$(document).ready(function() {

  $('input:radio.living-place').on('click', function(){
    var newVal = $(this).val();
    $('input:radio.living-type').prop('checked', false)
    $('.booking-block__type-list--visible').removeClass('booking-block__type-list--visible')
    $('.booking-block__living-type--visible').removeClass('booking-block__living-type--visible')
    $('div#'+newVal).addClass('booking-block__living-type--visible')
  });

  $('input:radio.living-type').on('click', function(){
    var newType = $(this).val();
    $('.booking-block__type-list--visible').removeClass('booking-block__type-list--visible')
    $('ul#'+newType).addClass('booking-block__type-list--visible')
  });

});