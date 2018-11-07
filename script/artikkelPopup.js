

 //initierer popupArtikkel globalt
let popupArtikkel=Element;    
//Variabel som sikrer at det bare er en "Popup"-artikkel om gangen                                                             
let klar=true;
const antallArtikler = document.getElementsByClassName("artikkel");

function popup(clicked_id){                   
    if (klar) {
        popupArtikkel = document.getElementById(clicked_id);
        console.log(clicked_id)
        tilbakeKnapp = popupArtikkel.getElementsByTagName("button")[0];
        tilbakeKnapp.style.display = "block";
        //gjør aktuelle popupArtikkel til stor popup med style.

        popupArtikkel.setAttribute("style","width:80vw;"+"height:80vh;"+"z-index=1;"                         
            +"position:fixed;"+"left:5vw;"+ "top:5vw;"+"border:solid #f1f1f1 8px;" + "z-index:1;");    
        
        //bilde tilhørende aktuell div blir større
        popupArtikkel.getElementsByClassName("imgbox")[0].setAttribute("style","width:30vw;"+"height:60vh;");

         //fjerner hoverfunksjonen/class på alle artikkler
        for (let i=0; i < antallArtikler.length; i++){                                                     
            antallArtikler[i].className = "artikkel";                                                   
        }
    }

    popupArtikkel.onclick = ""

    //sånn at popup ikke kjøres før reset er kjørt.
    klar=false;                                                                                    
}
   

function reset() {                                                          //resetter alle forandringene popup.js gjorde
    popupArtikkel.setAttribute("style", "background-color: default;"+"width:default;"
    +"height:default;"+"z-index=default;"+"position:default;"+"left:default;"+ "top:default;");

    popupArtikkel.getElementsByClassName("imgbox")[0].setAttribute("style","width:default;"+"height:default;");  

    tilbakeKnapp = popupArtikkel.getElementsByTagName("button")[0];
    tilbakeKnapp.style.display = "none";
    
    for (let i=0 ; i < antallArtikler.length; i++){             //legger til hover funksjonen/class
        antallArtikler[i].className = "artikkel hovererBart";
    }
    //så popup kan kjøres.
    klar=true;            
    
  setTimeout((() => popupArtikkel.onclick = function(){popup(popupArtikkel.id)}), 200);
}