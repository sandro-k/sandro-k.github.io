module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        // the SASS task
        sass: {
            dist: {                            // Target
                files: [{
                    expand: true,
                    src: ['*.scss'],
                    dest: 'build',
                    ext: '.css'
                }]
            }
        },


        watch: {
            // watch for SCSS files and compile to css
            sass: {
                files: ['*.scss'],
                tasks: ['sass'],
                options: {
                    // use live reload that is build in with grunt watch and use default port
                    livereload: true
                }
            }
        }
    });


    // a task that builds the overall app
    grunt.registerTask('build', ['sass']);

    // load sass
    grunt.loadNpmTasks('grunt-contrib-sass');

    // watch
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['build']);





};
