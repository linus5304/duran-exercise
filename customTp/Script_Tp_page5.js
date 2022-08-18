function page5()
 {
document.open("text/html","replace");
    document.write("<!-- l'entête de la page -->"+
    "<header>"+
        "<center id=\"alignement\"><div><span>Bienvenu dans mon tp Web</span></div></center>"+
    "</header>"+
"<!-- le formulaire de remplissage -->"+
"<div>"+
    "<center id=\"alignement\"><label><u>SUIVI D'ORIENTATION</u> </label></center>"+
    "<center id=\"alignement\"><span> ( ETAPE 4)</span></center>"+
    "<br>"+
     "<span><center>( récapitulatif ) </center> </span> <br> "+
    "<section>"+
        "<label>Nom & Prenom : <span> </span></label>"+
        "<label>Age : <span> </span></label>"+
        "<label> vos technos : <span> </span></label>"+
        "<label> vos années d'experience : <span> </span></label>"+
        "<label> type de contrat : <span> </span></label>"+
    "</section>"+
     "<div>"+
        "<button > TERMINER<i class=\"fa fa-arrow-right\"></i></button>"+
            "</div>"+
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

//je gère le style des checkbox
var divchk=document.getElementsByTagName('div')[2];
divchk.style.width="50%";
divchk.style.border="1px solid";
divchk.style.marginLeft="20%"
divchk.style.paddingLeft="5%";
divchk.style.display="flex";
divchk.style.boxShadow="3px 3px 3px 3px magenta";
var filchk=divchk.children;
filchk[1].style.paddingLeft="20%";


//les boutons
// bouton de retour
var btnprew=document.getElementsByTagName('button')[0];
btnprew.style.marginLeft="2%";
var btnnext=document.getElementsByTagName('button')[1];
btnnext.style.marginLeft="60%";

    }