
//1. Chiedere all'utente il cognome
var cognomeUtente = prompt("Inserisci il tuo cognome");
//2.inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'

var listaCognomi = ["bianchi", "rossi", "duzioni", "balsano", "verdi"];
listaCognomi.push(cognomeUtente);

//3.stampa la lista ordinata alfabeticamente

var listaCognomiOrdinata = listaCognomi.sort();

//4.scrivi anche la posizione "umana" della lista in cui il nuovo utente si trov
 var posizioneUtente = listaCognomi.indexOf(cognomeUtente) + 1;

 alert("Il tuo cognome è alla postazione:" + " " + posizioneUtente + " " + listaCognomi);
