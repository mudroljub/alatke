# My sweet little helpers

Useful tasks, configs, terminal aliases and more...


### Git

* [git aliases](aliases-git.md) for terminal

### Terminal

* [custom aliases](aliases.md) for terminal
* [Various Terminal commands](commands-terminal.md)

### Linter

* [.jshintrc](.jshintrc) with basic config for [jshint](http://jshint.com/)

### Gulp tasks

* [Common gulp tasks](tasks/gulpfile.js): watch, concat and minify files
* [Resize images](tasks/resize-images.js) (script to resize multiple images)
* [Upload images](tasks/upload-images.js) (upload images to server, far more faster then FileZilla)
* [Critical CSS](tasks/gulp-critical.js) for creating critical above-the-fold CSS

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
