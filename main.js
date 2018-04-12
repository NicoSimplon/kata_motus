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
	'escrimes',
	'fébriles',
	'gencives',
	'humiliés',
	'incuries',
	'journées',
	'kouglofs',
	'libellés',
	'méprises',
	'nébulisé',
	'octobres',
	'prémices',
	'question',
	'reprises',
	'services',
	'triplées',
	'unilobée',
	'vouchers',
	'würmiens',
	'xanthies',
	'yogourts',
	'zorilles',
];

var recup;

// Je sélectionne un mot aléatoire dans ma liste et je le stocke dans 
// ma variable motRandom
var numRandom = Math.floor(Math.random()*arr.length);

var motRandom = arr[numRandom];

var alea = motRandom.split("");

//console.log(motRandom);

// Ma variable permettant de limiter le nombre de chances du joueur
var chance = 7;

$("#rejouer").hide();

//J'affiche la première lettre du mot à trouver
$("#indice").html('<span>'+alea[0]+'.......</span>');

function rejouer(){
	$("#valider").hide();
	$("#rejouer").show();
}
// J'ai sorti cet évènement de ma fonction rejouer car 
//il était appelé plusieurs fois par le même clic

$("#rejouer").click(function(){
		chance = 7;
		numRandom = Math.floor(Math.random()*arr.length);
		motRandom = arr[numRandom];
		alea = motRandom.split("");
		$("#rejouer").hide();
		$("#valider").show();
		$("#affichage").text('');
		$("#indice").html('<span>'+alea[0]+'.......</span>');
		//console.log(motRandom);
		//console.log(chance);
})

function motus(){	
	// Je récupère le mot rentré par le joueur dans l'input
	// Et je transforme mes deux mots en array

	recup = $("#reponse").val();
	
	var rep = recup.split("");
	// console.log(rep);

	if(rep.length != 8){
		alert("Votre réponse ne comporte pas le bon nombre de lettres.");
	}
	else{
		chance--;
		//console.log(chance);
	}

	// Je compare le mot du joueur et le mot sélectionné aléatoirement
	// dans une boucle afin de les comparer lettre par lettre
	
	var i = 0;
	
	while(i<8){
		
		//Afin d'afficher le mot rentré par le joueur je rajoute un br 
		// lorsque la comparaison porte sur la dernière lettre du mot
		
		if(i === 7 && rep.length == 8){
			if(rep[i] == alea[i]) {
				$("#affichage").append('<span class="green size20">'+rep[i]+'</span><br>');
			}	
			else if(rep[i] != alea[i]){
				var verif = alea.includes(rep[i]);
				if(verif == true){
					$("#affichage").append('<span class="orange size20">'+rep[i]+'</span><br>');
				}
				else{
					$("#affichage").append('<span class="red size20">'+rep[i]+'</span><br>');
				}	
			}
		}
		else if(i < 7 && rep.length == 8) {
			if(rep[i] == alea[i]) {
				$("#affichage").append('<span class="green size20">'+rep[i]+'</span>');
			}
			else if(rep[i] != alea[i]){
				var verif = alea.includes(rep[i]);
				if(verif == true){
					$("#affichage").append('<span class="orange size20">'+rep[i]+'</span>');
				}
				else{
					$("#affichage").append('<span class="red size20">'+rep[i]+'</span>');
				}
			}
		}
		// J'incrémente mon itérateur
		i++;
	}
	
	// Je vide le champs où le joueur rentre sa réponse	
	$("#reponse").val("");

	if(chance === 0 && recup != motRandom){
		rejouer();
		alert("Vous avez perdu! Le mot était: "+motRandom);
	}
	else if (chance >= 0 && recup == motRandom){
		rejouer();
		alert("Félicitations! Vous avez trouvé le bon mot: "+recup);
	}

};

$(document).ready(function() {
    // Je lance la comparaison lors du click du bouton "Valider"
	$("#valider").click(function(){
        recup = $("#reponse").val();
        motus(recup);
    })
    //En appuyant su la touche entrée on peut fégalement validersa réponse
    $("#reponse").keypress(function(e) {
        if (e.keyCode == 13) {
            recup = $("#reponse").val();
        	motus(recup);
        }
    });
})