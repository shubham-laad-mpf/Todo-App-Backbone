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
        console.log(this.model.toJSON())
    },

    render: function () {
        this.$el.attr("data-id", this.model.get('id'));
        var isCompleted = this.model.get('isCompleted');
        var checked = isCompleted ? 'checked' : '';
        this.$el.toggleClass("completed", isCompleted);
        this.$el.html('<input type="checkbox" class="js-checkbox"' + checked + '/>' + this.model.escape("description") + '<button class="js-delete">delete</button>'); // escape() use for html encode security
        return this;
    }
});