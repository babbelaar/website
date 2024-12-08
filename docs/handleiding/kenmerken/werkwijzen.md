---
sidebar_position: 1
---

# Werkwijzen
Een `werkwijze` is een stukje code dat een specifieke taak uitvoert. Het is alsof je een recept opschrijft dat je
steeds opnieuw kunt gebruiken zonder alles opnieuw te hoeven schrijven.

## Voorbeeld
In het onderstaande voorbeeld zie je de werkwijze genaamd `vertelEenRaadsel`. Deze gebruikt een andere werkwijze
genaamd [`schrijf`](/docs/documentatie/werkwijzen/schrijf):
```babbelaar
werkwijze vertelEenRaadsel() {
    schrijf("Waarom stak de kip de straat over?");
    schrijf("Om aan de overkant te geraken.");
}
```

## Parameter
```babbelaar
werkwijze hallo(persoon: Slinger) {
    schrijf(€"Hallo, {persoon}!");
}
```

Dit heeft als uitvoer:
```babbelaar
Hallo, lezer!
```

## Andere programmeertalen
Ook wel bekend als `functies`, `methodes`, `subroutines` en `procedures` in andere talen.
