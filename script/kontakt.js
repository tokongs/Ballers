var diven = document.getElementById("nyDiv");
document.getElementById("jin").addEventListener("click",hei);
document.getElementById("mama").addEventListener("click",hei);
document.getElementById("papa").addEventListener("click",hei);

function hei(){
  diven.setAttribute("style","height:60%;"+"left:2vw;"+ "bottom:10%;"
  +"top:20;"+"background-color:#353535;"+"border-style: solid;"+"border-color: #53143B;"+"display:block;");
  document.getElementById("btn").setAttribute("style","display:block;");
}

document.getElementById("cancel").addEventListener("click",function(){
  diven.setAttribute("style","display:none;");
  document.getElementById("btn").setAttribute("style","display:none;");
})
