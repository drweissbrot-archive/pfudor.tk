// Require Gulp and its plugins
var gulp            = require('gulp'),
    autoprefixer    = require('gulp-autoprefixer'),
    browsersync     = require('browser-sync').create(),
    concat          = require('gulp-concat'),
    jshint          = require('gulp-jshint'),
    minifycss       = require('gulp-minify-css'),
    minifyhtml      = require('gulp-minify-html'),
    plumber         = require('gulp-plumber'),
    reload          = browsersync.reload,
    rename          = require('gulp-rename'),
    sass            = require('gulp-sass'),
    uglify          = require('gulp-uglify');

// Register Gulp tasks
gulp.task('default', [
    'minifyhtml',
    'jshint',
    'concat',
    'uglify',
    'sass'
]);

gulp.task('watch', function() {
    watch();
});

gulp.task('serve', ['minifyhtml', 'sass', 'uglify'], function() {
    browsersync.init({
        server: './dist/'
    });

    watch();
    gulp.watch([
        './dist/**/*'
    ]).on('change', reload);
});

gulp.task('concat', function() {
    return gulp.src('./assets/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/assets/js/'));
});

gulp.task('jshint', function() {
    gulp.src('./assets/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('minifyhtml', function() {
    return gulp.src([
        './html/**/*.htm',
        './html/**/*.html'
    ])
        .pipe(minifyhtml({
            quotes: true
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function() {
    gulp.src([
        './assets/sass/**/*.scss',
        './assets/sass/**/*.sass'
    ])
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./dist/assets/css/'))

        // Use autoprefixer
        .pipe(autoprefixer({
            browsers: ['last 5 versions']
        }))
        .pipe(gulp.dest('./dist/assets/css/'))

        // Create minified files
        .pipe(minifycss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('uglify', ['concat'], function() {
    return gulp.src([
        './dist/assets/js/main.js'
    ])
        .pipe(plumber())
        .pipe(uglify({
            preserveComments: 'some'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/assets/js/'));
});

// The watch task
function watch() {
    gulp.watch([
        './html/**/*.htm',
        './html/**/*.html'
    ], ['minifyhtml']);

    gulp.watch([
        './assets/sass/**/*.scss',
        './assets/sass/**/*.sass'
    ], ['sass']);

    gulp.watch([
        './assets/js/**/*.js'
    ], ['jshint', 'uglify']);
}
