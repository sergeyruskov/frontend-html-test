var compass = require("gulp-compass"),
	autoprefixer = require("gulp-autoprefixer"),
	imagemin = require("gulp-imagemin"),
	uglify = require("gulp-uglify"),
	concat = require("gulp-concat"),
	minifyHTML = require("gulp-minify-html"),
	gulp = require("gulp"),
	plumber = require("gulp-plumber"),
	jsonminify = require("gulp-jsonminify"),
	coffee = require("gulp-coffee"),
	livereload = require('gulp-livereload'),

	distPath = "../";


gulp.task("default", ["fonts", "js-copy", "coffee", "json-minify", "favicon", "imagemin", "compass", "minifyHtml", "scripts", "watch"]);

//CoffeeScript
// Показывает ошибки
function swallowError (error) {
	console.log(error.toString());
	this.emit('end');
}
gulp.task("coffee", function() {
	gulp.src("coffee/*.coffee")
		.pipe(coffee())
		.on('error', swallowError)
		.pipe(gulp.dest("js"));
});

//JS
gulp.task("scripts", function () {
	gulp.src("js/**/*.js")
	.pipe(plumber()) 
	.pipe(concat("script.js"))
	.pipe(uglify())
	.pipe(gulp.dest(distPath + "js"));
});

//HTML
gulp.task("minifyHtml", function () {
	gulp.src("*.php")
		.pipe(plumber()) 
		.pipe(minifyHTML())
		.pipe(gulp.dest(distPath));
});

// Sass Css Compass
gulp.task("compass",  function () {

	gulp.src("sass/style.scss")
		.pipe(plumber())
		.pipe(compass({
			config_file: "./config.rb",
			css: distPath,
			sourcemap: true
		}))
		.pipe(autoprefixer({
			browsers: ["> 1%"]
		}))
		.pipe(gulp.dest(distPath));
});

// Imagemin
gulp.task("imagemin",  function () {
	gulp.src("images/**/**")
		.pipe(plumber()) 
		.pipe(imagemin())
		.pipe(gulp.dest(distPath + "images"));
});

//Move fonts
gulp.task("fonts", function () {
	gulp.src("fonts/**/**")
	.pipe(gulp.dest(distPath + "fonts")); 
});

//Move favicon
gulp.task('favicon', function() {
	gulp.src('favicon.ico')
	.pipe(gulp.dest(distPath));
});

//Move js
gulp.task('js-copy', function() {
	gulp.src('coffee/*/**/**')
	.pipe(gulp.dest('js'));
});

//Minify json
gulp.task("json-minify", function () {
	return gulp.src(["json/**"])
		.pipe(jsonminify())
		.pipe(gulp.dest(distPath + "json"));
});

// Watch
gulp.task("watch", function () {
	gulp.watch("sass/**/**/**", ["compass"]);
	gulp.watch("*.php", ["minifyHtml"]);
	gulp.watch("js/**/**/**", ["scripts"]);
	gulp.watch("coffee/*.coffee", ["coffee"]);
	gulp.watch("fonts/**/**", ["fonts"]);
	gulp.watch("images/**/**", ["imagemin"]);
	gulp.watch("json/**", ["json-minify"]);

	livereload.listen();
	gulp.watch(distPath + 'style.css').on('change', livereload.changed);
	gulp.watch(distPath + 'index.php').on('change', livereload.changed);
	gulp.watch(distPath + 'js/script.js').on('change', livereload.changed);
	gulp.watch(distPath + 'images/**/**/**').on('change', livereload.changed);
	gulp.watch(distPath + 'json/**').on('change', livereload.changed);
});