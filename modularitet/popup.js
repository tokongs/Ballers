


var diven=Element;                                                                  //initierer diven globalt
var klar=true;                                                                      //Variabel som sikrer at det bare er en "Popup" artikkel om gangen


function popup(clicked_id){                             
    if (klar) {
    diven = document.getElementById(clicked_id);
    diven.setAttribute("style","width:80vw;"+"height:80vh;"+"z-index=1;"                         //gjør aktuelle diven til stor popup med style.
    +"position:fixed;"+"left:5vw;"+ "top:5vw;"+"border:solid #f1f1f1 8px;");    
    
    document.getElementById("closebutton").setAttribute("style", "display:block;");              //exit-knappen blir synlig
    diven.getElementsByClassName("imgbox")[0].setAttribute("style","width:30vw;"+"height:60vh;"); //bilde tilhørende aktuell div blir større
    
    }
    klar=false;                                                                                    //gjør klar til false, sånn at popup ikke kjøres før reset er kjørt.
    console.log(diven)
}
   

function reset() {                                                                                  //resetter alle forandringene popup.js gjorde
    diven.setAttribute("style", "background-color: default;"+"width:default;"
    +"height:default;"+"z-index=default;"+"position:default;"+"left:default;"+ "top:default;");
    document.getElementById("closebutton").setAttribute("style", "display:none");

    diven.getElementsByClassName("imgbox")[0].setAttribute("style","width:default;"+"height:default;");
    klar=true;                                                                                       //gjør klar true, så popup kan kjøres.
}

