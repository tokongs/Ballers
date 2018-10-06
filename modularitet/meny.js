"use strict";
const meny = [["Tilbud", "Fotball", "Basketball", "Håndball"], ["Kontakt"], ["Info", "Info", "FAQ", "Kalender"], ["Bli medlem"]];
const sider = [["none", "fotball.html", "basketball.html", "handball.html"], ["kontakt.html"], ["none", "info.html", "faq.html", "kalender.info"], ["bli_medlem.html"]]

console.table(meny);

let sublist_item_id_prefix = "sublist_item_";
let sublist_item_class_name = "sublist_item";
let sublist_group_class_prefix = "sublist_group_"

let header = document.createElement("header");
let meny_liste = document.createElement("ul");

meny_liste.id = "meny"

let logo = document.createElement("img");
logo.src = "../img/name.png";
logo.alt = "Ballers United";
header.appendChild(logo);


function dropDown(class_name) {
    let sublist = document.getElementsByClassName(class_name);
    if (sublist) {
        for (let i = 0; i < sublist.length; i++) {
            sublist[i].style.display = "block";
        }
    }
}

function dropUp(class_name) {
    let sublist = document.getElementsByClassName(class_name);
    if (sublist) {
        for (let i = 0; i < sublist.length; i++) {
            sublist[i].style.display = "none";
        }
    }
}


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

header.appendChild(meny_liste);
document.getElementsByTagName("body")[0].insertBefore(header, null);
