// Händelsehanterare
window.onload = bloggDate;

// Visa datum för blogghändelser & resetips
function bloggDate() {
    
    let dayName = new Array("söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag","lördag");
    let monthName = new Array("janurari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "october", "november", "december");

    var now = new Date();
    var dateString = dayName[now.getDay()] + " " + now.getDate() + " " + monthName[now.getMonth()] + " 2022";

    // document.getElementById("blogg1"). innerHTML = "Postad: " + dateString;
    let dates = document.getElementsByClassName("blogg-date");

    for (let i = 0; i < dates.length; i++) {
        dates[i].innerHTML = "Publicerad: " + dateString;
    }
}