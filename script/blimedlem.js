function validateNavn() {
    var inputNavn = document.getElementById("navn");
    if (inputNavn.value == "") {
      inputNavn.style.borderLeft = "6px solid red";
      inputNavn.style.backgroundColor = "lightgrey"
    } else {
      inputNavn.style.borderLeft = "6px solid green";
      inputNavn.style.backgroundColor = "white";
    }
}

function validateEpost() {
    var inputEpost = document.getElementById("mail");
    if (inputEpost.value.includes("@") && inputEpost.value.includes(".")) {
      inputEpost.style.borderLeft = "6px solid green";
      inputEpost.style.backgroundColor = "white";
    } else {
      inputEpost.style.borderLeft = "6px solid red";
      inputEpost.style.backgroundColor = "lightgrey"
    }
}
