//Henter footerelementet fra sidene
//var myFooter = document.getElementById("ballersFooter");

//Lager et bildeelement til ikonene
var twitterIcon = document.createElement("img");
var googleIcon = document.createElement("img");
var facebookIcon = document.createElement("img");
var snapchatIcon = document.createElement("img");

//Lager et linkelement for de ulike linkene som koples til ikonene
var twitterLink = document.createElement("a");
var googleLink = document.createElement("a");
var facebookLink = document.createElement("a");
var snapchatLink = document.createElement("a");

//Legger til ikonene til variablene
twitterIcon.src = "../img/icons/twitterIcon.png";
googleIcon.src = "../img/icons/googleplusIcon.png";
facebookIcon.src = "../img/icons/facebookIcon.png";
snapchatIcon.src = "../img/icons/snapchatIcon.png";

var src = getElementById(ballersFooter);

src.appendchild(twitterIcon);
src.appendchild(googleIcon);
src.appendchild(facebookIcon);
src.appendchild(snapchatIcon);
