module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        handlebars: {
            compile: {
                options: {
                    namespace: 'app.templates'
                },
                files: {
                    'path/to/result.js': 'path/to/source.hbs',
                    'path/to/another.js': ['path/to/sources/*.hbs', 'path/to/more/*.hbs']
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.registerTask('default', ['handlebars']);

};