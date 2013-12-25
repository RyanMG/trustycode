define(['jquery', 'underscore', 'backbone', 'text!templates/sections/photo.html'], ($, _, Backbone, photo) =>
  class PhotoView extends Backbone.View
    el: $('#photography'),
    render: ->
      @template = _.template photo
      @$el.html(@template)

  PhotoView
)
