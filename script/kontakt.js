var popup = document.getElementById("popup");
var bilder = document.getElementsByClassName("bildediv");
for (var i = 0; i < bilder.length; i++) {
  bilder[i].addEventListener("click",aktiverPopup);
}


console.log(popup)
function aktiverPopup(){
  popup.setAttribute("style","height:60%;"+"left:2vw;"+ "bottom:10%;"
  +"border:solid #f1f1f1 2px;"+"display:block;");
}

document.getElementById("cancel").addEventListener("click",function(){
  popup.setAttribute("style","display:none;");
})
