# Treasure Chest: guida completa

## Cosa c'è nel pacchetto

- **Cartella `treasure-chest`**: il codice dell'app. Va su GitHub.
  Dentro trovi `index.html`, `manifest.json`, `sw.js`, `icon.svg`, `icon-192.png`, `icon-512.png`, `GUIDA.md`, `README.md` e `.gitignore`.
- **`treasure-chest-dati-iniziali.json`**: i tuoi dati (saldo, stage, rimborso, costi fissi, storico). **Non va mai su GitHub**: lo carichi solo dentro l'app.

---

## 1. Carica l'app su GitHub (dal computer)

1. Scompatta `treasure-chest.zip`.
2. Su github.com premi **+** in alto a destra, poi **New repository**.
3. In **Repository name** scrivi `treasure-chest` e lascia **Public**. È sicuro: nel repository c'è solo il codice, i tuoi dati restano sul telefono.
4. Premi **Create repository**.
5. Premi il link **uploading an existing file**.
6. Trascina **tutti i file che stanno dentro la cartella** `treasure-chest`, non la cartella intera. Su Mac e Windows `.gitignore` può essere invisibile: non è un problema.
7. Controlla che `treasure-chest-dati-iniziali.json` **non** sia nella lista e premi **Commit changes**.

**Se hai già caricato una versione precedente:** nel repository premi **Add file**, poi **Upload files**, trascina i file nuovi (sostituiscono quelli vecchi) e premi **Commit changes**.

## 2. Pubblica l'app con GitHub Pages

1. Nel repository vai su **Settings**, poi su **Pages** nel menu a sinistra.
2. In **Source** scegli **Deploy from a branch**, poi branch `main` e cartella `/ (root)`. Premi **Save**.
3. Dopo uno o due minuti l'indirizzo dell'app compare in alto:
   `https://sofiaelisasuanno-del.github.io/treasure-chest/`

## 3. Installa l'app sul telefono

- **iPhone (Safari):** apri l'indirizzo, premi **Condividi**, poi **Aggiungi alla schermata Home**, poi **Aggiungi**.
- **Android (Chrome):** apri l'indirizzo, premi **⋮**, poi **Installa app**.

## 4. Carica i tuoi dati

1. Manda sul telefono `treasure-chest-dati-iniziali.json`, per esempio per email a te stessa o tramite Drive o iCloud.
2. Salvalo in **File** (iPhone) o in **Download** (Android).
3. Apri l'app e premi **Carica i dati iniziali**.

Se avevi già usato la versione precedente, i dati vengono convertiti da soli alla prima apertura.

## 5. Le cinque pagine e come si parlano

Tutte le pagine usano lo stesso motore di calcolo: quello che cambi in una si vede subito nelle altre.

```
entrate − costi fissi − accantonamento spese annuali − risparmio = budget da vivere
budget da vivere ÷ giorni = tetto base del giorno
tetto del giorno = base − quota delle attività vicine + budget delle attività di quel giorno ± avanzo o sforamento dei giorni scorsi
```

### Home
- **Obiettivo primario:** percentuale, euro raggiunti, quanto manca e quando ci arrivi. Lo cambi con **Modifica**.
- **Il tuo obiettivo di oggi:** quanto puoi ancora spendere oggi e in questa settimana. Sotto trovi la spiegazione di come è calcolato il tetto, per esempio "−4 € per il Weekend a Lisbona, tra 12 giorni".
- **Obiettivi secondari attivi**, con barra di avanzamento.
- **Prossimi 7 giorni:** il tetto di ogni giorno. Tocca un giorno per aprirlo in Agenda.
- **Grafico a torta:** dove vanno i soldi per macro categoria (Necessità, Desideri, Futuro) o per categoria, con il confronto con la regola 50/30/20.
- **Indicatori:** autonomia, fondo di emergenza, risparmio previsto, costi fissi, micro-spese. In fondo c'è il consiglio del giorno.

### Spese
- **Modifica categorie** (in alto): nome, emoji, colore, macro categoria. "Nel tetto" decide se la categoria conta nel tetto giornaliero.
- **Nuova spesa:** importo, voce, categoria, data, ora, metodo di pagamento, attività collegata e nota. Le scorciatoie in alto compilano tutto con un tocco.
- **Registro:** filtri per mese, categoria e ricerca. Per ogni giorno vedi speso e tetto.
- In fondo: import CSV della banca, export e andamento mensile.

### Obiettivi
- **Obiettivo primario:** importo e metodo, con una percentuale fissa delle entrate oppure entro una data. Se la data non è raggiungibile, l'app ti dice quanto servirebbe e quanto puoi davvero mettere da parte.
- **Quando ci arrivi:** proiezione a 24 mesi con tre scenari (Seguo il piano, Abitudini di prima, Scelgo io).
- **Entrate e saldo:** stage, rimborso, aggiornamento del saldo.
- **Obiettivi secondari** dal menu a discesa:

  | Gruppo | Obiettivi |
  |---|---|
  | Tetti | tetto dell'app per N giorni; meno di X € al giorno o a settimana |
  | Sfide | giorni senza desideri; zero spese in una categoria; massimo N micro-spese |
  | Limiti | tetto per categoria; regola 50/30/20 |
  | Risparmio | tasso di risparmio; fondo di emergenza; accantonare per un obiettivo entro una data |
  | Abitudini | costi fissi sotto una soglia; pagare prima te stessa |

- **Lista dei desideri (regola delle 72 ore):** metti in attesa gli acquisti non previsti. Dopo 72 ore decidi se comprarli o rinunciare, e l'app conta quanto hai risparmiato.
- **Il quadro grande:** fondo di emergenza consigliato, giorni di libertà, numero dell'indipendenza finanziaria (regola del 4%), più consigli e alternative.

### Fissi (abbonamenti e costi fissi)
- **Ci sta o non ci sta?** In cima scrivi un nuovo costo: il verdetto (verde, giallo o rosso) si aggiorna mentre scrivi e ti mostra il tetto giornaliero prima e dopo, la quota delle entrate e l'effetto sull'obiettivo.
- **Elenco dei costi:** l'interruttore spegne un costo e ti dice subito di quanto sale il tetto. Con ✎ modifichi, con **Pagato** registri. Gli addebiti automatici si registrano da soli.
- **Fondo spese annuali:** mettici il rimborso quando arriva. Più è pieno, più scende l'accantonamento mensile e più sale il tetto di ogni giorno.
- **Metti i promemoria nel calendario:** scarica un file .ics con tutte le scadenze e un avviso qualche giorno prima.

### Agenda
- **Calendario del mese:** in ogni giorno vedi il tetto. Nei giorni passati vedi quanto hai speso sul tetto, in verde o in rosso.
- **Tocca un giorno** per vedere spiegazione del tetto, attività, spese e i pulsanti per aggiungere un'attività o una spesa in quella data.
- **Nuova attività:** scegli il tipo (viaggio, play party, cena, serata, compleanno, gita, trasferta) e si compila il dettaglio dei costi: volo o treno, alloggio, pasti, ingressi, carburante a km, pedaggi, outfit e così via. Ogni voce ha quantità e prezzo, e la puoi modificare, aggiungere o togliere.
- **Come si regola il tetto:** il costo dell'attività viene "pagato" abbassando un po' il tetto nei giorni prima (da quando la crei) e nei giorni dopo. Nei giorni dell'attività il tetto si alza.
  - Più l'attività costa rispetto al tuo budget, più giorni usa, fino a tre mesi dopo.
  - Se pesa troppo, l'app ti avvisa. Puoi ridurre qualche voce, spostarla, oppure spuntare **Pagala con i risparmi**: in quel caso non tocca i tetti, ma il saldo scende.
- **Dopo l'attività:** premi **Chiudi con la spesa reale**. Se hai speso meno, la differenza torna nel budget dei prossimi giorni; se hai speso di più, si recupera piano piano.

## 6. Collegare Google Calendar (circa 10 minuti, una volta sola)

L'app legge i tuoi eventi in sola lettura. Per farlo Google chiede un "ID client" gratuito, che crei tu: così l'accesso resta solo tuo.

1. **Crea il progetto.** Vai su console.cloud.google.com ed entra con il tuo account Google. In alto premi il selettore dei progetti, poi **Nuovo progetto**, chiamalo `Treasure Chest` e premi **Crea**.
2. **Attiva l'API.** Nel menu vai su **API e servizi**, poi **Libreria**. Cerca **Google Calendar API**, aprila e premi **Abilita**.
3. **Configura la schermata di consenso.** Vai su **API e servizi**, poi **Schermata consenso OAuth** (può chiamarsi anche **Google Auth Platform**).
   - Premi **Inizia** o **Configura**.
   - Nome dell'app: `Treasure Chest`. Come email di assistenza scegli la tua.
   - Tipo di utenti: **Esterno**.
   - Completa e salva.
   - Nella sezione **Pubblico** (o **Utenti di test**) aggiungi la tua email come **utente di test**.
4. **Crea l'ID client.** Vai su **API e servizi**, poi **Credenziali**, poi **Crea credenziali**, poi **ID client OAuth**.
   - Tipo di applicazione: **Applicazione web**.
   - In **Origini JavaScript autorizzate** aggiungi `https://sofiaelisasuanno-del.github.io` (senza barra finale).
   - Premi **Crea** e copia l'**ID client**: finisce con `.apps.googleusercontent.com`.
5. **Collega l'app.** In Treasure Chest vai su **Agenda**, premi **Collega Google Calendar**, incolla l'ID e premi **Salva e collega**.
6. **Accedi con Google.** Se compare "Google non ha verificato questa app", premi **Continua**: l'app è la tua.

Gli eventi dei prossimi 4 mesi compaiono nel calendario con il bordo tratteggiato. Tocca un giorno e premi **Pianifica i costi** per trasformare un evento in un'attività con il dettaglio delle spese. Per aggiornare la lista, premi di nuovo **Collega Google Calendar**.

**Alternativa senza configurazione:** su calendar.google.com vai su **Impostazioni**, poi **Importa ed esporta**, poi **Esporta**. Scompatta lo zip e in Agenda premi **Importa file .ics**.

## 7. Le prime cose da fare

1. In Home premi **Decidi** sull'avviso di novembre e scegli il budget dai risparmi per gli ultimi giorni del mese.
2. In **Obiettivi**, apri lo Stage con ✎ e conferma giorno di accredito e importo netto.
3. In **Fissi**, filtro **Da completare**: conferma importi e date. Spegni con l'interruttore quello che non paghi più.
4. Quando arriva il rimborso, premi **È arrivato** e lascia la spunta "fondo spese annuali".
5. In **Agenda**, crea le attività di dicembre (cene, feste, play party, viaggi): i tetti si sistemano da soli.
6. Una volta a settimana, in **Impostazioni** premi **Scarica backup**.

## 8. Aggiornamenti futuri

1. Carica i file nuovi su GitHub con **Add file**, poi **Upload files**, poi **Commit changes**.
2. La prima riga di `sw.js` deve avere un numero nuovo (`treasure-chest-v4`…).
3. Sul telefono chiudi l'app del tutto e riaprila.

I dati restano.

## 9. Problemi comuni

- **Errore 404 su GitHub:** aspetta qualche minuto e controlla che `index.html` sia nella cartella principale del repository.
- **I grafici non compaiono:** serve internet la prima volta che apri l'app.
- **"Origin not allowed" da Google:** controlla che l'origine autorizzata sia esattamente `https://sofiaelisasuanno-del.github.io`.
- **Il tetto di un giorno è a zero:** un'attività vicina costa più del budget di quei giorni. Aprila in Agenda: riduci le voci o spunta **Pagala con i risparmi**.

## Privacy

| Cosa | Dove sta |
|---|---|
| Codice dell'app | GitHub, pubblico |
| Spese, saldo, obiettivi, attività | Solo nel tuo telefono |
| Eventi di Google Calendar | Letti dal telefono, mai inviati altrove |
| Dati iniziali e backup | Solo dove li salvi tu: mai su GitHub |

*Treasure Chest dà indicazioni educative, non consulenza finanziaria.*
