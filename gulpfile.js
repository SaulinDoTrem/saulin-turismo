const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const uglify = require("gulp-uglify");
const buffer = require("vinyl-buffer");
const connect = require("gulp-connect");
const imagemin = require("gulp-imagemin");

const paths = {
    html: {
        all: "src/templates/**/*.html",
    },
    images: {
        all: "src/assets/**/*",
    },
    styles: {
        all: "src/styles/**/*.scss",
        main: "src/styles/main.scss",
    },
    scripts: {
        all: "src/scripts/**/*.js",
        main: "src/scripts/app.js",
    },
    output: {
        files: "docs",
        images: "docs/assets",
    },
};

function server() {
    connect.server({
        root: paths.output.files,
        livereload: true,
        port: 3000,
    });
}

function html() {
    return src(paths.html.all).pipe(dest(paths.output.files)).pipe(connect.reload());
}

function images() {
    return src(paths.images.all)
        .pipe(imagemin())
        .pipe(dest(paths.output.images))
        .pipe(connect.reload());
}

function styles() {
    return src(paths.styles.main)
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(dest(paths.output.files))
        .pipe(connect.reload());
}

function scripts() {
    return browserify(paths.scripts.main)
        .transform("babelify", { presets: ["@babel/preset-env"] })
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(dest(paths.output.files))
        .pipe(connect.reload());
}

function sentinel() {
    watch(paths.html.all, { ignoreInitial: false }, html);
    watch(paths.styles.all, { ignoreInitial: false }, styles);
    watch(paths.scripts.all, { ignoreInitial: false }, scripts);
    watch(paths.images.all, { ignoreInitial: false }, images);
}

exports.default = parallel(server, sentinel);
