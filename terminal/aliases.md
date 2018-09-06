# Handy terminal aliases

```sh
# put in .bashrc or .zshrc
alias rm=trash
alias otv="xdg-open"
alias projekti="cd /home/damjan/projekti"
alias gituj="git add . && git commit -a -m"
alias suspend="systemctl suspend"

alias skolakoda="cd /home/damjan/projekti/skolakoda.github.io && bundle exec jekyll serve"
alias drafts="cd /home/damjan/projekti/skolakoda.github.io && bundle exec jekyll serve --drafts"
alias limitposts="cd /home/damjan/projekti/skolakoda.github.io && bundle exec jekyll serve --limit_posts 1"

# uncomment for a colored prompt, if the terminal has the capability
force_color_prompt=yes
```
