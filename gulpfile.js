/**
 * Gulp file.
 * rodion.rocker77@gmail.com
 * September 2017
 */

/*-------------------------------------------------------------------
    REQUIRED PLUGINS
-------------------------------------------------------------------*/

var gulp         = require('gulp'),
    less         = require('gulp-less'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    del          = require('del'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber      = require('gulp-plumber');

/*-------------------------------------------------------------------
    CONFIGURATION
-------------------------------------------------------------------*/

path = {
    app:         'app',
    less:        'app/less/**/*.less',
    css:         'app/css',
    cssMainFile: 'app/css/main.css',
    js:          'app/js/modules/**/*.js',
    jsAssembled: 'app/js',
    html:        'app/*.html',
    appImg:      'app/img/**/*',
    distImg:     'dist/img'
}

/*-------------------------------------------------------------------
    LESS Compilation
-------------------------------------------------------------------*/

gulp.task('less', function(){
    return gulp.src(path.less)
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest(path.css))
        .pipe(browserSync.reload({stream: true}))
});

/*-------------------------------------------------------------------
    ASSEMBLY AND MINIFICATION JS
-------------------------------------------------------------------*/

gulp.task('scripts', function() {
    return gulp.src(path.js)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(path.jsAssembled))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.jsAssembled))
        .pipe(browserSync.reload({stream: true}))
});

/*-------------------------------------------------------------------
    LIVE RELOAD
-------------------------------------------------------------------*/

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: path.app
        },
        notify: false
    });
});

/*-------------------------------------------------------------------
    ASSEMBLY AND MINIFICATION CSS
-------------------------------------------------------------------*/

gulp.task('css-libs', ['less'], function() {
    return gulp.src(path.cssMainFile)
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.css));
});

/*-------------------------------------------------------------------
    UPDATE FILES (CTRL+S)
-------------------------------------------------------------------*/

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch(path.less, ['less']);
    gulp.watch(path.html, browserSync.reload);
    gulp.watch('app/js/**/*.js', ['scripts']);
});

/*-------------------------------------------------------------------
    CLEARING FOLDERS
-------------------------------------------------------------------*/

gulp.task('clean', function() {
    return del.sync('dist');
});

/*-------------------------------------------------------------------
    SHRINK IMAGES
-------------------------------------------------------------------*/

gulp.task('img', function() {
    return gulp.src(path.appImg)
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
    })))
    .pipe(gulp.dest(path.distImg));
});

/*-------------------------------------------------------------------
    BUILD PROJECT
-------------------------------------------------------------------*/

gulp.task('build', ['clean', 'img', 'less', 'scripts'], function() {
    var buildCss = gulp.src([
        'app/css/main.css',
        'app/css/main.min.css'
    ]).pipe(gulp.dest('dist/css'));

    var buildVendorCss = gulp.src([
        'app/css/vendors/**/*'
    ]).pipe(gulp.dest('dist/css/vendors'));

    var buildFonts = gulp.src('app/fonts/**/*').pipe(gulp.dest('dist/fonts'));
    var buildJs = gulp.src('app/js/**/*').pipe(gulp.dest('dist/js'));
    var buildHtml = gulp.src('app/*.html').pipe(gulp.dest('dist'));
});

/*-------------------------------------------------------------------
    DEFAULT TASK
-------------------------------------------------------------------*/

gulp.task('default', ['watch']);