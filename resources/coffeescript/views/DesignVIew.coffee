define(['jquery', 'underscore', 'backbone', 'text!templates/sections/design.html'], ($, _, Backbone, design) =>
  class DesignView extends Backbone.View
    el: $('#design'),
    render: ->
      @template = _.template design
      @$el.html(@template)

  DesignView
)
