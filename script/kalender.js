let idag = new Date();
let innevarendeMaaned = idag.getMonth();
let innevarendeAar = idag.getFullYear();

let months = [
    "Januar",
    "Februar",
    "Mars",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Desember"
];

let maanedOgAar = document.getElementById("maanedOgAar");
let kalender = document.getElementById("calendar-body");


var eventer = new Map([
    [new Date(2018, 10, 11).getTime(), ["Kampdag", "Avslutning"]],
    [new Date(2018, 10, 18).getTime(), ["Teambuilding"]],
    [new Date(2018, 10, 9).getTime(), ["Teambuilding"]],
]);

ukentligEvent(new Date(2018, 7, 13), 104, ["Fotballtrening"]);
ukentligEvent(new Date(2018, 7, 15), 104, ["Håndballtrening"]);
ukentligEvent(new Date(2018, 7, 17), 104, ["Basketballtrening"]);

vis_kalender(new Date());
function vis_kalender(dato) {
    while (kalender.firstChild) {
        kalender.removeChild(kalender.firstChild);
    }

    maanedOgAar.innerHTML = months[innevarendeMaaned] + " " + innevarendeAar;

    let forste_dag = new Date(dato.getFullYear(), dato.getMonth(), 1).getDay() - 1;
    let offset = forste_dag;
    let antall_dager = new Date(dato.getFullYear(), dato.getMonth() + 1, 0).getDate();

    for (i = 0; i < 6; i++) {
        let rad = document.createElement("tr");
        for (j = 0; j < 7; j++) {
            let celle = document.createElement("td");
            let border = document.createElement("p");
            //console.log(months[innevarendeMaaned] + (innevarendeAar).toString() + ((j + 7 * i) - offset + 1).toString())
            celle.id = months[innevarendeMaaned] + (innevarendeAar).toString() + ((j + 7 * i) - offset + 1).toString();
            if (innevarendeAar === new Date().getFullYear() && innevarendeMaaned === new Date().getMonth()) {
                if ((j + 7 * i) - offset + 1 === new Date().getDate()) {
                    celle.id = "idag";
                }
                rad.appendChild(celle);
            }

            naa_dato = new Date(innevarendeAar, innevarendeMaaned, (j + 7 * i) - offset + 1);
            naa_eventer = eventer.get(naa_dato.getTime());

            if (((j + 7 * i) - offset + 1) > antall_dager) {
                break;
            }
            if (j >= forste_dag) {
                border.innerHTML = (j + 7 * i) - offset + 1;
                celle.appendChild(border);
                lagEventListe(celle, naa_eventer)
                forste_dag = 0;
            }
            rad.appendChild(celle);
        }
        kalender.appendChild(rad);
    }
}

function lagEventListe(celle, eventer) {

    if (eventer == undefined)
        return;

    liste = document.createElement("ul");

    for (let i = 0; i < eventer.length; i++) {
        event = document.createElement("li");
        event.innerHTML = eventer[i];
        liste.appendChild(event);
    }
    celle.className = "har_hendelse"
    celle.appendChild(liste)
}

function ukentligEvent(dato, antallUker, eventNavn) {

    for (let i = 0; i < antallUker; i++) {
        dagensEventer = eventer.get(dato.getTime());
        if (dagensEventer != undefined) {
            dagensEventer.push(eventNavn)
            eventer.set(dato.getTime(), dagensEventer);

        } else {
            eventer.set(dato.getTime(), eventNavn);
        }

        dato.setDate(dato.getDate() + 7);
    }
}



function forrige() {
    innevarendeAar = innevarendeMaaned === 0 ? innevarendeAar - 1 : innevarendeAar;
    innevarendeMaaned = innevarendeMaaned === 0 ? 11 : innevarendeMaaned - 1;
    vis_kalender(new Date(innevarendeAar, innevarendeMaaned));

}

function neste() {
    innevarendeAar = innevarendeMaaned === 11 ? innevarendeAar + 1 : innevarendeAar;
    innevarendeMaaned = (innevarendeMaaned + 1) % 12;
    vis_kalender(new Date(innevarendeAar, innevarendeMaaned));
}
