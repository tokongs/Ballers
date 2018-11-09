

//Variabel som sikrer at det bare er en "Popup"-artikkel om gangen                                                             
const antallArtikler = document.getElementsByClassName("artikkel");
let klar = true;

function popup(artikkel) {
    if (klar) {
        tilbakeKnapp = artikkel.getElementsByTagName("button")[0];
        tilbakeKnapp.style.display = "block";
        //gjør aktuelle popupArtikkel til stor popup med style.

        artikkel.setAttribute("style", "width:80vw;" + "height:80vh;" + "z-index=1;"
            + "position:fixed;" + "left:5vw;" + "top:5vw;" + "border:solid #f1f1f1 2px;" + "z-index:1;");

        //bilde tilhørende aktuell div blir større
        artikkel.getElementsByClassName("imgbox")[0].setAttribute("style", "width:30vw;" + "height:60vh;");

        //fjerner hoverfunksjonen/class på alle artikkler
        for (let i = 0; i < antallArtikler.length; i++) {
            antallArtikler[i].className = "artikkel";
        }
    }
    //sånn at popup ikke kjøres før reset er kjørt.
    klar = false;
}


function reset(tilbakeKnapp) {                                                 //resetter alle forandringene popup.js gjorde
    artikkel = tilbakeKnapp.parentElement;
    artikkel.setAttribute("style", "background-color: default;" + "width:default;"
        + "height:default;" + "z-index=default;" + "position:default;" + "left:default;" + "top:default;");

    artikkel.getElementsByClassName("imgbox")[0].setAttribute("style", "width:default;" + "height:default;");

    tilbakeKnapp = artikkel.getElementsByTagName("button")[0];
    tilbakeKnapp.style.display = "none";

    for (let i = 0; i < antallArtikler.length; i++) {             //legger til hover funksjonen/class
        antallArtikler[i].className = "artikkel hovererbart";
    }

    //så popup kan kjøres
    setTimeout(() => klar = true, 200);
}