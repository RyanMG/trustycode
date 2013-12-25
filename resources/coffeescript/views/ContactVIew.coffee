define(['jquery', 'underscore', 'backbone', 'text!templates/sections/contact.html'], ($, _, Backbone, contact) ->
  class ContactView extends Backbone.View  
    ContactView.prototype.el = $('#contact')
    render: ->
      @template = _.template contact
      @$el.html(@template)

  ContactView
)
