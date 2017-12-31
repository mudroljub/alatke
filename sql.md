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

Stavlja dan 30 svugde gde je dan u datumu nepoznat, odnosno 0:

```sql
UPDATE hronologija
SET datum = STR_TO_DATE(CONCAT(30, '-', MONTH(datum), '-', YEAR(datum)),'%d-%m-%Y')
WHERE DAY(datum)=0
```
