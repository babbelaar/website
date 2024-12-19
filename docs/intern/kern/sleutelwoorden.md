# Sleutelwoorden

:::info
De sleutelwoorden zijn terug te vinden in [`babbelaar/src/lexer/keyword.bab`](https://github.com/babbelaar/babbelaar/blob/main/babbelaar/src/lexer/keyword.rs).
:::


Sleutelwoorden zijn speciale woorden die een bepaalde vastgestelde betekenis hebben. Deze kunnen niet gebruikt worden als bijvoorbeeld namen voor structuren, variabelen of werkwijzen.

Op dit moment zijn de volgende sleutelwoorden geaccepteerd binnen Babbelaar:

| Sleutelwoord         | Omschrijving
|----------------------|-----------------------------------------
| `als`                | Evalueer sectie als een voorwaarde geldt. |
| `bekeer`             | Geef een waarde terug aan de aanroeper van de werkwijze. |
| `dit`                | De huidige waarde binnen een werkwijze van een structuur. |
| `in`                 | Herhaal over een stel waardes met `volg`. |
| `kap`                | Stop de complete iteratie van `volg`. |
| `koppelvlak`         | Definieer een nieuw koppelvlak, een soort contract voor structuren. |
| `nieuw`              | Maak een nieuw object aan. |
| `onwaar`             | Een waarde van het type `booleaan`. Tegenovergestelde van `waar` |
| `op`                 | Op welke structuur moet de het koppelvlak uitgebreid worden. |
| `reeks`              | Stel een reeks op van getallen. |
| `stel`               | Bepaal een aanpaswaarde in deze scoop |
| `structuur`          | Definieer een datastructuur. |
| `uitbreiding`        | Definieer een uitbreiding op een datastructuur. |
| `veld`               | Een onderdeel van een `structuur`. |
| `vervolg`            | Stop de huidige iteratieronde van `volg`. |
| `volg`               | Herhaal de sectie per waarde van de reeks. |
| `waar`               | Een waarde van het type `booleaan`. Tegenovergestelde van `onwaar` |
| `werkwijze`          | Definieer een nieuwe werkwijze. |