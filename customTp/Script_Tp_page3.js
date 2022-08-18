// tout d'abord on charge le contenu de la page à afficher
 function page3()
 {
document.open("text/html","replace");
    document.write("<!-- l'entête de la page -->"+
    "<header>"+
        "<center id=\"alignement\"><div><span>Bienvenu dans mon tp Web</span></div></center>"+
    "</header>"+
"<!-- le formulaire de remplissage -->"+
"<div>"+
    "<center id=\"alignement\"><label><u>SUIVI D'ORIENTATION</u> </label></center>"+
    "<center id=\"alignement\"><span> ( ETAPE 3)</span></center>"+
    "<br>"+
    "<form>"+
        "<div>"+
                "<span><center>Vos années d'expérience :</center> </span> <br> "+
                "<div>"+
                    "<input type=\"radio\" name=\"gender\" value=\"bebe\"> o à 1 an<br>"+
                "</div>"+
                 "<div>"+
                    "<input type=\"radio\" name=\"gender\" value=\"nourrisson\"> 2 à 3 ans<br>"+
                "</div>"+
                "<div>"+
                    "<input type=\"radio\" name=\"gender\" value=\"enfant\"> + 3 ans"+ 
                "</div>"+
        "</div>"+
    "</form>"+
     "<div>"+
        "<button onclick=\"prew2()\"><i class=\"fa fa-arrow-left\"></i>PRECEDENT</button> "+
        "<button onclick=\"page4()\"> SUIVANT<i class=\"fa fa-arrow-right\"></i></button>"+
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
/*divchk.style.border="1px solid";
*/divchk.style.marginLeft="20%"
divchk.style.paddingLeft="5%"

//les boutons
// bouton de retour
var btnprew=document.getElementsByTagName('button')[0];
btnprew.style.marginLeft="2%";
var btnnext=document.getElementsByTagName('button')[1];
btnnext.style.marginLeft="60%";



    }

function prew2()
{
    document.open("text/html","replace");
    document.open("text/html","replace");
    document.write("<header><center id=\"alignement\"><div><span>Bienvenu dans mon tp Web</span></div></center></header>"
      +"<!-- le formulaire de remplissage -->"+
      "<div><center id=\"alignement\"><label><u>SUIVI D'ORIENTATION</u> </label></center>"+
             "<center id=\"alignement\"><span>( ETAPE 2)</span></center><br>"+
            "<form><div><span><center>Choisissez vos technologies (au moins 3)</center> </span> <br>"+
                  " <div style=\"display: flex; border:1px; width:50%;margin-left:30%;\"> "
                        +"<div style=\"width: 40%; border: 1px; padding-left:5px;\"> "+
                           "<input type=\"checkbox\" name=\"vehicle1\" value=\"Bike\"> Java<br>"+
                           "<input type=\"checkbox\" name=\"vehicle2\" value=\"Car\"> Php <br>"+
                           "<input type=\"checkbox\" name=\"vehicle2\" value=\"Car\"> python <br> "+
                        "</div> <div> "+
                              "<input type=\"checkbox\" name=\"vehicle2\" value=\"Car\"> Javascript <br>"+
                              "<input type=\"checkbox\" name=\"vehicle2\" value=\"Car\"> c++ <br> "+
                              " <input type=\"checkbox\" name=\"vehicle2\" value=\"Car\"> React js <br> "+
                              " </div> </div> "+
                     " </div>"+
            "</form>"+
            "<div>"+
               "<button onclick=\"next2()\"><i class=\"fa fa-arrow-left\"></i>PRECEDENT</button> "+
               "<button onclick=\"page3()\">SUIVANT<i class=\"fa fa-arrow-right\"></i></button>"+
            "</div>"+
   "</div>");
     document.close();
//la page precedente
var corp=document.querySelector('body');
corp.style.background="#c8bfe7";
//***********************\\
//le css du header 
var positioncenter=document.querySelector('header');// je selection ma 1ere balise center
positioncenter.style.marginTop="10px";
positioncenter.style.background="Gris clair";
positioncenter.style.border="1px solid";
positioncenter.style.height="100px";
positioncenter.style.paddingTop="90px";
positioncenter.style.fontFamily="High Tower Text, times, red serif";
positioncenter.style.fontSize="28px";

/* style sur le cadre*/

var cadre=document.getElementsByTagName('div')[1];
cadre.style.border="1px solid";
cadre.style.fontFamily="High Tower Text";
cadre.style.width="50%";
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
var lastdiv=document.getElementsByTagName('div')[6];
//lastdiv.style.border="1px solid";


// bouton de retour
var btnprew=document.getElementsByTagName('button')[0];
btnprew.style.marginLeft="2%";
var btnnext=document.getElementsByTagName('button')[1];
btnnext.style.marginLeft="70%";

 
}

