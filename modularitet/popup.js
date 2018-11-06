

 //initierer diven globalt
let diven=Element;    
//Variabel som sikrer at det bare er en "Popup"-artikkel om gangen                                                             
let klar=true;
const antallArtikler = document.getElementsByClassName("artikkel");

function popup(clicked_id){                             
    if (klar) {
        diven = document.getElementById(clicked_id);

        //gjør aktuelle diven til stor popup med style.
        diven.setAttribute("style","width:80vw;"+"height:80vh;"+"z-index=1;"                         
            +"position:fixed;"+"left:5vw;"+ "top:5vw;"+"border:solid #f1f1f1 8px;");    
        
        document.getElementById("closebutton").setAttribute("style", "display:block;");              //exit-knappen blir synlig

        //bilde tilhørende aktuell div blir større
        diven.getElementsByClassName("imgbox")[0].setAttribute("style","width:30vw;"+"height:60vh;");

         //fjerner hoverfunksjonen/class på alle artikkler
        for (let i=0; i < antallArtikler.length; i++){                                                     
            antallArtikler[i].className = "artikkel";                                                   
        }
            
    }

    //sånn at popup ikke kjøres før reset er kjørt.
    klar=false;                                                                                    
}
   

function reset() {                                                          //resetter alle forandringene popup.js gjorde
    diven.setAttribute("style", "background-color: default;"+"width:default;"
    +"height:default;"+"z-index=default;"+"position:default;"+"left:default;"+ "top:default;");
    
    document.getElementById("closebutton").setAttribute("style", "display:none");

    diven.getElementsByClassName("imgbox")[0].setAttribute("style","width:default;"+"height:default;");  
    
    for (let i=0 ; i < antallArtikler.length; i++){             //legger til hover funksjonen/class
        antallArtikler[i].className = "artikkel hovererBart";
    }
    //så popup kan kjøres.
    klar=true;                                                                               
}