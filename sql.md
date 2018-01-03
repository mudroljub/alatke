Prikazuje tri odvojena polja kao datum:

```sql
SELECT dan, mesec, godina AS datum, STR_TO_DATE(CONCAT(dan, '-', mesec, '-', godina),'%d-%m-%Y') AS datum
FROM dokumenti
```

Povezuje tri odvojena polja u datum:

```sql
UPDATE dokumenti
SET datum = STR_TO_DATE(CONCAT(dan, '-', mesec, '-', godina),'%d-%m-%Y')
```

Kopira kolonu iz jedne baze u drugu:

```sql
update znaci.hronologija, znaci2.hronologija
set znaci.hronologija.datum = znaci2.hronologija.datum
where znaci.hronologija.id = znaci2.hronologija.id;
```

Stavlja dan 30 svugde gde je dan u datumu 0 (osim za februar):

```sql
UPDATE hronologija
SET datum = STR_TO_DATE(CONCAT(30, '-', MONTH(datum), '-', YEAR(datum)),'%d-%m-%Y')
WHERE DAY(datum)=0 AND MONTH(datum)!=2
```
Povezuje oznake sa fotografijama:

```sql
SELECT fotografije.*,
       GROUP_CONCAT(oznaka.naziv ORDER BY oznaka.naziv) AS oznake
FROM fotografije
    LEFT JOIN oznaka_fotografija
        ON fotografije.id = oznaka_fotografija.fotografija_id
    LEFT JOIN oznaka
        ON oznaka_fotografija.oznaka_id = oznaka.id
GROUP BY fotografije.id
```

Takođe:

```sql
SELECT * FROM fotografije 
LEFT JOIN oznaka_fotografija ON fotografije.id = oznaka_fotografija.fotografija_id
LEFT JOIN oznaka ON oznaka_fotografija.oznaka_id = oznaka.id
WHERE oznaka_id=1309
```
