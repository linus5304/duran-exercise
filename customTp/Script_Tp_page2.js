//supression du center[2] par click du bouton 'suivant'
var percenter=document.getElementsByTagName('div')[1];
 var del=document.querySelector('button');
 function next2 () 
 {
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
                      "<div>"+
                              "<button onclick=\"prew1()\"><i class=\"fa fa-arrow-left\"></i>PRECEDENT</button> "+
                              "<button onclick=\"page3()\">SUIVANT<i class=\"fa fa-arrow-right\"></i></button>"+
                      "</div>"+
            "</form>"+
   "</div>");
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
positioncenter.style.fontSize="34px";

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


//******************************\\
 }

  function prew1()
    {
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
    "</form>"+
    "<button onclick=\"next2()\"> SUIVANT<i class=\"fa fa-arrow-right\"></i></button>"+
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
positioncenter.style.fontSize="28px";

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

    }