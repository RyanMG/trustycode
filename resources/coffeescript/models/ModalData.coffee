define(['jquery', 'underscore', 'backbone'], ($, _, Backbone) =>
  class ModalData extends Backbone.Model
    initialize: (options) ->
      @set 'project', options.target
      @projectQuery = '/projects?project=' + options.target
      @fetch @projectQuery

    fetch: (url) ->
      $.ajax {
        url: url,
        method: 'GET',
        success: (data) ->
          @set 'attributes', data
        error: (err) ->
          console.log err;
      }

  ModalData
)
