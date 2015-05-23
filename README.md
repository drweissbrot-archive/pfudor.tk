# PFUDOR.tk
## About this project
PFUDOR.tk was some stupid idea. It's main purpose is to display the video "Pink Fluffy Unicorns Dancing On Rainbows" (or any other YouTube video) on loop.

While [older versions](https://github.com/drweissbrot/pfudor.tk-ex) were built using PHP and [jquery.mb.YTPlayer](https://github.com/pupunzi/jquery.mb.YTPlayer), the current revision is build (almost) entirely with JavaScript.

## Want to see it in action?
You can find our setup on [https://pfudor.tk](https://pfudor.tk).

## Getting this thing to work
While older versions required you to set up a web server with PHP, you'll only need this if you want to modify the generator's processing script. If not, you'll be perfectly fine without any web server; just ignore the first step in this case.

### Dependencies
* NPM, Grunt
* Sass
* optional: Apache, PHP

### Getting Started

1. Set up a web server (recommendation: apache2) with PHP 5.
* Clone this repository into the server's directory. For example:
    `` $ git clone https://github.com/drweissbrot/pfudor.tk.git /var/www/html/pfudor ``
* Open up a terminal, and cd into the clone's folder. E.g. `` $ cd /var/www/html/pfudor.tk ``
* Install the dependencies: `` $ npm install ``
* Compile and minify stylesheets and JS files: `` $ grunt ``
* While editing, you might want to use `` $ grunt watch ``

## Contribute
Want to contribute? Great! Add any bugs or features you would like to see as issues, or fix / add them yourself and submit a pull request. Thank you in advance!

## License
PFUDOR.tk is licensed under MIT. See [LICENSE.md](https://github.com/drweissbrot/pfudor.tk/blob/master/LICENSE.md) for details.
