define(['jquery', 'underscore', 'backbone', 'text!templates/sections/header.html'], ($, _, Backbone, header) ->
  class HeaderView extends Backbone.View
    @el = $('#top')
    render: ->
      @template = _.template header
      @$el.html(@template)

  HeaderView
)
