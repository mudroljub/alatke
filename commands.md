### Terminal

Za konzolu u boji, edituje se ovajl fajl u home:
```
cd
atom .bashrc
```

Koja sam user grupa:
```
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

### Emmet

Pravi razlicite slike:
```
(.col-xs-6.col-sm-3>img[src="https://unsplash.it/150/150?image=$" alt="face"].img-circle.img-responsive)*4
```

Kolone sa ikonicama i tekstom:
```
(.col-sm-4>((span.glyphicon.glyphicon-user.dark-gray-bgd.white)+(.audience-text>h5{HEADING}+small>lorem20))*5)*3
(.col-sm-4>(.row>(.col-sm-4.vertical-middle>span.glyphicon.glyphicon-user.dark-gray-bgd.white)+(.col-sm-7.vertical-middle.audience-text>h5{HEADING}+small>lorem20))*5)*3
```
