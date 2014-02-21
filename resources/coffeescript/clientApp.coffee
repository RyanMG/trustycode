define(['jquery', 'underscore', 'backbone', 'models/TrustyApp',  'views/TrustyAppView'], ($, _, Backbone, TrustyApp, TrustyAppView) ->
  initialize: ->
    trustyApp = new TrustyApp()
    trustyAppView = new TrustyAppView { model: trustyApp }
    trustyAppView.render()
    $(window).on 'scroll', =>
      if $(window).scrollTop() < 0
        $(window).scrollTop(0)
      if $(window).scrollTop() > 2800
        $(window).scrollTop(2800)
)
