define(['jquery', 'underscore', 'backbone', 'text!templates/modal-template.html'], ($, _, Backbone, modal) =>
  class ModalView extends Backbone.View
    el: $('.modal-window'),

    events:
      'click #close-modal': 'closeModal'

    render: ->
      @template = _.template modal
      @$el.html(@template @model.toJSON())
      $('.modal-mask').fadeIn(300, =>
        @$el.fadeIn(500)
      )

    closeModal: ->
      @$el.fadeOut(400, =>
        @$el.html('')
        $('.modal-mask').fadeOut(300)
      )

  ModalView
)
