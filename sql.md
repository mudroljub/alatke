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
