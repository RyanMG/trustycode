(function() {
  var _this = this,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var ModalData, _ref;
    ModalData = (function(_super) {
      __extends(ModalData, _super);

      function ModalData() {
        _ref = ModalData.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ModalData.prototype.initialize = function(options) {
        this.set('project', options.target);
        this.projectQuery = '/projects?project=' + options.target;
        return this.fetch(this.projectQuery);
      };

      ModalData.prototype.fetch = function(url) {
        return $.ajax({
          url: url,
          method: 'GET',
          success: function(data) {
            return this.set('attributes', data);
          },
          error: function(err) {
            return console.log(err);
          }
        });
      };

      return ModalData;

    })(Backbone.Model);
    return ModalData;
  });

}).call(this);
