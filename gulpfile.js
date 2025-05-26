import gulp from 'gulp';
import zip from 'gulp-zip';
import { deleteSync } from 'del';
import packageJson from './package.json' with { type: 'json' };

gulp.task('zip', () => {
  const files = [
    'icons/**/*',
    'screenshots/**/*',
    'manifest.json',
    'no-click-to-edit.js',
    'LICENSE',
    'README.md'
  ];
  return gulp
    .src(files, { base: './' })
    .pipe(zip(`no-click-to-edit-${packageJson.version}.zip`))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
  deleteSync('dist/*');
  return Promise.resolve();
});
