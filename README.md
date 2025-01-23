# React & TypeScript - Fritidsintresse Webbplats

## Beskrivning
Denna webbplats är skapad med React och TypeScript och representerar mitt valda fritidsintresse: Basketspelare. Webbplatsen visar en lista på spelare, deras höjd och om de har blivit MVP. Den är responsiv och fungerar bra på både desktop och mobila enheter.

Målet med denna labb var att skapa en enkel, funktionell webbplats som består av flera komponenter, där vi använder props, iterationer och conditional rendering för att visa dynamiskt innehåll.

## Funktioner
- Sidhuvud med titel och en banner. Titeln skickas som en prop till header-komponenten.
- Sidfot med utvecklarinformation.
- Huvudinnehåll som innehåller en lista över basketspelare. Listan genereras dynamiskt genom en map()-funktion, baserat på data i en array.
- Webbplatsen är responsiv, så att den fungerar bra på både stora och små skärmar.
- Varje spelare i listan innehåller namn, höjd och MVP-status (om de har blivit MVP eller inte).
- Komponentspecifik CSS används för att styla varje komponent individuellt

## Struktur
- Header: Innehåller webbplatsens titel och en banner.
- Main: Visar en lista med basketballspelare och deras information.
- Footer: Visar information om utvecklaren av webbplatsen.
- BasketballCard: Komponent som representerar varje enskild basketspelare.