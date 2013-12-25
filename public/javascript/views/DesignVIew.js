(function() {
  var _this = this,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'text!templates/sections/design.html'], function($, _, Backbone, design, designPort) {
    var DesignView, _ref;
    DesignView = (function(_super) {
      __extends(DesignView, _super);

      function DesignView() {
        _ref = DesignView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      DesignView.prototype.el = $('#design');

      DesignView.prototype.events = {
        'click #designPortfolio': 'loadDesignPortfolio'
      };

      DesignView.prototype.render = function() {
        this.template = _.template(design);
        return this.$el.html(this.template);
      };

      DesignView.prototype.loadDesignPortfolio = function() {
        return this.designPortTemplate = _.template(designPort);
      };

      return DesignView;

    })(Backbone.View);
    return DesignView;
  });

}).call(this);
