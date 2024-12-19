# ABI
De Applicatie Binaire Interface is het koppelvlak voor applicaties en hun ondersteunende bibliotheken. Deze is niet vastgesteld onder AMD64, maar bepaald apart door de besturingssystemen.

## System V ABI
Deze wordt aangehouden door de meeste besturingssystemen (Apple-Intel-platforms, Linux en FreeBSD) maar bijvoorbeeld niet door Windows. De officiële documentatie is te vinden in de PDF [System V Application Binary Interface van psAbi](/bestanden/ABI-SystemV.pdf).

## Microsoft x64 ABI
Deze wordt aangehouden op Windows-systemen, maar ook bijvoorbeeld op de Xbox. Microsoft heeft deze beschreven in het artikel [Overview of x64 ABI conventions](https://learn.microsoft.com/nl-nl/cpp/build/x64-software-conventions?view=msvc-170).

## Overzicht
| Onderdeel                                         | System V                                                              | Microsoft                                                 | Toelichting
|---------------------------------------------------|-----------------------------------------------------------------------|-----------------------------------------------------------|--------------
| Bekeerregister                                    | `rax`                                                                 | `rax`                                                     | 8-64 bits bekeerwaarde
| Registers bewaard door de aanroepende werkwijze   | `rax`, **`rdi`**, **`rsi`**, `rcx`, `rdx`, `r8`, `r9` `r10` en `r11`  | `rax`, `rcx`, `rdx`, `r8`, `r9` `r10` en `r11`            | De registers die we op moeten slaap als we willen dat ze bewaard blijven nadat we een andere werkwijze aangeroepen hebben (de andere werkwijze mag ze aanpassen zonder ze terug te zetten)
| Registers bewaard door de aangeroepen werkwijze   | `rbx`, `r12`, `r13`, `r14` en `r15`                                   | `rbx`, **`rdi`**, **`rsi`**, `r12`, `r13`, `r14` en `r15` | De registers die wij op moeten slaan als we ze willen gebruiken binnen onze werkwijze (we kunnen ze wel gebruiken, maar ze moeten aan het eind wel weer de oorspronkelijke waarde bevatten)
| Argumentregisters                                 | `rdi`, `rsi`, `rdx`, `rcx`, `r8` en `r9`                              | `rcx`, `rdx`, `r8` en `r9`                                | De (volgorde van) registers die gebruikt worden voor de argumenten van werkwijze (i.e. op Windows het eerste argument is meegegeven in register `rcx` maar op Linux in `rdi`)

## Afwijkingen
### macOS
Ook al focust Apple zich grotendeels alleen nog op hun processors die op ARM gebaseerd zijn, heeft het bedrijf jarenlang gebruikgemaakt van Intel-processoren. Daarom is het belangrijk om ook (in de toekomst) ondersteuning voor dit platform te bieden.

Apple gebruikt ook de System V ABI op macOS, maar heeft toch een aantal afwijkingen genoteerd op hun ontwikkelaarswebsite: [Writing 64-bit Intel code for Apple Platforms](https://developer.apple.com/documentation/xcode/writing-64-bit-intel-code-for-apple-platforms).
