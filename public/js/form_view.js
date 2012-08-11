var FormView,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

FormView = (function(_super) {

  __extends(FormView, _super);

  FormView.name = 'FormView';

  function FormView() {
    this.saveContact = __bind(this.saveContact, this);

    this.render = __bind(this.render, this);
    return FormView.__super__.constructor.apply(this, arguments);
  }

  FormView.prototype.className = "modal fade hide";

  FormView.prototype.events = {
    'click #save-btn': 'saveContact'
  };

  FormView.prototype.template = Handlebars.compile($('#form-tmpl').html());

  FormView.prototype.initialize = function() {
    var _this = this;
    return this.$el.on("hidden", function() {
      return _this.remove();
    });
  };

  FormView.prototype.render = function() {
    this.$el.html(this.template(this.model.toMyJSON()));
    return this.$el.modal();
  };

  FormView.prototype.saveContact = function() {
    var serialized_data,
      _this = this;
    serialized_data = this.$("form").serializeArray();
    _.each(serialized_data, function(o) {
      var k, v, _ref;
      _ref = [o.name, o.value], k = _ref[0], v = _ref[1];
      if (k === "blog" || k === "renren" || k === "weibo_url") {
        v = "http://" + v;
      }
      return _this.model.set(k, v, {
        silent: true
      });
    });
    console.log(this.model);
    this.model.change();
    this.model.save();
    return this.$el.modal("hide");
  };

  return FormView;

})(Backbone.View);
