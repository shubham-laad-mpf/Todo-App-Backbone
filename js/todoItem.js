var TodoItem = Backbone.Model.extend({
    defaults: {
        isCompleted: false
    },

    validate: function (atts) {
        // When we save todo Item and don't supply description 
        // then It wont save to server.
        if (!atts.description) {
            return 'Description is required';
        }
    },

    toggle: function () {
        this.set('isCompleted', !this.get('isCompleted'));
    }
});