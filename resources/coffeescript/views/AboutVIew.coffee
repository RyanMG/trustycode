define(['jquery', 'underscore', 'backbone', 'text!templates/sections/header.html'], ($, _, Backbone, about) =>
  class AboutView extends Backbone.View
    el: $('#about'),
    render: ->
      @template = _.template about
      @$el.html(@template)
)
