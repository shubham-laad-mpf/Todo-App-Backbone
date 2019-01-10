var TodoItemsView = Backbone.View.extend({
    tagName: 'ul',

    initialize: function (options) {
        if (!(options && options.collection)) {
            throw new Error("Collection is not specified");
        }
        this.collection.on("add", this.onAddTodoItem, this);
        this.collection.on("remove", this.onRemoveTodoItem, this);
    },

    onAddTodoItem: function (todoItem) {
        var todoItemView = new TodoItemView({ model: todoItem });
        this.$el.append(todoItemView.render().$el);
    },

    onRemoveTodoItem: function (todoItem) {
        this.$el.find("[data-id='" + todoItem.id + "']").remove();
        console.log(todoItem.toJSON());
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
            var todoItem = new TodoItem({ title: $textbox.val() });
            this.collection.create(todoItem);
            /*
                above line add() and save() both are same
                todoItem.save();
                this.collection.add(todoItem);
            */

            $textbox.val('');
        }
    },

    template: _.template('<input type="text" autofocus placeholder="Enter Description" class="js-input" /> <button class="js-add">Add</button>'),

    render: function () {
        this.$el.append(this.template());

        this.collection.each(function (todoItem) {
            var view = new TodoItemView({ model: todoItem });
            this.$el.append(view.render().$el);
        }, this);
        return this;
    }
})