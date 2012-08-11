var Contacts,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

Contacts = (function(_super) {

  __extends(Contacts, _super);

  Contacts.name = 'Contacts';

  function Contacts() {
    return Contacts.__super__.constructor.apply(this, arguments);
  }

  Contacts.prototype.model = Contact;

  Contacts.prototype.url = '/contacts';

  Contacts.prototype.initialize = function() {};

  return Contacts;

})(Backbone.Collection);
