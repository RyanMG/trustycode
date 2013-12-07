var $scrollTop = 0;
var cl = function(txt) {
  console.log(txt);
};

$(document).ready(function() {
  $('header').css({ 'height': $(window).height(), 'width': $(window).width() });
  $('.header-background-image').css({ 'height': $(window).height(), 'width': $(window).width() });
});

$(window).resize(function(e) {
  $('header').css({ 'height': $(window).height(), 'width': $(window).width() });
});

$('.nav-link').on('click', function(event) {
  var link = $('#' + $(this).data('div'));
  $('html, body').stop().animate({
    scrollTop: $(link).offset().top - 60
  }, 1000);
});

var nav = $('nav');
var scrolled = false;

$(window).scroll(function () {
    
  if ($(window).scrollTop() > ($(window).height() / 2)  && !scrolled) {
    nav.animate({ 'margin-top': '0px' });
    scrolled = true;
  }

  if ($(window).scrollTop() <= ($(window).height() / 2) && scrolled) {
    nav.animate({ 'margin-top': '-60px' });
    scrolled = false;
  }

  // var displacement = $(window).scrollTop() - $scrollTop;

  // var mainLogoTop = $('.main-logo').css('top');
  // var scrollDownBottom = $('.scroll-down-box').css('bottom');

  // var newMainTop = parseFloat(mainLogoTop) - (displacement/2);
  // var newScrollDownBottom = parseFloat(scrollDownBottom) + displacement;

  // $('.main-logo').css({ 'top': newMainTop });
  // $('.scroll-down-box').css({ 'bottom': newScrollDownBottom });

  // $scrollTop = $(window).scrollTop();
});

 /*
 * Replace all SVG images with inline SVG
 */
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });