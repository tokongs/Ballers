//Dette er et skript for å sette opp og lage menyen som skal inkluderes på hver side. Den setter opp en logo med link og 
// en liste av lister der "top-level" vil linke til en side om den ikke har en underliste, eller vil elementene i underlisten linke
// til sidene som er spesifisert i sider arrayet

"use strict";
//List over hva som skal være på menyen. De som listene som har flere elementer beskriver et valg med undervalg. det meny[i][0] er "top-level"
//og meny[i][1] til meny[i][j] er dropdown menyer som kan vises under "top-level"
const meny = [["Tilbud", "Fotball", "Basketball", "Håndball"], ["Kontakt"], ["Info", "Info", "FAQ", "Kalender"], ["Bli medlem"]];
//Liste over hva de forskjellige "meny-items" skal linke til. meny[i][j] koresponderer til sider[i][j]. none betyr at det ikke skal være en link
const sider = [["none", "fotball.html", "basketball.html", "handball.html"], ["kontakt.html"], ["none", "info.html", "faq.html", "kalender.info"], ["bli_medlem.html"]]

//Hvert "meny-item" får en id med en felles prefix etterfulgt av navnet til "meny-item"et
let sublist_item_id_prefix = "sublist_item_";
//Hvert "meny-item" er klasse "sublist_item"
let sublist_item_class_name = "sublist_item";
//Hver "meny-item" er også en klasse med en felles prefix etterfulgt av "top-level meny item" dvs. "Tilbud" eller "Info"
let sublist_group_class_prefix = "sublist_group_"

//Menyen skal lages inne i en header tag.
let header = document.createElement("header");

//Menyen er en unordered list
let meny_liste = document.createElement("ul");
meny_liste.id = "meny"

//Configurer logoen 
let logo = document.createElement("img");
let index_link = document.createElement("a");
index_link.href = "index.html";
index_link.id = "logo_link"
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
    let max_lengde = 0;


    for (let j = 0; j < meny[i].length; j++) {
        let child = document.createElement("li");
        let link = document.createElement("a");

        child.id = sublist_item_id_prefix + meny[i][j];

        if (meny[i].length == 1 || j > 0) {
            link.href = sider[i][j];
        }
        if (j > 0) {
            child.className = sublist_group_class_prefix + meny[i][0];
            child.className += " " + sublist_item_class_name;
        } else {

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

//Legg til meny til dokumentet
header.appendChild(meny_liste);
document.getElementsByTagName("body")[0].insertBefore(header, null);
