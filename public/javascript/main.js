var $scrollTop = 0;

$(document).ready(function() {
  $('header').css({ 'height': $(window).height(), 'width': $(window).width() });

});

$(window).resize(function(e) {
  $('header').css({ 'height': $(window).height(), 'width': $(window).width() });
});

$(window).scroll(function(event) {

  var displacement = $(window).scrollTop() - $scrollTop;

  if ($(window).scrollTop() < $(window).height()) {
    var mainLogoTop = $('.main-logo').css('top');
    var scrollDownBottom = $('.scroll-down-box').css('bottom');

    var newMainTop = parseFloat(mainLogoTop) - (displacement/2);
    var newScrollDownBottom = parseFloat(scrollDownBottom) + displacement;

    $('.main-logo').css({ 'top': newMainTop });
    $('.scroll-down-box').css({ 'bottom': newScrollDownBottom });
  }
  $scrollTop = $(window).scrollTop();
});