$bouton = document.getElementById("bouton");
$multiplicateur = document.getElementById("multiplicateur");
$autoclick = document.getElementById("autoclick");
$affichage = document.getElementById("affichage");
score = 0;
nbMultiplicateur = 1;
nbAutoclick = 0;

//Fonction innerHTML
	function afficherScore() {
		$affichage.innerHTML = "Exp " + score;
	}

	function afficherNbMultiplicateur() {
		$multiplicateur.innerHTML = "Multiplicateur : x" + nbMultiplicateur + " (score à atteindre : " + prix() + ")";
	}
	
	function afficherNbAutoclick() {
		$autoclick.innerHTML = "Autoclick : " + nbAutoclick + " (score à atteindre : " + prixAutoclick() + ")";
	}

//Fonction clic
	function clic() {
		score = score + nbMultiplicateur;
		afficherScore();
	}

//Achat Multiplicateur
	function prix() {
		return 50 * nbMultiplicateur * nbMultiplicateur;
	}

	function acheterMultiplicateur() {
		if (score >= prix()) {
			score = score - prix();
			nbMultiplicateur = nbMultiplicateur * 2;
			afficherNbMultiplicateur();
			afficherScore();
		} else {
			alert("Votre score est insuffisant !");
		}
	}

//Achat Autoclick
	function prixAutoclick() {
		return 20 * (nbAutoclick * nbAutoclick + 1);
	}

var myVar
	function acheterAutoclick() {
		if (score >= prixAutoclick()) {
			score = score - prixAutoclick();
			nbAutoclick = nbAutoclick + 1;
			afficherNbAutoclick();
			afficherScore();
			myVar = setInterval(addClic, 1000);
		} else {
			alert("Votre score est insuffisant !");
		}
	}
	
	function addClic() {
		score = score + nbMultiplicateur;
		afficherScore();
	}

$bouton.onclick = clic;
$multiplicateur.onclick = acheterMultiplicateur;
$autoclick.onclick = acheterAutoclick;
afficherScore();
afficherNbMultiplicateur();
afficherNbAutoclick();

