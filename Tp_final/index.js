var corp = document.querySelector("body");
corp.style.background = "#c8bfe7";
//***********************\\
/*le css du header*/
var positioncenter = document.querySelector("header"); // je selection ma 1ere balise center
positioncenter.style.marginTop = "10px";
positioncenter.style.background = "Gris clair";
positioncenter.style.border = "1px solid";
positioncenter.style.height = "100px";
positioncenter.style.paddingTop = "90px";
positioncenter.style.fontFamily = "High Tower Text, times, red serif";
positioncenter.style.fontSize = "28px";

/* style sur le cadre*/
var cadre = document.getElementsByTagName("div")[1];
cadre.style.border = "1px solid";
cadre.style.fontFamily = "High Tower Text";
cadre.style.width = "40%";
cadre.style.height = "250px";
cadre.style.marginLeft = "30%";
cadre.style.marginTop = "2%";
cadre.style.paddingLeft = "2%";
cadre.style.boxShadow = "5px 5px 5px 5px black";
cadre.style.fontWeight = "bold";

/*  Style pour le titre du cadre*/
var titre = document.getElementsByTagName("center")[1];
titre.style.paddingTop = "2%";
titre.style.fontFamily = "High Tower Text, times, red serif";
titre.style.fontSize = "24px";
titre.style.marginBottom = "2%";

/* disposition de la page 4*/
const space = document.querySelectorAll(".espace");
/*space[3].style.display="flex";*/
space[3].style.marginLeft = "15%";
const carre = space[3].children;
carre[0].style.border = "1px";
carre[0].style.display = "flex";
const contrat = carre[0].children;
contrat[1].style.marginLeft = "10%";

carre[1].style.border = "1px solid";
carre[1].style.width = "40%";
/* 	carre[1].style.height="70%";
 */ carre[1].style.display = "none";
/* Ici on verifie d'abord si l'utilisateur click sur cdd pour faire apparaitre la partie date*/
var radio = document.getElementById("cdd");

function affdate() {
  radio.checked = true;
  carre[1].style.display = "block";
}
function nonedate() {
  carre[1].style.display = "none";
}
/* // ça c'est l'ecouteur du bouton qui doit afficher la date
	radio.addEventListener('click',(e)=>{
	e.preventDefault();
	const btnradio=document.querySelector('input [type=radio][id= cdd]:checked').checked="true";
	
});*/

carre[1].style.marginLeft = "10%";
carre[1].style.marginTop = "2%";
carre[1].style.paddingLeft = "10%";

// style des boutons
const divbtn = document.querySelector(".btn");
divbtn.style.border = "1px";
divbtn.style.display = "flex";

const btnprew = document.getElementsByTagName("button")[0];
btnprew.style.marginLeft = "1%";
const btnnext = document.getElementsByTagName("button")[1];
btnnext.style.marginLeft = "60%";

const parent = document.querySelectorAll("#part");
/*creation des boutons*/
const nextbtn = document.getElementById("next");
const prevbtn = document.getElementById("prev");
const btnTerminer = document.getElementById("terminer");

// ==*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=Fin du style=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
let page = 0;
let data = {};

/*le bouton precedent*/

// initialisation de la visibilité des block
parent[page].style.display = "block";
for (i = 1; i < parent.length; i++) {
  if (page == 0) {
    prevbtn.style.display = "none";
  } else {
    prevbtn.style.display = "block";
  }
  parent[i].style.display = "none";
}

/*definition des ecouteurs de boutons*/
nextbtn.addEventListener("click", e => {
  e.preventDefault();
  next();
});

prevbtn.addEventListener("click", e => {
  e.preventDefault();
  previous();
});

// if (page < parent.length) {
//   btnTerminer.style.display = "none";
// } else {
//   btnTerminer.style.display = "block";
// }





let form = document.getElementById("myForm");
function getData() {
  if (page == 0) {
    const nom = form.elements["nom"].value ?? "";
    const prenom = form.elements["prenom"].value ?? "";
    const date_naiss = form.elements["date_naiss"].value ?? "";
    const form1Data = {
      nom,
      prenom,
      date_naiss,
    };
    data = { ...data, ...form1Data };
  }
  if (page == 1) {
    let java = form.elements["java"];
    let php = form.elements["php"];
    let python = form.elements["python"];
    let jScript = form.elements["jScript"];
    let cpp = form.elements["cpp"];
    let react = form.elements["react"];

    const form2Data = {
      java: java.checked ? java.value : "",
      php: php.checked ? php.value : "",
      python: python.checked ? python.value : "",
      jScript: jScript.checked ? jScript.value : "",
      cpp: cpp.checked ? cpp.value : "",
      react: react.checked ? react.value : "",
    };
    console.log("checkbox", form.elements["java"].checked);
    data = { ...form2Data, ...data };
  }
  if (page == 2) {
    const annee_exp = form.elements["annee_exp"].value ?? "";
    const form3Data = {
      annee_exp,
    };
    data = { ...data, ...form3Data };
  }
  if (page == 3) {
    const gender = form.elements["gender"].value ?? "";
    const form4Data = {
      gender,
    };
    data = { ...data, ...form4Data };
  }
  if (page == 4) {
    const gender = form.elements["gender"].value ?? "";
    const form4Data = {
      gender,
    };
    data = { ...data, ...form4Data };
  }
  return { ...data };
}

/* fonction qui gere l'avancement et et le retour des page*/
function next() {
  data = getData();
  console.log("demo data Next", data);
  console.log("Element", form);

  if (page < parent.length - 1) {
    parent[++page].style.display = "block";
  }
  for (i = 0; i < parent.length; i++) {
    if (i != page) {
      parent[i].style.display = "none";
    }
  }

  if (page == parent.length - 2) {
    var x = document.forms["MonFormulaire"]["gender"].checked;
    nextbtn.innerText = "Envoyer";
    nextbtn.type = "submit";
  }

  if (page == parent.length - 1) {
    nextbtn.innerText = "Terminer";
    nextbtn.type = "submit";
    nextbtn.name = "submit";
    /*var cadre5=documentgetElementByTagName('div')[1].style.height="250px";*/
  }

  if (page == 0) {
    prevbtn.style.display = "none";
  } else {
    prevbtn.style.display = "block";
  }
}

function previous() {
  /*if(page==0)
	{
		prevbtn.style.display="none";
	}*/
  data = getData();
  console.log("demo data Next", formData);
  parent[--page].style.display = "block";

  for (i = 0; i < parent.length; i++) {
    if (i != page) {
      parent[i].style.display = "none";
    }
  }
  //si on rentre sur la page 4, le bouton terminer devient suivant
  if (page == parent.length - 1) {
    nextbtn.innerText = "Terminer";
    nextbtn.name = "fini";
    /*var cadre5=documentgetElementByTagName('div')[1].style.height="250px";*/
  } else if (page == parent.length - 2) {
    nextbtn.innerText = "Envoyer";
    nextbtn.type = "submit";
    nextbtn.name = "";
  } else {
    nextbtn.innerText = "Suivant";
  }

  if (page == 0) {
    prevbtn.style.display = "none";
  } else {
    prevbtn.style.display = "block";
  }
}

btnTerminer.addEventListener('click', (e) => {
  e.preventDefault();
    console.log("Data items => ", data)
  })

/* Les validations de formulaires*/

function validateForm() {
  var nom = document.forms["MonFormulaire"]["nom"].checked;
  var prenom = document.forms["MonFormulaire"]["prenom"].checked;
  var date_naiss = document.forms["MonFormulaire"]["date_naiss"].checked;
  var technologie = document.forms["MonFormulaire"]["technos"].checked;
  var annee_expert = document.forms["MonFormulaire"]["annee_exp"].checked;
  var type_contrat = document.forms["MonFormulaire"]["gender"].checked;
  var date_fin = document.forms["MonFormulaire"]["date_de_fin"].checked;

  if (nom == null || nom == "") {
    // alert("Name must be filled out");
    return false;
  }
  if (prenom == null || prenom == "") {
    // alert("Lastname must be filled out");
    return false;
  }
  if (date_naiss == null || date_naiss == "") {
    // alert("Start date must be filled out");
    return false;
  }
  if (technologie == null || technologie == "") {
    // alert("Technologie must be choiced out");
    return false;
  }
  if (annee_expert == null || annee_expert == "") {
    // alert("Year of expertise must be filled out");
    return false;
  }
  if (type_contrat == null || type_contrat == "") {
    // alert("Contrat type must be filled out");
    return false;
  }

  var nom1 = document.forms["MonFormulaire"]["nom"];
  var prenom1 = document.forms["MonFormulaire"]["prenom"];
  var ladate1 = document.forms["MonFormulaire"]["date_naiss"];
  var technologie11 = document.forms["MonFormulaire"]["annee_exp"];
  var type_contrat1 = document.forms["MonFormulaire"]["gender"];
  var date_fin1 = document.forms["MonFormulaire"]["date_de_fin"];

  nom_val1 = nom1.value;
  prenom1 = prenom1.value;
  ladate1 = ladate1.value;
  technologie1 = technologie1.value;
  annee_expert1 = annee_expert1.value;
  type_contrat1 = type_contrat1.value;
}
