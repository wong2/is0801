var AppView,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

AppView = (function(_super) {

  __extends(AppView, _super);

  AppView.name = 'AppView';

  function AppView() {
    this.createContact = __bind(this.createContact, this);

    this.addRow = __bind(this.addRow, this);

    this.initialize = __bind(this.initialize, this);
    return AppView.__super__.constructor.apply(this, arguments);
  }

  AppView.prototype.el = $('#container');

  AppView.prototype.events = {
    'click #new-btn': 'createContact'
  };

  AppView.prototype.initialize = function() {
    var contacts;
    contacts = new Contacts;
    contacts.on('add', this.addRow);
    return contacts.fetch({
      add: true
    });
  };

  AppView.prototype.addRow = function(contact) {
    var view;
    view = new ContactView({
      model: contact
    });
    $('#contacts-table').append(view.render().el);
    return view;
  };

  AppView.prototype.createContact = function() {
    var contact_view, empty_contact;
    empty_contact = new Contact;
    contact_view = this.addRow(empty_contact);
    return contact_view.modifyContact();
  };

  return AppView;

})(Backbone.View);
