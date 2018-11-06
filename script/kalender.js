let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
];

let monthAndYear = document.getElementById("monthAndYear");
let kalender = document.getElementById("calendar-body");


var eventer = new Map([
      [new Date(2018, 10, 11).getTime(), ["Kampdag", "Avslutning"]],
      [new Date(2018, 10, 18).getTime(), ["Teambuilding"]],
    ]);

    ukentligEvent(new Date(2018, 7, 13), 104, ["Fotballtrening"]);
    ukentligEvent(new Date(2018, 7, 15), 104, ["Håndballtrening"]);
    ukentligEvent(new Date(2018, 7, 17), 104, ["Basketballtrening"]);

vis_kalender(new Date());
function vis_kalender(dato) {
    while(kalender.firstChild){
        kalender.removeChild(kalender.firstChild);
    }

    monthAndYear.innerHTML = months[currentMonth] + " " + currentYear;

    let forste_dag = new Date(dato.getFullYear(), dato.getMonth(), 1).getDay() - 1;
    let offset = forste_dag;
    let antall_dager = new Date(dato.getFullYear(), dato.getMonth() + 1, 0).getDate();

    for (i = 0; i < 6; i++) {
        let rad = document.createElement("tr");
        for (j = 0; j < 7; j++) {
            let celle = document.createElement("td");
            let border = document.createElement("p");
            //console.log(months[currentMonth] + (currentYear).toString() + ((j + 7 * i) - offset + 1).toString())
              celle.id = months[currentMonth] + (currentYear).toString() + ((j + 7 * i) - offset + 1).toString();
            if(currentYear === new Date().getFullYear() && currentMonth === new Date().getMonth()){
                if((j + 7 * i) - offset + 1 === new Date().getDate()){
                    celle.id = "today";
                }
            rad.appendChild(celle);
            }

            naa_dato = new Date(currentYear, currentMonth, (j + 7 * i) - offset + 1);
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

function lagEventListe(celle, eventer){

    if(eventer == undefined)
        return;

    liste = document.createElement("ul");

    for(let i = 0; i < eventer.length; i++){
        event = document.createElement("li");
        event.innerHTML = eventer[i];
        liste.appendChild(event);
    }
    celle.className = "har_hendelse"
    celle.appendChild(liste)
}

function ukentligEvent(dato, antallUker, eventNavn) {
    for(let i = 0; i < antallUker; i++) {
    dato.setDate(dato.getDate() + 7);
    eventer.set(dato.getTime(), eventNavn);
    }
}



function previous(){
    currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    currentMonth = currentMonth === 0 ? 11: currentMonth - 1;
    vis_kalender(new Date(currentYear, currentMonth));

}

function next(){
    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    vis_kalender(new Date(currentYear, currentMonth));
}
