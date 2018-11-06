function validateForm() {
    var x = documentForm["bli_medlem"]["navn"].value
    if (x == "")(
        alert("Du må fylle ut navn!");
        return false;
    )

    var y = documentForm["bli_medlem"]["bruker_mail"].value
    if (y == "")(
        alert("Du må fylle ut navn!");
        return false;
    )

    var z = documentForm ["bli_medlem"]["lag"].value
    if (z == "")(
        alert("Velg et lag")
        return false;
    )
}
    