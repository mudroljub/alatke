# Handy terminal aliases

How-to create useful terminal aliases to make your life easier.

## Git root
Create a command that takes you to git root directory:
```sh
$ alias root="cd $(git rev-parse --show-toplevel)"
```
