// tout d'abord on charge le contenu de la page à afficher
document.open("text/html","replace");
    document.write("<!-- l'entête de la page -->"+
    "<header>"+
        "<center id=\"alignement\"><div><span>Bienvenu dans mon tp Web</span></div></center>"+
    "</header>"+
"<!-- le formulaire de remplissage -->"+
"<div>"+
    "<center id=\"alignement\"><label><u>SUIVI D'ORIENTATION</u> </label></center>"+
    "<center id=\"alignement\"><span> ( ETAPE 1)</span></center>"+
    "<br>"+
    "<form>"+
        "<div>"+
            "<label>Nom</label>"+
        "<input type=\"text\" name=\"nom\" id=\"nom\" class=\"nom\">"+
        "</div>"+
        "<div>"+
            "<label>Prenom</label>"+
        "<input type=\"text\" name=\"prenom\" id=\"prenom\" class=\"prenom\">"+
        "</div>"+
        "<div>"+
            "<label>Date</label>"+
        "<input type=\"date\" name=\"date\" id=\"date\" class=\"ladate\">"+
        "</div>"+
            "<button onclick=\"next2()\"> SUIVANT<i class=\"fa fa-arrow-right\"></i></button>"+
    "</form>"+
"</div>");
      document.close();

var corp=document.querySelector('body');
corp.style.background="#c8bfe7";
//***********************\\
/*le css du header*/ 
var positioncenter=document.querySelector('header');// je selection ma 1ere balise center
positioncenter.style.marginTop="10px";
positioncenter.style.background="Gris clair";
positioncenter.style.border="1px solid";
positioncenter.style.height="100px";
positioncenter.style.paddingTop="90px";
positioncenter.style.fontFamily="High Tower Text, times, red serif";
positioncenter.style.fontSize="34px";

/* style sur le cadre*/

var cadre=document.getElementsByTagName('div')[1];
cadre.style.border="1px solid";
cadre.style.fontFamily="High Tower Text";
cadre.style.width="40%";
cadre.style.height="250px";
cadre.style.marginLeft="30%";
cadre.style.marginTop="2%";
cadre.style.boxShadow="5px 5px 5px 5px black";
cadre.style.fontWeight="bold";


/*  Style pour le titre du cadre*/

var titre=document.getElementsByTagName('center')[1];
titre.style.paddingTop="2%";
titre.style.fontFamily="High Tower Text, times, red serif";
titre.style.fontSize="24px";
titre.style.marginBottom="2%";

//**************************\\


/*Ici je selection tous les élément "div", fils de form*/

var parentform=document.getElementsByTagName('form')[0];
var filsdiv=parentform.children;
// 1er div
filsdiv[0].style.border="1px";
filsdiv[0].style.width="70%";
filsdiv[0].style.height="30px";
filsdiv[0].style.marginLeft="15%";
filsdiv[0].style.marginBottom="2%";

//**********************************\\

//2eme div 
filsdiv[1].style.border="1px";
filsdiv[1].style.width="70%";
filsdiv[1].style.height="30px";
filsdiv[1].style.marginLeft="15%";
filsdiv[1].style.marginBottom="2%";

//*********************************\\

//v 3eme div 
filsdiv[2].style.border="1px";
filsdiv[2].style.width="70%";
filsdiv[2].style.height="30px";
filsdiv[2].style.marginLeft="15%";
filsdiv[2].style.marginBottom="2%";

//*********************************\\

/* je selection le bouton "suivant */

var btnNext=document.getElementsByTagName('button')[0];

btnNext.style.marginLeft="80%";


//**************************\\
  //-------------------------------------------------------------------------------------------------------
     /* je selection le bouton "suivant */
var stylepart=document.getElementsById('part');
stylepart.style.display="flex";
var prt=stylepart.children;
prt[0].style.width="50%";
prt[0].style.border="1px solid";
prt[0].style.padding="10px";


//*****************************************\\
