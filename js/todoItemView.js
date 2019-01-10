var TodoItemView = Backbone.View.extend({
    tagName: 'li',

    initialize: function (options) {
        if (!(options && options.model)) {
            throw new Error("Model is not specified");
        }

        this.model.on('change', this.render, this);
    },

    events: {
        "click .js-checkbox": "onClickCheckbox",
        "click .js-delete": "onClickDelete",
    },

    onClickDelete: function () {
        this.model.destroy();
    },

    onClickCheckbox: function () {
        this.model.toggle();
        this.model.save();
    },

    template: _.template('<input type="checkbox" class="js-checkbox" <% if(completed) print("checked") %>/> <% print(title) %> <button class="js-delete">delete</button>'),

    render: function () {
        this.$el.attr("data-id", this.model.get('id'));
        var isCompleted = this.model.get('completed');
        this.$el.toggleClass("completed", isCompleted);

        var attr = this.model.toJSON();
        this.$el.html(this.template(attr));
        return this;
    }
});