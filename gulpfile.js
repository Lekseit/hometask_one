const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function optimizeImages() {
    return gulp.src('src/images/**/*.{jpg,jpeg,png,gif,svg}', { encoding: false })
        .pipe(imagemin([
            imagemin.mozjpeg({ quality: 80 }),
            imagemin.optipng({ optimizationLevel: 1 }),
            imagemin.svgo(),
            imagemin.gifsicle()
        ], {
            verbose: true
        }))
        .on('error', function(err) {
            console.error('Ошибка оптимизации изображения:', err);
            this.emit('end');
        })
        .pipe(gulp.dest('dist/images'));
}

exports.optimizeImages = optimizeImages;
exports.default = optimizeImages;

