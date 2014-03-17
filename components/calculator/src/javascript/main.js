app.components.calculator = Backbone.View.extend({

    events: {
        'submit': 'on_submit',
        '.number': 'on_number'
    },

    initialize: function () {
        this.$output = this.$el.find('.output');
    },

    on_number: function (event) {
        var current = this.$output.val();
        this.$output.val(current + $(event.target).val());
    },

    on_submit: function (event) {
        event.preventDefault();

        console.log('calculate!');
    }

});
