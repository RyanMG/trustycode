define(['jquery', 'underscore', 'backbone', 'text!templates/sections/code.html'], ($, _, Backbone, code) =>
  class CodeView extends Backbone.View

    el: $('#code')
    
    events:
      'click #codePortfolio': 'loadCodePortfolio',
      'click #codeBackOne': 'backToMain',
      'click #codeBackTwo': 'backToOne',
      'click #codeNext': 'loadCodeTwo'

    render: ->
      @template = _.template code
      @$el.html(@template)

    loadCodePortfolio: ->
      $('.codeMain').animate({
        'margin-left': -$(window).width()
      }, 1000)
      $('.codePortOne').animate({
        'margin-left': -$(window).width()
      },1000)
      $('.codePorttwo').animate({
        'margin-left': -$(window).width()
      },1000)

    backToMain: ->
      $('.codeMain').animate({
        'margin-left': 0
      }, 1000)
      $('.codePortOne').animate({
        'margin-left': 0
      }, 1000)
      $('.codePortTwo').animate({
        'margin-left': 0
      }, 1000)

    backToOne: ->
      $('.codeMain').animate({
        'margin-left': -$(window).width()
      }, 1000)
      $('.codePortOne').animate({
        'margin-left': -$(window).width()
      },1000)
      $('.codePortTwo').animate({
        'margin-left': -$(window).width()
      },1000)

    loadCodeTwo: ->
      $('.codeMain').animate({
        'margin-left': -( $(window).width() * 2 )
      }, 1000)
      $('.codePortOne').animate({
        'margin-left': -( $(window).width() * 2 )
      }, 1000)
      $('.codePortTwo').animate({
        'margin-left': -( $(window).width() * 2 )
      }, 1000)

  CodeView
)
