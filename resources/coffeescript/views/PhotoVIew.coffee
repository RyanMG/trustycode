define(['jquery', 'underscore', 'backbone', 'text!templates/sections/photo.html'], ($, _, Backbone, photo) =>
  class PhotoView extends Backbone.View
    el: $('#photography'),

    events:
      'click #photoPortfolio': 'loadPhotoPortfolio',
      'click #photoBack': 'backToMain'

    render: ->
      @template = _.template photo
      @$el.html(@template)

    loadPhotoPortfolio: ->
      $('.photoMain').animate({
        'margin-left': -$(window).width()
      }, 1000)
      $('.photoPort').animate({
        'margin-left': -$(window).width()
      },1000)
      
    backToMain: ->
      console.log 'test'
      $('.photoMain').animate({
        'margin-left': 0
      }, 1000)
      $('.photoPort').animate({
        'margin-left': 0
      }, 1000)


  PhotoView
)
