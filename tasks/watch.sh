#!/bin/sh
for dir in extensions/drupal/themes/custom/* extensions/drupal/modules/custom/*; do
    if [ -f "$dir/package.json" ]; then
        (cd  $dir; npm start ) &
    fi
done
wait
