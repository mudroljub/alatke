### Atom editor
Navigate to `~/.atom` directory and copy those files:

* [config.cson](config.cson) Configuration file of Atom editor and installed packages
* [atom-packages.list](atom-packages.list) List of installed packages

Then, install packages with this command:
```
apm install `cat atom-packages.list`
```
