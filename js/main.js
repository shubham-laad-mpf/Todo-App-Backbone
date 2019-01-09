$(document).ready(function () {
    /*
    var todoItem = new TodoItem({ description: "Todo 1" });
    var todoItemView = new TodoItemView({ model: todoItem });
    */

    var todoItems = new TodoItems([
        new TodoItem({ description: "Todo 1" }),
        new TodoItem({ description: "Todo 2" })
    ]);
    var todoItemsView = new TodoItemsView({ collection: todoItems });
    $('body').append(todoItemsView.render().$el);
})


