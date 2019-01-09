$(document).ready(function () {
    var todoItems = new TodoItems();

    todoItems.fetch();

    var todoItemsView = new TodoItemsView({ collection: todoItems });
    $('body').append(todoItemsView.render().$el);
})


