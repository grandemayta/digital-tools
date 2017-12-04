var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat', function() {
    return gulp
        .src('src/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('dev', ['concat'], function() {
    console.log('Gulp funziona!');
});