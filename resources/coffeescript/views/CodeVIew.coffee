define(['jquery', 'underscore', 'backbone', 'text!templates/sections/code.html'], ($, _, Backbone, code) =>
  class CodeView extends Backbone.View

    el: $('#code')
    
    events:
      'click #codePortfolio': 'loadCodePortfolio',
      'click #codeBack': 'backToMain'

    render: ->
      @template = _.template code
      @$el.html(@template)

    loadCodePortfolio: ->
      $('.codeMain').animate({
        'margin-left': -$(window).width()
      }, 1000)
      $('.codePort').animate({
        'margin-left': -$(window).width()
      },1000)
      
    backToMain: ->
      console.log 'test'
      $('.codeMain').animate({
        'margin-left': 0
      }, 1000)
      $('.codePort').animate({
        'margin-left': 0
      }, 1000)

  CodeView
)
