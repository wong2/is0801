var ContactView,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

ContactView = (function(_super) {

  __extends(ContactView, _super);

  ContactView.name = 'ContactView';

  function ContactView() {
    this.modifyContact = __bind(this.modifyContact, this);

    this.render = __bind(this.render, this);

    this.initialize = __bind(this.initialize, this);
    return ContactView.__super__.constructor.apply(this, arguments);
  }

  ContactView.prototype.tagName = 'tr';

  ContactView.prototype.template = Handlebars.compile($('#contact-tmpl').html());

  ContactView.prototype.events = {
    'click i': 'modifyContact'
  };

  ContactView.prototype.initialize = function() {
    $('#contacts-table').append(this.el);
    return this.model.bind('change', this.render, this);
  };

  ContactView.prototype.render = function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  };

  ContactView.prototype.modifyContact = function() {
    var form;
    form = new FormView({
      model: this.model
    });
    return form.render();
  };

  return ContactView;

})(Backbone.View);
