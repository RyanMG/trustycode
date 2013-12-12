TC = {}
TC.scrolled = false

cl: (txt) ->
  console.log txt

$(document).ready ->
  $('header').css({ 'height': $(window).height(), 'width': $(window).width() })
  $('.header-background-image').css({ 'height': $(window).height(), 'width': $(window).width() })

$(window).resize (e) ->
  $('header').css({ 'height': $(window).height(), 'width': $(window).width() })

$('.nav-link').on 'click', (event) =>
  link = $('#' + $(this).data('div'))
  $('html, body').stop().animate {
    scrollTop: $(link).offset().top - 60
  }, 1000

nav = $('nav')

$(window).scroll =>
    
  if $(window).scrollTop() > ($(window).height() / 2)  && !TC.scrolled
    nav.animate({ 'margin-top': '0px' })
    TC.scrolled = true

  if $(window).scrollTop() <= ($(window).height() / 2) && TC.scrolled
    nav.animate { 'margin-top': '-60px' }
    TC.scrolled = false

# $scrollTop = 0;
# var displacement = $(window).scrollTop() - $scrollTop;
# var mainLogoTop = $('.main-logo').css('top');
# var scrollDownBottom = $('.scroll-down-box').css('bottom');
# var newMainTop = parseFloat(mainLogoTop) - (displacement/2);
# var newScrollDownBottom = parseFloat(scrollDownBottom) + displacement;
# $('.main-logo').css({ 'top': newMainTop });
# $('.scroll-down-box').css({ 'bottom': newScrollDownBottom });
# $scrollTop = $(window).scrollTop()
