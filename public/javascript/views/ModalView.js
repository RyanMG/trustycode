(function() {
  var _this = this,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'text!templates/modal-template.html'], function($, _, Backbone, modal) {
    var ModalView, _ref;
    ModalView = (function(_super) {
      __extends(ModalView, _super);

      function ModalView() {
        _ref = ModalView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ModalView.prototype.el = $('.modal-window');

      ModalView.prototype.events = {
        'click #close-modal': 'closeModal'
      };

      ModalView.prototype.render = function() {
        var _this = this;
        this.template = _.template(modal);
        this.$el.html(this.template(this.model.toJSON()));
        return $('.modal-mask').fadeIn(300, function() {
          return _this.$el.fadeIn(500);
        });
      };

      ModalView.prototype.closeModal = function() {
        var _this = this;
        return this.$el.fadeOut(400, function() {
          _this.$el.html('');
          return $('.modal-mask').fadeOut(300);
        });
      };

      return ModalView;

    })(Backbone.View);
    return ModalView;
  });

}).call(this);
