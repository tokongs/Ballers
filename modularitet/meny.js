//Dette er et skript for å sette opp og lage menyen som skal inkluderes på hver side. Den setter opp en logo med link og
// en liste av lister der "top-level" vil linke til en side om den ikke har en underliste, eller vil elementene i underlisten linke
// til sidene som er spesifisert i sider arrayet

"use strict";
//List over hva som skal være på menyen. De som listene som har flere elementer beskriver et valg med undervalg. det meny[i][0] er "top-level"
//og meny[i][1] til meny[i][j] er dropdown menyer som kan vises under "top-level"
const meny = [["Tilbud", "Fotball", "Basketball", "Håndball"], ["Kontakt"], ["Info", "Info", "FAQ", "Kalender"], ["Bli medlem"]];
//Liste over hva de forskjellige "meny-items" skal linke til. meny[i][j] koresponderer til sider[i][j]. none betyr at det ikke skal være en link
const sider = [["none", "fotball.html", "basketball.html", "handball.html"], ["kontakt.html"], ["none", "info.html", "faq.html", "kalender.html"], ["blimedlem.html"]]

//Hvert "meny item" får en id med en felles prefix etterfulgt av navnet til "meny-item"et
const sublist_item_id_prefix = "meny_item_";
//Hvert "meny item" som ikke er"top level" er klasse "sublist_item"
const sublist_item_class_name = "sublist_item";
//Hver "meny item" som ikke er "top level" er også en klasse med en felles prefix etterfulgt av "top-level meny item" dvs. "Tilbud" eller "Info"
const sublist_group_class_prefix = "sublist_group_";
//Hver "top level" har class "top_level_item"
const top_level_item_class_name = "top_level_item";

//Menyen skal legges inne i en div med id "meny-div". Denne div'en må lages i html dokumentet
const maal = document.querySelector("#meny-div");

let header = document.createElement("header");

let meny_liste = document.createElement("ul");
meny_liste.id = "meny"

//Configurer logoen
let logo = document.createElement("img");
let index_link = document.createElement("a");
index_link.href = "index.html";
index_link.id = "logo_link";
logo.src = "../img/name.png";
logo.alt = "Ballers United";

index_link.appendChild(logo);
header.appendChild(index_link);


//Settes som onHover på "top level" med underelementer
function dropDown(class_name) {
    let sublist = document.getElementsByClassName(class_name);
    if (sublist) {
        for (let i = 0; i < sublist.length; i++) {
            sublist[i].style.display = "block";
        }
    }
}

//Settes som mouseOut på "top-level" med underelementer
function dropUp(class_name) {
    let sublist = document.getElementsByClassName(class_name);
    if (sublist) {
        for (let i = 0; i < sublist.length; i++) {
            sublist[i].style.display = "none";
        }
    }
}

//Lag menyen som dom elementer
//Loop gjennom alle underlistene i meny
for (let i = 0; i < meny.length; i++) {
    let underliste = document.createElement("ul");


    //Loop gjennom alle liste-elementene
    for (let j = 0; j < meny[i].length; j++) {
        //child er liste elementet og link er hva liste elementet skal linke til
        let child = document.createElement("li");
        let link = document.createElement("a");


        //Hvis det bare er "top level" på underlisten. Så skal "top level" linke til en side
        //Eller om vi har loopet forbi "top level" så skal også linke til side
        if (meny[i].length == 1 || j > 0) {
            link.href = sider[i][j];
        }

        child.id = sublist_item_id_prefix + meny[i][j];
        //Hvis child ikke er "top level"
        if (j > 0) {
            child.className = sublist_group_class_prefix + meny[i][0];
            child.className += " " + sublist_item_class_name;
        }
        else{
            child.class_name = top_level_item_class_name;
        }


        link.innerHTML = meny[i][j];

        child.appendChild(link);
        underliste.appendChild(child);
    }
    let top = document.createElement("li");
    top.onmouseover = function () { dropDown(sublist_group_class_prefix + meny[i][0]) };
    top.onmouseout = function () { dropUp(sublist_group_class_prefix + meny[i][0]) };

    top.appendChild(underliste);
    meny_liste.appendChild(top);
}

header.appendChild(meny_liste);
maal.appendChild(header);
