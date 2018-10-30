//Lager en variabel som er footerelementet på sidene
var footer = document.getElementById("ballersFooter");

//Lager et bildeelement til hvert av ikonene
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

//Legger til link
//Åpner ny fane når man trykker på ikonet
twitterLink.href = "https://twitter.com/";
twitterLink.target = "_blank";
googleLink.href = "https://plus.google.com/discover";
googleLink.target = "_blank";
facebookLink.href = "https://www.facebook.com/";
facebookLink.target = "_blank";
snapchatLink.href = "https://www.snapchat.com/";
snapchatLink.target = "_blank";

//Legger ikonene til linkene
twitterLink.appendChild(twitterIcon);
googleLink.appendChild(googleIcon);
facebookLink.appendChild(facebookIcon);
snapchatLink.appendChild(snapchatIcon);

//Legger ikonene og linkene til footeren
footer.appendChild(twitterLink);
footer.appendChild(googleLink);
footer.appendChild(facebookLink);
footer.appendChild(snapchatLink);
