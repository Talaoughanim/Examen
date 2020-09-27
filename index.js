




// création de la variable livres//

let livres = [
  {
    titre: "Apprendre Javascript",
    auteur: "auteur inconnu",
    prix: "25",
    resume: "Vous souhaitez apprendre JS, its time",
  },
  // création du premier élément de notre tab
  {
    titre: "Apprendre PHP",
    auteur: "Lyanna Ghazi",
    prix: "14",
    resume: "Tu sais PHP ... Dure",
  },
  {
    titre: "Apprendre Python",
    auteur: "Noham Boulette",
    prix: "29",
    resume: "Venez apprendre Python en rigolant",
  },
  {
    titre: "Apprendre à apprendre",
    auteur: "Aylan Aksil",
    prix: "10",
    resume: "venez apprendre à apprendre",
  },
];
console.log(livres);

// création de la fonction pour les recommandations

function afficheRecommandation() {
  for (i = 0; i < 3; i++);

  document.getElementById("livre1").innerHTML = livres[0].titre;
  document.getElementById("livre2").innerHTML = livres[1].titre;
  document.getElementById("livre3").innerHTML = livres[2].titre;
}

function afficheRecommandation() {
    console.log(livres[0]);
    console.log(livres[1]);
    console.log(livres[2])
}
afficheRecommandation();

// function pour afficher le prix du livre

afficheLivres(20);
function afficheLivres(prixMax) {
  let result;
  if (prix > prixMax) {
    result = "négative";
    console.log("Le prix est supérieur au tarif en vigueur");
  } else {
    result = "positive";
    console.log("Le prix est inférieur au tarif maximum");
  }
  return result;
}

// création de la fonction affiche Livres 

RechercheLivres(recherche) ;

    const url= 'https://www.googleapis.com/books/v1/volumes?q=ecmascript';
    function RechercheLivres();



// créer une requête 

let requete = new XMLHttpRequest();
requete.open('GET','url');

requete.responseType = 'json' // nous attendons du JSON

requete.send(); //nous envoyons la requête

// executer la fonction 

requete.onload = function(){
    if(requete.readyState === XMLHttpRequest.DONE){
        if(requete.status === 200){
            let reponse = requete.response; // stocke la réponse
console.log(reponse);
        }
else{
    alert('Un problème est intervenu')
}
    }
    console.log('nom du livre')
}

setInterval(RechercheLivres);