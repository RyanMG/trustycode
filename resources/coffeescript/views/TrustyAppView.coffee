define(
  [ 'jquery',
    'underscore',
    'backbone',
    'text!templates/TrustyApp.html',
    'views/AboutView',
    'views/CodeView',
    'views/DesignView',
    'views/PhotoView',
    'views/ContactView'
  ],
  
  ($, _, Backbone, trustyAppTemplate, aboutView, codeView, designView, photoView, contactView) =>
    views = Array.prototype.slice.call(arguments, 4)
    class TrustyAppView extends Backbone.View
      el: $('body')
      
      initialize: ->
        @scrolled = false
        @nav = null
        $(window).scroll (=> @showNavBar())
        $(window).resize (=> @resetHeaderSize())
    
      render: ->
        @template = _.template trustyAppTemplate
        @$el.prepend @template
        _(views).each (view) =>
          newView = new view()
          @$el.append newView.render().el
        @nav = $('nav')
        $('header').css({ 'height': $(window).height(), 'width': $(window).width() })
        @

      showNavBar: =>
        if $(window).scrollTop() > ($(window).height() / 2)  && !@scrolled
          @nav.animate({ 'margin-top': '0px' })
          @scrolled = true

        if $(window).scrollTop() <= ($(window).height() / 2) && @scrolled
          @nav.animate { 'margin-top': '-60px' }
          @scrolled = false

      resetHeaderSize: =>
        $('header').css({ 'height': $(window).height(), 'width': $(window).width() })        

    TrustyAppView
)
