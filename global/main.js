var app = {};
app.components = {};

app.global = {

    startup_functions: [],

    add_startup_function: function (fn) {
        this.startup_functions.push(fn);
    },

    init: function () {
        this.startup_functions.forEach(function (fn) {
            fn();
        });
    }
};