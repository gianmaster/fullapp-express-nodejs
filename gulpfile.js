var gulp = require('gulp');
var server = require('gulp-express');
var webpack = require('webpack-stream');

var webpackConfig = require('./webpack.config'); // no se utiliza sacar esto

var run = require('gulp-run');

gulp.task('server', function () {
    // Start the server at the beginning of the task
    server.run(['server.js']);

    // Restart the server when file changes
    gulp.watch(['app/**/*.ejs'], server.notify);
    gulp.watch(['app/styles/**/*.scss'], ['styles:scss']);
    //gulp.watch(['{.tmp,app}/styles/**/*.css'], ['styles:css', server.notify]);
    //Event object won't pass down to gulp.watch's callback if there's more than one of them.
    //So the correct way to use server.notify is as following:
    gulp.watch(['{.tmp,app}/styles/**/*.css'], function(event){
        gulp.run('styles:css');
        server.notify(event);
        //pipe support is added for server.notify since v0.1.5,
        //see https://github.com/gimm/gulp-express#servernotifyevent
    });

    gulp.watch(['app/scripts/**/*.js'], ['jshint']);
    gulp.watch(['app/images/**/*'], server.notify);
    gulp.watch(['server.js', 'server/**/*.js'], [server.run]);
    gulp.watch(['client/src/js/**/*.js'/*, 'server/views/*.ejs'*/], ['webpack']);
});

/*
gulp.task('webpacktask', function() {
  return gulp.src('src/entry.js')
    .pipe(webpack())
    .pipe(gulp.dest('dist/'));
});
*/

gulp.task("webpack", function() {
    // run webpack
    return run('node ./node_modules/webpack/bin/webpack.js').exec();
});
