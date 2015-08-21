# PFUDOR.tk

PFUDOR.tk was some stupid idea. It's main purpose is to display the video "Pink Fluffy Unicorns Dancing On Rainbows" (or any other YouTube video) on loop.

While [older versions](https://github.com/drweissbrot/pfudor.tk-ex) were built using PHP and [jquery.mb.YTPlayer](https://github.com/pupunzi/jquery.mb.YTPlayer), and a later version with JavaScript and PHP only for the generator, the current revision is build entirely with JavaScript.

## Want to see it in action?
You can find our setup on https://pfudor.tk.

## Getting started
1. Install [Node.js](https://nodejs.org/) and npm.
1. Clone / download this repository and ``` $ cd ``` into the folder.
1. Run ``` $ sudo npm install ```. (You can omit the _sudo_ on Windows, and if you're lucky also on other operating systems.)
1. To compile the site: ``` $ gulp ```
1. To watch changes and compile automatically: ``` $ gulp watch ```
1. To start a Browsersync server (with automatic compiling): ``` $ gulp serve ```

## Contribute
Want to contribute? Great! Submit any bugs or features you would like to see as issues, or fix / add them yourself and submit a pull request. Thank you in advance!

## Third-party technologies
PFUDOR.tk's structure is based on [dough-static](https://github.com/drweissbrot/dough-static).

PFUDOR.tk uses following technologies to work:
* [npm](https://npmjs.com/) (Package management)
* [Gulp](http://gulpjs.com/)
* [Sass](http://sass-lang.com/)
* [Browsersync](http://www.browsersync.io/)
* [normalize.css](https://github.com/necolas/normalize.css)
* [colors](http://clrs.cc/)

Following Gulp plugins are used:
* [autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
* [concat](https://www.npmjs.com/package/gulp-concat)
* [jshint](https://www.npmjs.com/package/gulp-jshint)
* [minify-css](https://www.npmjs.com/package/gulp-minify-css)
* [minify-html](https://www.npmjs.com/package/gulp-minify-html)
* [plumber](https://www.npmjs.com/package/gulp-plumber)
* [rename](https://www.npmjs.com/package/gulp-rename)
* [sass](https://www.npmjs.com/package/gulp-sass)
* [uglify](https://www.npmjs.com/package/gulp-uglify)

## License
PFUDOR.tk is licensed under the [MIT license](https://github.com/drweissbrot/pfudor.tk/LICENSE.md)
