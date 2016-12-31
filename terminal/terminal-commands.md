### Terminal

Nalazi i menja svaki tga sa png u fajl.txt:
```
sed -i -- 's/tga/png/g' fajl.txt
```

Nalazi sve `.mobi` fajlove rekurzivno u podfolderima i premešta ih:
```
find . -name "*.mobi" -exec mv -t literatura/za-citac/ {} +
```

Menja sve nazive fajlova u mala slova:
```
rename 'y/A-Z/a-z/' *
```

Koja sam user grupa:
```
groups $(whoami)
ili
groups $(whoami) | cut -d' ' -f1
```

Štampa čitljiv $PATH:
```
tr : '\n' <<<$PATH
```

Otvara nezavisno od terminala:
```
nohup (ili)
setsid
```

Proverava apache (apache nece da krene kad se obrise log folder!) :
```
sudo apachectl configtest
```

Za konzolu u boji, edituje se ovajl fajl u home:
```
cd
atom .bashrc
```
