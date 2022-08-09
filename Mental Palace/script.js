

$(window).scroll(function(e) {

  var elOffset = $('.element').scrollTop() - $(window).scrollTop();

  if(elOffset < 450) {
      $(this).addClass('blur');
  }

});





