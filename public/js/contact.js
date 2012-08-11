var Contact,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

Contact = (function(_super) {

  __extends(Contact, _super);

  Contact.name = 'Contact';

  function Contact() {
    return Contact.__super__.constructor.apply(this, arguments);
  }

  Contact.prototype.url = "/contact";

  Contact.prototype.toMyJSON = function() {
    var json, key, _i, _len, _ref;
    json = this.toJSON();
    _ref = ["blog", "renren", "weibo_url"];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      key = _ref[_i];
      if (key in json) {
        json[key] = json[key].replace(/.*?:\/\//g, '');
      }
    }
    return json;
  };

  return Contact;

})(Backbone.Model);
