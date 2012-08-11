class AppView extends Backbone.View

    el: $ '#container'

    events:
        'click #new-btn': 'createContact'

    initialize: =>
        contacts = new Contacts
        contacts.on 'add', @addRow
        contacts.fetch add:true

    addRow: (contact) =>
        view = new ContactView model:contact
        $('#contacts-table').append view.render().el
        return view

    createContact: =>
        empty_contact = new Contact
        contact_view = @addRow empty_contact
        contact_view.modifyContact()
