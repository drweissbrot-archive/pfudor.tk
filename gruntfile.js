module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['sass']
            },
            uglify: {
                files: ['js/**/*.js'],
                tasks: ['uglify']
            }
        },
        uglify: {
            options: {
                manage: false
            },
            my_target: {
                files: {
                    'www/assets/pfudortk.min.js': ['js/*.js']
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    cacheLocation: '.cache/sass'
                },
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['*.scss'],
                    dest: 'www/assets/',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'www/assets/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'www/assets/',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['uglify', 'sass', 'cssmin']);
};
