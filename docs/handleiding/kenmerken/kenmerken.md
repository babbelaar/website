---
sidebar_position: 2
---

# Kenmerken
In dit hoofdstuk staan een paar kenmerken van Babbelaar beschreven, om zo een inleiding te geven aan de programmeertaal.




### ❓ Als
Om iets soms wél en soms niet uit te voeren, kun je het conditioneel maken, met het `als` sleutelwoord, zoals:
```babbelaar
werkwijze naarGriezeligeFilm(naam: Slinger, leeftijd: g32) {
    als leeftijd > 18 {
        schrijf(€"Sorry, {naam}, je bent nog niet oud genoeg.");
        bekeer; // kap het hier af
    }

    schrijf(€"Welkom, {naam}!");
}

naarGriezeligeFilm("Jantje", 14); // Sorry, Jantje, je bent nog niet oud genoeg.
naarGriezeligeFilm("Lodewijk", 46); // Welkom, Lodewijk!
```

Hierin zie je dat Jantje, die 14 jaar is, niet de film mag zien, maar Lodewijk van 46 wél.


### 🚶 Bekeer
In het vorige voorbeeld, zag je het gebruik van het `bekeer` om de werkwijze af te kappen. Jantje mocht dus niet naar de film. Het `bekeer`-sleutelwoord kan je gebruiken om de werkwijze hier te beëindigen (helemaal handig in combinatie met `als`), maar je kunt het ook gebruiken om een waarde terug te geven:
```babbelaar
werkwijze berekenLeeftijd(geboortejaar: g32) -> g32 {
    stel huidigJaar = 2024;
    bekeer huidigJaar - geboortejaar;
}
```

### 🔁 Volg
Je kunt door een stel cijfers heen lopen, met het `volg`-sleutelwoord. De code binnen `{` en `}` wordt dan uitgevoerd, voor elke waarde van `i`.
```babbelaar
volg i in reeks(1, 2) {
    schrijf(i)
}
```

## Vormen
Er zijn verschillende typen ingebouwd binnen Babbelaar. Hieronder staan de standaardtypen, maar je kunt ook zelf typen bedenken door een [`structuur`](#structuren) aan te maken.

### 👍/👎 Booleaanse waarde
Een booleaanse waarde, is een moeilijke naam voor een waarde die of `waar` of `onwaar` kan zijn. Je kunt bijvoorbeeld bruin haar hebben, of niet:
```babbelaar
stel heeftBruinHaar = waar;
stel heeftBlondHaar = onwaar;
```

### 🔤 Slinger
Een slinger is een stuk tekst, bijvoorbeeld `"Hallo, wereld!"`.

### Sjabloonslinger
Een variant op de gewoonlijke slinger, is de sjabloonslinger. Hierin kun je expressies invoegen, om bijvoorbeeld getallen in je slinger op te nemen:
```babbelaar
volg i in reeks (0, 11) {
    schrijf(€"Het getal is nu {i}");
}
```

### Structuren
Je kunt een stuk gedeelde code, ook indelen in structuren. Je kunt dit doen met bijvoorbeeld heel gewone objecten, zoals een mens, maar ook een ingewikkeld systeem, zodat je het mooi samen kan binden in één bundeltje:
```babbelaar
structuur Persoon {

}
```

Nu hebben we er op dit moment nog vrij weinig aan. Om informatie aan deze `Persoon` te koppelen, kunnen we velden maken, waarbij elke `Persoon` dus die informatie moet hebben:
```babbelaar
structuur Persoon {
    veld naam: Slinger,
    veld leeftijd: g32,
}
```
Deze persoon heeft dus een stuk tekst voor hun `naam` en een getal als `leeftijd`. Om deze `Persoon`-structuur te kunnen gebruiken, kun je er eentje aanmaken met `nieuw`:
```babbelaar
stel alfred = nieuw Persoon {
    naam: "Alfred J. Kwak",
    leeftijd: 35,
};

schrijf(€"Dit is {alfred.naam} van {alfred.leeftijd} jaar");
```

Dat laatste stuk vertelt de naam van de persoon en hun leeftijd. Je kunt deze werkwijze ook plaatsen binnen de structuur. In plaats van `alfred`, gebruik je in dat geval het `dit`-sleutelwoord, om aan te duiden dan het over een algemeen `Persoon` gaat (je kunt immers verschillende keer een `Persoon` aanmaken):
```babbelaar
structuur Persoon {
    veld naam: Slinger,
    veld leeftijd: g32,

    werkwijze zegGedag() {
        schrijf(€"Hallo, ik ben {dit.naam} en ik ben {dit.leeftijd} jaar oud.");
    }
}

stel alfred = nieuw Persoon {
    naam: "Alfred J. Kwak",
    leeftijd: 35,
};

alfred.zegGedag(); // Hallo, ik ben Alfred J. Kwak en ik ben 35 jaar oud.


stel pietje = nieuw Persoon {
    naam: "Pietje Bell",
    leeftijd: 9,
};

pietje.zegGedag(); // Hallo, ik ben Pietje Bell en ik ben 9 jaar oud.
```
