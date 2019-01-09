var TodoItem = Backbone.Model.extend({
    defaults: {
        completed: false
    },

    urlRoot: 'https://jsonplaceholder.typicode.com/todos',

    validate: function (atts) {
        // When we save todo Item and don't supply description 
        // then It wont save to server.
        if (!atts.title) {
            return 'Title is required';
        }
    },

    toggle: function () {
        this.set('completed', !this.get('completed'));
    }
});