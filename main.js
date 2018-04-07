// liste des mots
var arr = [
	'aboulant', 
	'bouclant',
	'couplant',
	'doublant',
	'éboulant',
	'fouinant',
	'groupant',
	'hourdant',
	'immolant',
	'jubilant',
	'kératine',
	'lourdant',
	'modulant',
	'nombrant',
	'ouillant',
	'polluant',
	'quérable',
	'relouant',
	'saoulant',
	'touchant',
	'usurpant',
	'validant',
	'wagonnet',
	'xylocope',
	'yearling',
	'zinguant',
]

var recup;

// Je sélectionne un mot aléatoire dans ma liste et je le stocke dans 
// ma variable motRandom
var numRandom = Math.floor(Math.random()*arr.length);

var motRandom = arr[numRandom];

console.log(motRandom);

// Ma variable permettant de limiter le nombre de chances du joueur
var chance = 7;

function rejouer(){

	$("#boutons").html('<input id="rejouer" type="button" value="Rejouer">');

	$("#rejouer").click(function(){
		chance = 7;
		numRandom = Math.floor(Math.random()*arr.length);
		motRandom = arr[numRandom];
		$("#boutons").html('<input type="button" id="valider" name="valider" value="Valider">');
		$("#affichage").text('');
		console.log(motRandom);
		console.log(chance);
	})
	
}

// Je lance la comparaison lors du click du bouton "Valider"
$("#valider").click(function(){

	chance--;
	console.log(chance);
	// Je récupère le mot rentré par le joueur dans l'input
	// Et je transforme mes deux mots en array

	recup = $("#reponse").val();
	
	var un = recup.split("");
	
	var deux = motRandom.split("");
	
	// console.log(un);
	// console.log(deux);

	// Je compare le mot du joueur et le mot sélectionné aléatoirement
	// dans une boucle afin de les comparer lettre par lettre
	
	var i = 0;
	if(un.length === 7){
	while(i<8){
		
		//Afin d'afficher le mot rentré par le joueur je rajoute un br 
		// lorsque la comparaison porte sur la dernière lettre du mot
		
			if(i === 7){
				if(un[i] == deux[i]) {
					$("#affichage").append('<span class="green">'+un[i]+'</span><br>');
				}
				else if(un[i] != deux[i]){
					$("#affichage").append('<span class="red">'+un[i]+'</span><br>');
				}
			}
			else if(i < 7) {
				if(un[i] == deux[i]) {
					$("#affichage").append('<span class="green">'+un[i]+'</span>');
				}
				else if(un[i] != deux[i]){
					$("#affichage").append('<span class="red">'+un[i]+'</span>');
				}
			}

			// J'incrémente mon itérateur
			i++;
		}
			

	}
	
	// Je vide le champs où le joueur rentre sa réponse
	
	$("#reponse").val("");

	if(chance === 0 && recup != motRandom){
		$("#valider").hide();
		rejouer();
	}

});



