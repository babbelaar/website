# Variabelen
Je kunt variabelen aanmaken met `stel`. Dit is erg handig, want dan hoef je niet telkens dezelfde code te dupliceren, en deze kun je ook nog later aanpassen.
```babbelaar
stel mijnCijfer = 10;
```

## Aanpassen
Als je de waarde van mijnCijfer wilt aanpassen naar bijvoorbeeld `5`, doe je dat zo:
```babbelaar
mijnCijfer = 5;
```

## Type
Aan een variabele zit altijd een type verbonden. In ons geval is `mijnCijfer` een getal, dus we kunnen deze later niet
zomaar aanpassen naar een stuk tekst:
```babbelaar
mijnCijfer = "Een stuk tekst..."; // dit mag niet, want tekst is niet hetzelfde als een getal.
```