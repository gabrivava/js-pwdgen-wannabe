/* Istruzioni:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina il risultato nomecognomecolorepreferito21 */

/* informazioni richieste */
var nome = prompt('come ti chiami?');
var cognome = prompt("qual'è il tuo cognome?");
var preferiteColor = prompt ("qual'è il tuo colore preferito?");

/* display del risultato */
var infoUtente = nome + cognome + preferiteColor + '21';
document.getElementById('info_utente').innerHTML = infoUtente;