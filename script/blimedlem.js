function validateForm() {
    console.log("hei")
    var x = document.forms["bli_medlem"]["navn"].value;
    if (x == "") {
        alert("Du må fylle ut navn!");
        return false;
    }

    var y = document.forms["bli_medlem"]["bruker_mail"].value;
    if (y == ""){
        alert("Du må fylle ut e-post!");
        return false;
    }

    var z = document.forms ["bli_medlem"]["lag"].value;
    if (z == ""){
        alert("Velg et lag")
        return false;
    }
}
