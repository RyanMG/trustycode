(function() {
  var _this = this,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'text!templates/TrustyApp.html', 'views/AboutView', 'views/CodeView', 'views/DesignView', 'views/PhotoView', 'views/ContactView'], function($, _, Backbone, trustyAppTemplate, aboutView, codeView, designView, photoView, contactView) {
    var TrustyAppView, views, _ref;
    views = Array.prototype.slice.call(arguments, 4);
    TrustyAppView = (function(_super) {
      __extends(TrustyAppView, _super);

      function TrustyAppView() {
        _this.scrollToSection = __bind(_this.scrollToSection, this);
        _this.resetHeaderSize = __bind(_this.resetHeaderSize, this);
        _this.showNavBar = __bind(_this.showNavBar, this);
        _ref = TrustyAppView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TrustyAppView.prototype.el = $('.container');

      TrustyAppView.prototype.events = {
        'click .nav-link': 'scrollToSection'
      };

      TrustyAppView.prototype.initialize = function() {
        var _this = this;
        this.scrolled = false;
        this.nav = null;
        $(window).scroll((function() {
          return _this.showNavBar();
        }));
        return $(window).resize((function() {
          return _this.resetHeaderSize();
        }));
      };

      TrustyAppView.prototype.render = function() {
        var _this = this;
        this.template = _.template(trustyAppTemplate);
        this.$el.prepend(this.template);
        _(views).each(function(view) {
          var newView;
          newView = new view();
          return _this.$el.append(newView.render().el);
        });
        this.nav = $('nav');
        $('.container').css({
          'width': $(window).width()
        });
        $('header').css({
          'height': $(window).height(),
          'width': $(window).width()
        });
        return this;
      };

      TrustyAppView.prototype.showNavBar = function() {
        if ($(window).scrollTop() > ($(window).height() / 2) && !this.scrolled) {
          this.nav.animate({
            'margin-top': '0px'
          });
          this.scrolled = true;
        }
        if ($(window).scrollTop() <= ($(window).height() / 2) && this.scrolled) {
          this.nav.animate({
            'margin-top': '-60px'
          });
          return this.scrolled = false;
        }
      };

      TrustyAppView.prototype.resetHeaderSize = function() {
        $('.container').css({
          'width': $(window).width()
        });
        return $('header').css({
          'height': $(window).height(),
          'width': $(window).width()
        });
      };

      TrustyAppView.prototype.scrollToSection = function(event) {
        var link;
        link = '#' + event.target.dataset.div;
        return $('html, body').stop().animate({
          scrollTop: $(link).offset().top - 60
        }, 1000);
      };

      return TrustyAppView;

    })(Backbone.View);
    return TrustyAppView;
  });

}).call(this);
