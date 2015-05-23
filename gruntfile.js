module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['sass/*.scss'],
                tasks: ['sass', 'cssmin']
            },
            uglify: {
                files: ['js/*.js'],
                tasks: ['uglify']
            }
        },
        uglify: {
            options: {
                manage: false
            },
            my_target: {
                files: {
                    'www/pfudortk.min.js': ['js/*.js']
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    '.cache/css/pfudortk.css': 'sass/map.scss',
                    '.cache/css/gen.css': 'sass/gen.scss'
                }
            }
        },
        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: '.cache/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'www/',
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
