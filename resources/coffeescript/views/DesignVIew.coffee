define(['jquery', 'underscore', 'backbone', 'text!templates/sections/design.html'], ($, _, Backbone, design, designPort) =>
  class DesignView extends Backbone.View
    el: $('#design')
    events:
      'click #designPortfolio': 'loadDesignPortfolio'

    render: ->
      @template = _.template design
      @$el.html(@template)

    loadDesignPortfolio: ->
      @designPortTemplate = _.template designPort


  DesignView
)
