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

    let forste_dag = new Date(dato.getFullYear(), dato.getMonth(), 1).getDay();
    let offset = forste_dag;
    let antall_dager = new Date(dato.getFullYear(), dato.getMonth() + 1, 0).getDate();

    console.log(forste_dag);


    for (i = 0; i < 6; i++) {
        let rad = document.createElement("tr");
        for (j = 0; j < 7; j++) {
            let celle = document.createElement("td");
            if(currentYear === new Date().getFullYear() && currentMonth === new Date().getMonth()){
                if((j + 7 * i) - offset + 1 === new Date().getDate()){
                    celle.id = "today";
                }
            }
            if (((j + 7 * i) - offset + 1) > antall_dager) {
                break;
            }
            if (j >= forste_dag) {
                celle.innerHTML = (j + 7 * i) - offset + 1;
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