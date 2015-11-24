# Create handy terminal aliases

How to create useful terminal aliases to make your life easier (you can call them whatever you like).

## Git root
Create a terminal command that takes you to the git root directory of the project:
```sh
$ alias root="cd $(git rev-parse --show-toplevel)"
```

## Git sync
Create a global git command that connects git pull and git push:

```sh
$ git config --global alias.sync '!git pull --rebase && git push'
```
