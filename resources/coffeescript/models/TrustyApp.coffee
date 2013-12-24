define(['jquery', 'underscore', 'backbone'], ($, _, Backbone) =>
  class TrustyApp extends Backbone.Model
    initialize: ->
      @set 'app', 'Trusty Code'
)
