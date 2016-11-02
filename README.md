# My programming tools

Useful tasks, configs, terminal aliases and more...

### Helper functions

* [Helper JS functions](functions.js)

### Terminal

* [Aliases](aliases.md)
* [Commands](commands-terminal.md)
* [Watch task](tasks/watch.sh) (run multiple npm start)

### Gulp tasks

* [Common gulp tasks](tasks/gulpfile.js): watch, concat and minify files
* [Build CSS](tasks/build-css.js) (concat, minify, autoprefix)
* [Build JS](tasks/build-js.js) (concat, minify)
* [Resize images](tasks/resize-images.js) (script to resize multiple images)
* [Upload images](tasks/upload-images.js) (upload images to server, far more faster then FileZilla)
* [Critical CSS](tasks/gulp-critical.js) for creating critical above-the-fold CSS

### Git

* [git aliases](aliases-git.md) for terminal

### Linter

* [.jshintrc](.jshintrc) with basic config for [jshint](http://jshint.com/)

### Typescript
* [tsd.json](tsd.json) with basic Typescript definitions for AngularJS

### Atom editor
Navigate to `~/.atom` directory and copy those files:

* [config.cson](config.cson) Configuration file of Atom editor and installed packages
* [atom-packages.list](atom-packages.list) List of installed packages

Then, install packages with this command:
```
apm install `cat atom-packages.list`
```

### Apache

* [.htaccess](.htaccess) with server gzip compression and browser caching

### Emmet

* [Various Emmet commands](commands-emmet.md)
