import gulp from 'gulp';
import zip from 'gulp-zip';
import { deleteSync } from 'del';
import packageJson from './package.json' with { type: 'json' };

gulp.task('zip', () => {
  return gulp
    .src(['manifest.json', 'no-click-to-edit.js', 'icons/*', 'screenshots/*', 'LICENSE', 'README.md'])
    .pipe(zip(`no-click-to-edit-${packageJson.version}.zip`))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
  deleteSync('dist/*');
  return Promise.resolve();
});
