# Taaldienaar (LSP)
De taaldienaar van Babbelaar biedt ondersteuning voor de taal bij tekstbewerkers.

Ook al is de taaldienaar geschreven zodat het de applicatieagnostische [Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/) opvolgt, dient er nog wel een klein lijmlaagje per tekstbewerker gebouwd te worden, meestal in de vorm van een extensie. Daarom wordt op dit moment alleen nog maar Visual Studio Code ondersteund.

## Bouwen
De code voor de taaldienaar zelf is te vinden in [`lsp/`](https://github.com/babbelaar/babbelaar/tree/main/lsp), en de code voor de Visual Studio Code-extensie is te vinden in [`tools/vscode/`](https://github.com/babbelaar/babbelaar/tree/main/tools/vscode).

### Vereisten
- Bouw zelf Babbelaar door de [Bouwinstructies](./bouwen.md) te volgen.
- Installeer [Visual Studio Code](https://code.visualstudio.com/)

### Benodigdheden installeren
Om dit zelf te bouwen, dien je de volgende tools te installeren:

#### NodeJS
Omdat Visual Studio Code gebouwd is met [Electron](https://www.electronjs.org/), is het vereist om [NodeJS](https://nodejs.org/) te installeren om de JavaScript uit te kunnen voeren. Een handig installatiemiddel is bijvoorbeeld [fnm (Fast Node Manager)](https://github.com/Schniz/fnm). Als doelversie hanteren we gewoon de meest recente versie van NodeJS en NPM.

#### Visual Studio Code-gereedschappen
Nu je NodeJS geïnstalleerd hebt, is het belangrijk dat je de VSCode-gereedschappen installeert:
```sh
npm install -g @vscode/vsce yo typescript
```

### Bouwen maar!
Je hebt nu alle benodigdheden om te gaan bouwen. Ga met de terminal naar de map `tools/vscode/`, en voer dan dit commando uit om een extensiepakket te bouwen:
```sh
vsce package
```

Als de versie in de [`package.json`](https://github.com/babbelaar/babbelaar/blob/main/tools/vscode/package.json#L6) bijvoorbeeld 1.2.3 is, dan zul je in de map het bestand genaamd `babbelaar-1.2.3.vsix` zien.

### Testen
Om je versgebakken VSIX-bestand te testen, open je Visual Studio Code en open je het extensiepaneel zoals hieronder. Het kan overigens handig zijn om [Visual Studio Code Insiders](https://code.visualstudio.com/insiders/) te gebruiken om VSIX-bestanden te testen, mocht je de reguliere versie doorgaans gebruiken.

![Extensies-tabblad van VS Code](/img/taaldienaar-vscode-extensiepaneel.png)

Druk dan op de drie puntjes (beletselteken) rechts bovenaan en kies `Uit VSIX installeren...`

![Extensies-tabblad van VS Code](/img/taaldienaar-vscode-ellipsis.png)

Selecteer dan het VSIX-bestand het druk op `Installeren`.

![Extensies-tabblad van VS Code](/img/taaldienaar-vscode-selecteren.png)

Open nu een werkplek met Babbelaar-code erin, en je kunt van slag!

## Werking
De taaldienaar wordt op dit moment gestart door [de Visual Studio Code-extensie](https://marketplace.visualstudio.com/items?itemName=babbelaar.babbelaar). Zie hiervoor [`tools/vscode/src/babbelaarLsp.ts`](https://github.com/babbelaar/babbelaar/blob/main/tools/vscode/src/babbelaarLsp.ts).

Om de taaldienaar op de machine van de gebruiker te krijgen, wordt bij opstarten eerst gecheckt of het al gedownload is naar de extensiecachemap. Zo niet, dan worden de bestanden opgehaald van de Babbelaar-website, zie [`tools/vscode/src/downloadBabbelaar.ts`](https://github.com/babbelaar/babbelaar/blob/main/tools/vscode/src/downloadBabbelaar.ts).

:::note

Op dit moment wordt Babbelaar gezet op de website (`https://babbelaar.dev/`) door een CI-script te draaien op de release-branche, waarna handmatig de zips wordt gedownload van de GitHub-artefacten, geüpload en gedecomprimeerd. Deze wijze moet graag veranderd worden, omdat het hosten van de artefacten op GitHub i.p.v. de Babbelaar-website beter voor de transparantie is en gemakkelijker is. Hiervoor moet wel wat werk gedaan worden, dus denk hier graag aan mee :)

:::

## Inpakken
Om de taaldienaar in te pakken, dien je eerst de versie van het Visual Studio Code-extensiepakket te verhogen naar dezelfde versie als van Babbelaar zelf. Dit zorgt ervoor dat
