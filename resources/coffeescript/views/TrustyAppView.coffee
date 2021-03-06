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
      el: $('.container')
      
      events:
        'click .nav-link': 'scrollToSection'

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
        $('.container').css({ 'width': $(window).width() })
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
        $('.container').css({ 'width': $(window).width() })
        $('header').css({ 'height': $(window).height(), 'width': $(window).width() })        

      scrollToSection: (event) =>
        link = '#' + event.target.dataset.div
        $('html, body').stop().animate({
          scrollTop: $(link).offset().top - 60
        }, 1000);

    TrustyAppView
)
