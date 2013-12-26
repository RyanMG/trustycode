define(['jquery', 'underscore', 'backbone', 'text!templates/sections/design.html'], ($, _, Backbone, design, designPort) =>
  class DesignView extends Backbone.View
    el: $('#design')
    events:
      'click #designPortfolio': 'loadDesignPortfolio',
      'click #designBack': 'backToMain'

    render: ->
      @template = _.template design
      @$el.html(@template)

    loadDesignPortfolio: ->
      $('.designMain').animate({
        'margin-left': -$(window).width()
      }, 1000)
      $('.designPort').animate({
        'margin-left': -$(window).width()
      },1000)
      
    backToMain: ->
      console.log 'test'
      $('.designMain').animate({
        'margin-left': 0
      }, 1000)
      $('.designPort').animate({
        'margin-left': 0
      }, 1000)

  DesignView
)
