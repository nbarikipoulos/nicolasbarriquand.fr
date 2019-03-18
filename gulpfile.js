'use strict'

const fs = require('fs');

const gulp = require('gulp'),
  pug = require('gulp-pug'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  cleanCSS = require('gulp-clean-css'),
  del = require('del'),
  gulpif = require('gulp-if'),
  cipherJSON = require('gulp-cipher-json')
;

//////////////////////
// OPTIONS
//////////////////////

let argv = require('minimist')(process.argv.slice(2));

let secret = argv.p;

let isProd = 'production' === process.env.NODE_ENV;

//////////////////////
// SOURCES
//////////////////////

const src = 'src';
const dist = 'dist';

const paths = {
  sass: {
    src: `${src}/sass/**/*.scss`,
    dist: `${dist}/css`
  },
  images: {
    src: `${src}/images/**/*`,
    dist: `${dist}/images`
  },
  js: {
    src: `${src}/scripts/**/*`,
    dist: `${dist}/scripts`
  },
  templates: {
    src: `${src}/templates/main.pug`,
    dist: `${dist}`
  },
  data: {
    src: `${src}/data`,
    dist: `${src}/data`,
  }
}

//////////////////////
// TASKS
//////////////////////

let css = _ => gulp.src(paths.sass.src)
.pipe(sass())
.pipe(gulpif(isProd, cleanCSS()))
.pipe(rename('style.css'))
.pipe(gulp.dest(paths.sass.dist));

let js = _ => gulp
  .src(paths.js.src)
  .pipe(gulpif(isProd, uglify()))
//  .pipe(gulpif(isProd, concat('scripts.min.js')))
  .pipe(concat('scripts.min.js'))
  .pipe(gulp.dest(paths.js.dist))
;
let image = _ => gulp
  .src(paths.images.src)
  .pipe(gulp.dest(paths.images.dist))
;

let copy = gulp.series( gulp.parallel(css, js, image));

let clean = _ => del(dist);

let data, projects;

try {
  data = JSON.parse(fs.readFileSync(`${src}/data/data.json`, 'utf8'));
  projects = JSON.parse(fs.readFileSync(`${src}/data/projects.json`, 'utf8'));
} catch(error) {
  if (!argv._.includes('uncipher')) {
    console.log('Warning: No json data files: uncipher cjson before.')
    process.exit(0);
  }
}

let pugOptions = {
  locals : { data, projects},
}
if (!isProd) {
  Object.assign(pugOptions, {pretty: true})
}

let html = _ => {  
  return gulp.src(paths.templates.src)
    .pipe(pug(pugOptions))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(paths.templates.dist));
};

gulp.task('cipher', () => gulp.src('src/data/*.json')
  .pipe(cipherJSON(
    'encrypt',
    secret
  ))
  .pipe(rename({extname:'.cjson'}))
  .pipe(gulp.dest('src/data'))
);

gulp.task('uncipher', () => gulp.src('src/data/*.cjson')
  .pipe(cipherJSON(
    'decrypt',
    secret
  ))
  .pipe(rename({extname:'.json'}))
  .pipe(gulp.dest('src/data'))
);

gulp.task(
  'default',
  gulp.series(clean, copy, html)
);