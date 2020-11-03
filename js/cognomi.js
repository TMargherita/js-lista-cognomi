
//definsco lista cognomi
var listaCognomi = ["bianchi", "rossi", "duzioni", "balsano", "verdi"];

//Chiedere all’utente il cognome//
var cognomeUtente = prompt("Inserisci il tuo cognome");

//inserirlo il cogome nella lista//
listaCognomi.push(cognomeUtente);

//Ordino la lista alfabeticamente//
listaCognomi.sort();

//stampo la lista nell html//
for ( i = 0; i < listaCognomi.length; i++) {
  var lista = document.getElementById("lista").innerHTML;
  lista = lista + "<li>" + listaCognomi[i] + "</li>";
  document.getElementById("lista").innerHTML = lista;
}
//scrivo la posizione in lista//
var posizione = listaCognomi.indexOf(cognomeUtente) +1;
document.getElementById("posizione").innerHTML = "La tua posizione in lista è :" + posizione;
