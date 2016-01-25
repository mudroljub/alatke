### Terminal

Za konzolu u boji, edituje se ovajl fajl u home:
```
cd
atom .bashrc
```

Koja sam user grupa:
```
groups $(whoami)
ili
groups $(whoami) | cut -d' ' -f1
```

Proveraca apache (apache nece da krene kad se obrise log folder!) :
```
sudo apachectl configtest
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
