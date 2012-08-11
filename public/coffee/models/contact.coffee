class Contact extends Backbone.Model

    url: "/contact"

    # remove "http://" from urls for easier render
    toMyJSON: ->
        json = @toJSON()
        for key in ["blog", "renren", "weibo_url"]
            json[key] = json[key].replace /.*?:\/\//g, '' if key of json
        return json
