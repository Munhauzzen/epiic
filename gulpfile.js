let gulp = require('gulp'),
   sass = require('gulp-sass'),
   rename = require('gulp-rename'),
   browserSync = require('browser-sync'),
   autoprefixer = require('gulp-autoprefixer'),
   concat = require('gulp-concat'),
   uglify = require('gulp-uglify'),
   cssmin = require('gulp-cssmin');

gulp.task('sass', function () {
   return gulp.src('app/assets/scss/**/*.scss')
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(autoprefixer({
         overrideBrowserslist: ['last 8 versions']
      }))
      .pipe(gulp.dest('app/assets/css'))
      .pipe(browserSync.reload({ stream: true }))
});

gulp.task('style', function () {
   return gulp.src([
      'node_modules/normalize.css/normalize.css',
      'node_modules/slick-carousel/slick/slick.css',
      'node_modules/magnific-popup/dist/magnific-popup.css',
      'node_modules/rateyo/src/jquery.rateyo.css',
      'node_modules/ion-rangeslider/css/ion.rangeSlider.css',
      'node_modules/animate.css/animate.css',
      'node_modules/jquery-form-styler/dist/jquery.formstyler.css',
      'node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css',
      'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
   ])
      .pipe(concat('libs.min.css'))
      .pipe(cssmin())
      .pipe(gulp.dest('app/assets/css'))
});

gulp.task('script', function () {
   return gulp.src([
      'node_modules/slick-carousel/slick/slick.js',
      'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
      'node_modules/mixitup/dist/mixitup.js',
      'node_modules/rateyo/src/jquery.rateyo.js',
      'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
      'node_modules/readmore-js/readmore.js',
      'node_modules/wow.js/dist/wow.js',
      'node_modules/masonry-layout/dist/masonry.pkgd.js',
      'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
      'node_modules/shave/dist/jquery.shave.js',
      'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
      'node_modules/@jaames/iro/dist/iro.js',
      'node_modules/@irojs/iro-core/dist/iro-core.js',
   ])
      .pipe(concat('libs.min.js'))
      .pipe(uglify(''))
      .pipe(gulp.dest('app/assets/js'))
});

gulp.task('html', function () {
   return gulp.src('app/*.html')
      .pipe(browserSync.reload({ stream: true }))
});


gulp.task('js', function () {
   return gulp.src('app/assets/js/*.js')
      .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function () {
   browserSync.init({
      server: {
         baseDir: "app/"
      }
   });
});

gulp.task('watch', function () {
   gulp.watch('app/assets/scss/**/*.scss', gulp.parallel('sass'))
   gulp.watch('app/*.html', gulp.parallel('html'))
   gulp.watch('app/assets/js/*.js', gulp.parallel('js'))
});

gulp.task('default', gulp.parallel('style', 'script', 'sass', 'watch', 'browser-sync'))