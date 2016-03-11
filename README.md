# My sweet little helpers

Useful tasks, configs, terminal aliases and more...


## Configs

* [.htaccess](.htaccess) with server gzip compression and browser caching
* [.jshintrc](.jshintrc) with basic config for [jshint](http://jshint.com/)

### Aliases

* [custom aliases](aliases.md) for terminal
* [git aliases](aliases-git.md) for terminal


### Gulp tasks

* [Common gulp tasks](tasks/gulpfile.js): watch, concat and minify files
* [Resize images](tasks/resize-images.js) (script to resize multiple images)
* [Upload images](tasks/upload-images.js) (upload images to server, far more faster then FileZilla)
* [Critical CSS](tasks/gulp-critical.js) for creating critical above-the-fold CSS

### Commands
* [Various Terminal commands](commands-terminal.md)
* [Various Emmet commands](commands-emmet.md)

### Typescript definitions
* [tsd.json](tsd.json) with basic Typescript definitions for AngularJS

### Atom editor config
* [config](config) Configuration of Atom editor and installed packages
* [atom-packages.list](atom-packages.list) List of installed packages

Config file should be moved to `~/.atom/config.cson`
Packages should be installed from `~/.atom` directory with this command:
```
apm install `cat atom-packages.list`
```
