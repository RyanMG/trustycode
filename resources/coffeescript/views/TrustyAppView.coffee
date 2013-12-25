define(
  [ 'jquery',
    'underscore',
    'backbone',
    'text!templates/TrustyApp.html',
    'views/HeaderView',
    'views/AboutView',
    'views/CodeView',
    'views/DesignView',
    'views/PhotoView',
    'views/ContactView'
  ],
  
  ($, _, Backbone, trustyAppTemplate, headerView, aboutView, codeView, designView, photoView, contactView) =>
    views = Array.prototype.slice.call(arguments, 4)
    class TrustyAppView extends Backbone.View
      el: $('body')
      render: ->
        @template = _.template trustyAppTemplate
        @$el.append(@template)
        _(views).each (view) =>
          @$el.append view.render().el


    TrustyAppView
)
