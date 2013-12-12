(function() {
  var TC, nav,
    _this = this;

  TC = {};

  TC.scrolled = false;

  ({
    cl: function(txt) {
      return console.log(txt);
    }
  });

  $(document).ready(function() {
    $('header').css({
      'height': $(window).height(),
      'width': $(window).width()
    });
    return $('.header-background-image').css({
      'height': $(window).height(),
      'width': $(window).width()
    });
  });

  $(window).resize(function(e) {
    return $('header').css({
      'height': $(window).height(),
      'width': $(window).width()
    });
  });

  $('.nav-link').on('click', function(event) {
    var link;
    link = $('#' + $(_this).data('div'));
    return $('html, body').stop().animate({
      scrollTop: $(link).offset().top - 60
    }, 1000);
  });

  nav = $('nav');

  $(window).scroll(function() {
    if ($(window).scrollTop() > ($(window).height() / 2) && !TC.scrolled) {
      nav.animate({
        'margin-top': '0px'
      });
      TC.scrolled = true;
    }
    if ($(window).scrollTop() <= ($(window).height() / 2) && TC.scrolled) {
      nav.animate({
        'margin-top': '-60px'
      });
      return TC.scrolled = false;
    }
  });

}).call(this);
