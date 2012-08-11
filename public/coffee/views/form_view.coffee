class FormView extends Backbone.View

    className: "modal fade hide"

    events:
        'click #save-btn': 'saveContact'

    template: Handlebars.compile $('#form-tmpl').html()

    initialize: ->
        @$el.on "hidden", => @remove()

    render: =>
        @$el.html @template @model.toMyJSON()
        @$el.modal()

    saveContact: =>
        # 用表单数据覆盖model数据
        serialized_data = @$("form").serializeArray()
        _.each serialized_data, (o) =>
            [k, v] = [o.name, o.value]
            if k in ["blog", "renren", "weibo_url"]
                v = "http://" + v
            @model.set k, v, silent:true
        console.log @model
        @model.change()
        @model.save()

        @$el.modal("hide")
