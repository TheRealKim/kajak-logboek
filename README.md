# TKC - Kajak Logboek

## Beschrijving

Frontend applicatie voor het logboek van TKC kajak (Techniko Kajak Club).
Geschreven in react.js

## Om te starten

1. Kloon deze repo:

    `git clone https://github.com/TheRealKim/kajak-logboek.git`

2. Ga naar de folder waarin deze repo gekloond is:

    `cd kajak-logboek`

3. Run de code lokaal:

    `npm start`

4. Ga naar [http://localhost:3000](http://localhost:3000) om de website te zien.

5. De pagina herlaadt automatisch na veranderingen in de code.

## Om productie build te bouwen
1. Om naar productie te deployen moet de code gebouwd worden:

    `npm run build`


## Om te deployen
**Naar beta:**

Naar productie:
1. Download de firebase cli:

    `npm install firebase`

2. Initialiseer het project

    `firebase init`

    - Selecteer: 'Hosting: Configure and deploy Firebase Hosting sites'
    - project is: 'kajak-logboek-beta'
    - Voor public directory vul in: 'build'
    - rewrite all urls to /index.html?: y
    - File build/index.html already exists. Overwrite? N
5. Deploy de website

    `firebase deploy`


## Technische details
### Styling
Packages gebruikt voor styling:
- bootstrap
- react-bootstrap
De styling van de componenten kan aangpast worden in: node_modules/bootstrap/css/bootstrap.css

### Symbolen
Package gebruikt voor symbolen:
- fontawesome


## Branching strategie

Er zijn 3 branches:
- eigen feature/bugfix branch (short-living)

Gebruikt voor lokale development en uitbreidingen. Wanneer code verandering ok is kan deze gemerged worden naar beta.

- beta branch (long-living)

Bevat de code voor de test website. Gebruikt voor het testen van nieuwe uitbreidingen op de site. 
Gedeployed naar [https://kajak-logboek-beta.web.app](https://kajak-logboek-beta.web.app)

- production branch (long-living)

Bevat de code voor de productie website. Gebruikt door de makkers van TKC kajak.
Gedeployed naar [https://kajak-logboek.web.app](https://kajak-logboek.web.app)


### Author
Kim Vandendijk


