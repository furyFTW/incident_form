var gulp = require('gulp');
var minify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');

gulp.task('html', function () {
    return gulp.src('client/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('build'));
});
gulp.task('scripts', function () {
    return gulp.src('client/*.js')
        .pipe(minify())
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['html', 'scripts']);