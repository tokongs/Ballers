var popup = document.getElementById("popup");
document.getElementById("jin").addEventListener("click",aktiverPopup);
document.getElementById("mama").addEventListener("click",aktiverPopup);
document.getElementById("papa").addEventListener("click",aktiverPopup);

function aktiverPopup(){
  popup.setAttribute("style","height:60%;"+"left:2vw;"+ "bottom:10%;"
  +"top:20;"+"background-color:#353535;"+"border-style: solid;"+"border-color: #53143B;"+"display:block;");
  document.getElementById("btn").setAttribute("style","display:block;");
}

document.getElementById("cancel").addEventListener("click",function(){
  popup.setAttribute("style","display:none;");
  document.getElementById("btn").setAttribute("style","display:none;");
})
