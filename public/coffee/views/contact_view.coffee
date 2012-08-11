class ContactView extends Backbone.View

    tagName: 'tr'

    template: Handlebars.compile $('#contact-tmpl').html()

    events:
        'click i': 'modifyContact'

    initialize: =>
        $('#contacts-table').append @el
        @model.bind 'change', @render, this

    render: =>
        @$el.html @template @model.toJSON()
        return this

    modifyContact: =>
        form = new FormView model:@model
        form.render()
