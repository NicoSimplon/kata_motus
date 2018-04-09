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
	'admirées',
	'briefées',
	'chimères',
	'déprimes',
]

var recup;

// Je sélectionne un mot aléatoire dans ma liste et je le stocke dans 
// ma variable motRandom
var numRandom = Math.floor(Math.random()*arr.length);

var motRandom = arr[numRandom];

var alea = motRandom.split("");

console.log(motRandom);

// Ma variable permettant de limiter le nombre de chances du joueur
var chance = 7;

$("#rejouer").hide();

//J'affiche la première lettre du mot à trouver
$("#indice").html('<span>'+alea[0]+'.......</span>');

function rejouer(){
	$("#valider").hide();
	$("#rejouer").show();
	$("#rejouer").click(function(){
		chance = 7;
		numRandom = Math.floor(Math.random()*arr.length);
		motRandom = arr[numRandom];
		alea = motRandom.split("");
		$("#rejouer").hide();
		$("#valider").show();
		$("#affichage").text('');
		$("#indice").html('<span>'+alea[0]+'.......</span>');

		console.log(motRandom);
		//console.log(chance);
	})
	
}

// Je lance la comparaison lors du click du bouton "Valider"
$("#valider").click(function(){
	
	// Je récupère le mot rentré par le joueur dans l'input
	// Et je transforme mes deux mots en array

	recup = $("#reponse").val();
	
	var rep = recup.split("");

	if(rep.length != 8){
		alert("Votre réponse ne comporte pas le bon nombre de lettres.");
	}
	else{
		chance--;
		//console.log(chance);
	}

	var alea = motRandom.split("");
	
	// console.log(rep);
	// console.log(alea);

	// Je compare le mot du joueur et le mot sélectionné aléatoirement
	// dans une boucle afin de les comparer lettre par lettre
	
	var i = 0;
	
	while(i<8){
		
		//Afin d'afficher le mot rentré par le joueur je rajoute un br 
		// lorsque la comparaison porte sur la dernière lettre du mot
		
			if(i === 7 && rep.length == 8){
				if(rep[i] == alea[i]) {
					$("#affichage").append('<span class="green">'+rep[i]+'</span><br>');
				}
				else if(rep[i] != alea[i]){
					var verif = alea.includes(rep[i]);
					if(verif == true){
						$("#affichage").append('<span class="orange">'+rep[i]+'</span><br>');
					}
					else{
						$("#affichage").append('<span class="red">'+rep[i]+'</span><br>');
					}
					
				}
			}
			else if(i < 7 && rep.length == 8) {
				if(rep[i] == alea[i]) {
					$("#affichage").append('<span class="green">'+rep[i]+'</span>');
				}
				else if(rep[i] != alea[i]){
					var verif = alea.includes(rep[i]);
					if(verif == true){
						$("#affichage").append('<span class="orange">'+rep[i]+'</span>');
					}
					else{
						$("#affichage").append('<span class="red">'+rep[i]+'</span>');
					}
				}
			}

			// J'incrémente mon itérateur
			i++;

	}
	
	// Je vide le champs où le joueur rentre sa réponse	
	$("#reponse").val("");

	if(chance === 0 && recup != motRandom){
		alert("Vous avez perdu! Le mot était: "+motRandom);
		rejouer();
	}
	else if (chance >= 0 && recup == motRandom){
		alert("Félicitations! Vous avez trouvé le bon mot: "+recup);
		rejouer();
	}

});



