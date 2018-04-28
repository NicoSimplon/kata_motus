var verif;
var recup;
var time;
var m = 4;
var s = 30;
var fin = false;
var perdu = new Audio('sons/perdu.mp3');
var gagne = new Audio('sons/gagne.mp3');
var perdue = new Audio('sons/perdue.mp3');

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
	'implosât',
	'foulasse',
	'duperait',
	'aztèques',
	'titubiez',
	'soutenir',
	'regorgez',
	'trémulât',
	'stations',
	'éludasse',
	'patineur',
	'suçotant',
	'moniteur',
	'converse',
	'égalisât',
	'haïssais',
	'roterons',
	'insinuez',
	'fongique',
	'avancent',
	'précisés',
	'bichonna',
	'encodent',
	'galopant',
	'démontre',
	'relirons',
	'sinécure',
	'bombâmes',
	'révélait',
	'craquent',
	'pomponné',
	'appairât',
	'pisseuse',
	'zodiacal',
	'écroulée',
	'trahisse',
	'déglutie',
	'calibrez',
	'incombât',
	'chahutez',
	'cyanoser',
	'galopiez',
	'sécrétés',
	'déclinât',
	'déversée',
	'relaxait',
	'brûlerez',
	'veillées',
	'colonisé',
	'habituer',
	'décrépis',
	'égarâmes',
	'amicales',
	'rigoleur',
	'procéder',
	'dénoncer',
	'vêtirons',
	'dessoudé',
	'brûlages',
	'cajoliez',
	'redoutes',
	'torsadas',
	'recharge',
	'affligée',
	'biphasée',
	'employât',
	'vrillais',
	'fouettât',
	'tanisées',
	'somnolas',
	'excédées',
	'bourrage',
];

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
		m = 4;
	    s = 30;
		timer();
		
		gagne.pause();
		gagne.currentTime = 0;
		perdu.pause();
		perdu.currentTime = 0;
		
		$("#rejouer").hide();
		$("#valider").show();
		$("#affichage").text('');
		$("#indice").html('<span>'+alea[0]+'.......</span>');
		//console.log(motRandom);
		//console.log(chance);
});

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
				verif = alea.includes(rep[i]);
				if(verif){
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
				verif = alea.includes(rep[i]);
				if(verif){
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

	if(chance >= 0 && recup != motRandom){
		if(chance === 0 && recup != motRandom){
			rejouer();
			perdue.play();
			clearTimer();
			alert("Vous avez perdu! Le mot était: "+motRandom);
		}
		else{
			perdu.play();
		}
	}
	else if (chance >= 0 && recup == motRandom){
		rejouer();
		clearTimer();
		gagne.play();
		alert("Félicitations! Vous avez trouvé le bon mot: "+recup);
	}

}

// timer
function timer(){
	
	time = setInterval(function () {
		if(s > 9){
			$("#s").html(s);
			$("#m").html(m);
			s--;
		}
		else if(s<=9){
			$("#s").html("0"+s);
			$("#m").html(m);
			s--;
		}	
			//console.log("seconde:", s);
	        if (s < 0) {
	            m--;
	            s = 59;
	            //console.log("minute:", m);
	        }
	        // condition mettant fin à l'intervalle
	        if(m<0){
	            fin = true;
	            clearTimer();
	            rejouer();
	            m = 4;
	            s = 30;
	            perdue.play();
	            alert("Vous avez perdu! Le mot était: "+motRandom);
	        }
	}, 1000);

}

// fonction arrêtant le timer
function clearTimer(){
	clearInterval(time);
	$("#s").html("00");
	$("#m").html(0);
}

$(document).ready(function() {
	// lancement du compte à rebour au chargement de la page
	timer();
    // Je lance la comparaison lors du click du bouton "Valider"
	$("#valider").click(function(){
        recup = $("#reponse").val();
        motus(recup);
    });
    //En appuyant su la touche entrée on peut fégalement validersa réponse
    $("#reponse").keypress(function(e) {
        if (e.key == "Enter") {
            recup = $("#reponse").val();
        	motus(recup);

        }
    });
});