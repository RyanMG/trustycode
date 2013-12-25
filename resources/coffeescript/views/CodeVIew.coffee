define(['jquery', 'underscore', 'backbone', 'text!templates/sections/code.html'], ($, _, Backbone, code) =>
  class CodeView extends Backbone.View
    el: $('#code'),
    render: ->
      @template = _.template code
      @$el.html(@template)

  CodeView
)
