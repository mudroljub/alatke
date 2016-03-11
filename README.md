# My sweet little helpers

Useful tasks, configs, terminal aliases and more...


### Terminal

* [custom aliases](aliases.md) for terminal
* [Various Terminal commands](commands-terminal.md)

### Git

* [git aliases](aliases-git.md) for terminal

### Linter

* [.jshintrc](.jshintrc) with basic config for [jshint](http://jshint.com/)

## Apache

* [.htaccess](.htaccess) with server gzip compression and browser caching

### Gulp tasks

* [Common gulp tasks](tasks/gulpfile.js): watch, concat and minify files
* [Resize images](tasks/resize-images.js) (script to resize multiple images)
* [Upload images](tasks/upload-images.js) (upload images to server, far more faster then FileZilla)
* [Critical CSS](tasks/gulp-critical.js) for creating critical above-the-fold CSS

### Typescript definitions
* [tsd.json](tsd.json) with basic Typescript definitions for AngularJS

### Atom editor config
* [config.cson](config.cson) Configuration file of Atom editor and installed packages
* [atom-packages.list](atom-packages.list) List of installed packages

Both files should be moved to `~/.atom` directory. You can install packages with this command:
```
apm install `cat atom-packages.list`
```

### Other

* [Various Emmet commands](commands-emmet.md)
