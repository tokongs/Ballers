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


vis_kalender(new Date());
function vis_kalender(dato) {
    while(kalender.firstChild){
        kalender.removeChild(kalender.firstChild);
    }

    monthAndYear.innerHTML = months[currentMonth] + " " + currentYear;

    let forste_dag = new Date(dato.getFullYear(), dato.getMonth(), 1).getDay() - 1;
    let offset = forste_dag;
    let antall_dager = new Date(dato.getFullYear(), dato.getMonth() + 1, 0).getDate();

    console.log(forste_dag);


    for (i = 0; i < 6; i++) {
        let rad = document.createElement("tr");
        for (j = 0; j < 7; j++) {
            let celle = document.createElement("td");
            let border = document.createElement("p");
            console.log(months[currentMonth] + (currentYear).toString() + ((j + 7 * i) - offset + 1).toString())
              celle.id = months[currentMonth] + (currentYear).toString() + ((j + 7 * i) - offset + 1).toString();
            if(currentYear === new Date().getFullYear() && currentMonth === new Date().getMonth()){
                if((j + 7 * i) - offset + 1 === new Date().getDate()){
                    celle.id = "today";
                    celle.onclick = openModal;
                }
            }
            if (((j + 7 * i) - offset + 1) > antall_dager) {
                break;
            }
            if (j >= forste_dag) {
                border.innerHTML = (j + 7 * i) - offset + 1;
                celle.appendChild(border);
                forste_dag = 0;
            }
            rad.appendChild(celle);
        }
        kalender.appendChild(rad);
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

// Modal Events

var modal = document.getElementById("myModal");
var close = document.getElementsByClassName("close")[0];
close.onclick = function() {
modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openModal() {
    modal.style.display = "block";
  }

var eventNode = document.createElement("LI");
var event = document.createTextNode("10. november Frekk + Freidig @Diskoteket");
eventNode.appendChild(event);
document.getElementById("modal-body").appendChild(eventNode);
