//引入 gulp
const gulp = require('gulp');
//引入插件
const cssmin = require('gulp-cssmin');//压缩css
const uglify = require('gulp-uglify');//压缩js
const rename = require('gulp-rename');//重命名
const imagemin = require('gulp-imagemin');//压缩图片

//压缩css
gulp.task('css',function(){
    return gulp.src('src/css/index/*.css')
                .pipe(rename({'suffix':'.min'}))
                .pipe(cssmin())
                .pipe(gulp.dest('dest/css/index'))
})

//压缩js
gulp.task('js',function(){
    return gulp.src('src/js/index/*.js')
                .pipe(rename({'suffix':'.min'}))
                .pipe(uglify())
                .pipe(gulp.dest('dest/js/index'))
})

//压缩图片
gulp.task('img', function(){
    return gulp.src('src/img/index/*.png')
                .pipe(imagemin())
                //.pipe(rename({'suffix':'.min'}))
                .pipe(gulp.dest('dest/img/index'))
})