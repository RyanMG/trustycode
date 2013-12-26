(function() {
  var _this = this,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'text!templates/sections/code.html'], function($, _, Backbone, code) {
    var CodeView, _ref;
    CodeView = (function(_super) {
      __extends(CodeView, _super);

      function CodeView() {
        _ref = CodeView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CodeView.prototype.el = $('#code');

      CodeView.prototype.events = {
        'click #codePortfolio': 'loadCodePortfolio',
        'click #codeBack': 'backToMain'
      };

      CodeView.prototype.render = function() {
        this.template = _.template(code);
        return this.$el.html(this.template);
      };

      CodeView.prototype.loadCodePortfolio = function() {
        $('.codeMain').animate({
          'margin-left': -$(window).width()
        }, 1000);
        return $('.codePort').animate({
          'margin-left': -$(window).width()
        }, 1000);
      };

      CodeView.prototype.backToMain = function() {
        console.log('test');
        $('.codeMain').animate({
          'margin-left': 0
        }, 1000);
        return $('.codePort').animate({
          'margin-left': 0
        }, 1000);
      };

      return CodeView;

    })(Backbone.View);
    return CodeView;
  });

}).call(this);
