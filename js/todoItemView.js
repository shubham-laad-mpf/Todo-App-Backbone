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
    },

    onClickCheckbox: function () {
        this.model.toggle();
        console.log(this.model.toJSON())
    },

    render: function () {
        var isCompleted = this.model.get('isCompleted');
        var checked = isCompleted ? 'checked' : '';
        this.$el.toggleClass("completed", isCompleted);
        this.$el.html('<input type="checkbox" class="js-checkbox"' + checked + '/>' + this.model.escape("description")); // escape() use for html encode security
        return this;
    }
});