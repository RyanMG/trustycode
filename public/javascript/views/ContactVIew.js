(function() {
  var _this = this,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone', 'text!templates/sections/contact.html'], function($, _, Backbone, contact) {
    var ContactView, _ref;
    ContactView = (function(_super) {
      __extends(ContactView, _super);

      function ContactView() {
        _ref = ContactView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ContactView.prototype.render = function() {
        this.template = _.template(contact);
        return this.$el.html(this.template);
      };

      return ContactView;

    })(Backbone.View);
    return ContactView;
  });

}).call(this);
