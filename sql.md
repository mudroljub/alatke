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
