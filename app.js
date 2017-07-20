var nbclics = 0;
function compteur() {
	document.write("Vous avez cliqué " + nbclics + " fois en 5 secondes !");
}
setTimeout('compteur()', 5000);