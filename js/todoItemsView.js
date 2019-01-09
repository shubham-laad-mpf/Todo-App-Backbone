var TodoItemsView = Backbone.View.extend({
    tagName: 'ul',

    initialize: function (options) {
        if (!(options && options.collection)) {
            throw new Error("Collection is not specified");
        }
        this.collection.on("add", this.onAddTodoItem, this);
    },

    onAddTodoItem: function (todoItem) {
        var todoItemView = new TodoItemView({ model: todoItem });
        this.$el.append(todoItemView.render().$el);
    },

    events: {
        "click .js-add": "onClickAdd",
        "keypress .js-input": "onKeyPress",
    },

    onKeyPress: function (e) {
        if (e.keyCode === 13) {
            this.onClickAdd();
        }
    },

    onClickAdd: function () {
        var $textbox = this.$('.js-input');
        if ($textbox.val()) {
            var todoItem = new TodoItem({ description: $textbox.val() });
            this.collection.add(todoItem);
            $textbox.val('');
        }
    },

    render: function () {

        this.$el.append('<input type="text" autofocus placeholder="Enter Description" class="js-input" />');
        this.$el.append('<button class="js-add">Add</button>');
        this.collection.each(function (todoItem) {
            var view = new TodoItemView({ model: todoItem });
            this.$el.append(view.render().$el);
        }, this);
        return this;
    }
})