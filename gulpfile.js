const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const uglify = require("gulp-uglify");
const buffer = require("vinyl-buffer");
const connect = require("gulp-connect");

const paths = {
    html: {
        all: "src/templates/**/*.html",
    },
    styles: {
        all: "src/styles/**/*.scss",
        main: "src/styles/main.scss",
    },
    scripts: {
        all: "src/scripts/**/*.js",
        main: "src/scripts/app.js",
    },
    output: "docs",
};

function server() {
    connect.server({
        root: paths.output,
        livereload: true,
        port: 3001,
    });
}

function html() {
    return src(paths.html.all).pipe(dest(paths.output)).pipe(connect.reload());
}

function styles() {
    return src(paths.styles.main)
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(dest(paths.output))
        .pipe(connect.reload());
}

function scripts() {
    return browserify(paths.scripts.main)
        .transform("babelify", { presets: ["@babel/preset-env"] })
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(dest(paths.output))
        .pipe(connect.reload());
}

function sentinel() {
    watch(paths.html.all, { ignoreInitial: false }, html);
    watch(paths.styles.all, { ignoreInitial: false }, styles);
    watch(paths.scripts.all, { ignoreInitial: false }, scripts);
}

exports.default = parallel(server, sentinel);
