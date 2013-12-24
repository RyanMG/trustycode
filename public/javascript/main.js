(function() {
  var _this = this;

  requirejs.config({
    baseUrl: 'javascript',
    paths: {
      'jquery': '../bower_components/jquery/jquery.min'
    },
    shim: {
      '../bower_components/underscore/underscore-min': {
        exports: '_'
      },
      '../bower_components/backbone/backbone-min': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  define(['jquery'], function($) {
    var TC, nav;
    TC = {};
    ({
      cl: function(txt) {
        return console.log(txt);
      }
    });
    $(document).ready(function() {
      return $('header').css({
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
      link = '#' + event.target.dataset.div;
      return $('html, body').stop().animate({
        scrollTop: $(link).offset().top - 60
      }, 1000);
    });
    nav = $('nav');
    return $(window).scroll(function() {
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
  });

}).call(this);
