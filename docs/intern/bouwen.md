# Bouwinstructies
Deze pagina beschrijft de stappen die benodigd zijn om Babbelaar te compileren.

Als je alleen de basis wilt bouwen, en niet onderdelen zoals de taaldienaar, zorg er dan wel voor dat je de volgende stappen hebt gedaan:
1. Kloon het Git-repertoire
2. Bouw de compileerder
3. Bouw de Babbelaar-bibliotheek

## Klonen
De code van Babbelaar is te vinden in het [GitHub-repertoire van Babbelaar](https://github.com/babbelaar/babbelaar). Als je dit zelf op je machine wilt hebben, is het installeren van [Git](https://git-scm.org/) erg aangeraden. Je kunt ook de code als zip-bestand binnenhalen, maar dat zorgt ervoor dat je niet gemakkelijk nieuwe wijzigingen kunt ophalen of zelf wijzigingen kunt opsturen.

Zorg dat je je in een goede map bevindt, en voer dan het onderstaande commando uit om Babbelaar te klonen naar jouw machine:
```sh
git clone https://github.com/babbelaar/babbelaar.git Babbelaar
```

## Compileerder
De compileerder, hetgeen dat Babbelaar-code interpreteert en compileert, is geschreven in de [Rust](https://rust-lang.org/)-programmeertaal (Engelstalig). Dit houdt in dat deze gereedschappen nodig zijn om te installeren. Als je Rust nog niet geïnstalleerd hebt, volg dan de [Rust Getting started](https://www.rust-lang.org/learn/get-started).

Als je Rust geïnstalleerd hebt met `rustup`, krijg je hier ook de pakketbeheerder [‘Cargo’](https://doc.rust-lang.org/cargo/) meegeleverd. Met dit commandoprogramma kun je Babbelaar zelf bouwen:
```sh
cargo build --all
```

De vlag `--all` is er om Cargo te vertellen dat hij alle projecten (`babbelaar`, `compiler`, `interpreter`, `lsp`, etc.) moet bouwen, niet alleen het hoofdproject.

## Babbelaar-bibliotheek `babbib`
`babbib`, ook wel bekend als de  Babbelaar-bibliotheek, omvat de basis voor vele Babbelaar-applicaties. Deze is zelf geschreven in Babbelaar, dus moet ook gebouwd worden. Dit kun je doen door de `babbelaar-interpreter` uit te voeren, of gewoon `cargo run` gebruiken:
```sh
cargo run bouwen babbib
```

In de map `/babbib/uit/` staat dan de statische bibliotheek waarmee gelinkt kan worden.

## Taaldienaar
De taaldienaar van Babbelaar biedt ondersteuning voor de taal bij tekstbewerkers, op dit moment alleen nog maar Visual Studio Code. Om dit zelf te bouwen, kun je de instructies op de pagina [Taaldienaar (LSP)](./taaldienaar.md) volgen.
