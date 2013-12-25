define(['jquery', 'underscore', 'backbone', 'models/TrustyApp',  'views/TrustyAppView'], ($, _, Backbone, TrustyApp, TrustyAppView) ->
  initialize: ->
    trustyApp = new TrustyApp()
    trustyAppView = new TrustyAppView { model: trustyApp }
    trustyAppView.render()
)
