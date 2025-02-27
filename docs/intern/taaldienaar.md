# Taaldienaar (LSP)
De taaldienaar van Babbelaar biedt ondersteuning voor de taal bij tekstbewerkers.

Ook al is de taaldienaar geschreven zodat het de applicatieagnostische [Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/) opvolgt, dient er nog wel een klein lijmlaagje per tekstbewerker gebouwd te worden, meestal in de vorm van een extensie. Daarom wordt op dit moment alleen nog maar Visual Studio Code ondersteund.

## Bouwen

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
