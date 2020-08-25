//Chiedere all’utente il cognome//
var utente = prompt("Inserisci il tuo cognome");
//inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’//
var lista = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
var utenteInLista = lista.push(utente);

//stampa la lista//
for (var i=0; i < lista.length ; i++) {
  var elenco = document.getElementById('Cognomi');
  elenco = elenco + "<li>"+ lista[i] + utenteInLista + "</li>";

}
//ordinata alfabeticamente//
console.log(elenco);
//scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova//
