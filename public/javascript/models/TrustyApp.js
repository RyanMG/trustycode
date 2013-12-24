(function() {
  var _this = this,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var TrustyApp, _ref;
    return TrustyApp = (function(_super) {
      __extends(TrustyApp, _super);

      function TrustyApp() {
        _ref = TrustyApp.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TrustyApp.prototype.initialize = function() {
        return this.set('app', 'Trusty Code');
      };

      return TrustyApp;

    })(Backbone.Model);
  });

}).call(this);
