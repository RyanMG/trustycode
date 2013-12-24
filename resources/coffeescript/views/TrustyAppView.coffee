define(['jquery', 'underscore', 'backbone', 'text!templates/TrustyApp.html'], ($, _, Backbone, TrustyAppTemplate) =>
  class TrustyAppView extends Backbone.View
    el: $('body')
    render: ->
      @template = _.template TrustyAppTemplate
      @$el.append(@template)

  TrustyAppView

)