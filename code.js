//Deklarera variabler
let lastImage; // sista bilden
let imgElems; // bildspelet (alla bilder)
let image; // aktuell bild


//Funktion för slideshow
function runSlideshow() {
    let intervalId = setInterval(function() {
        imgElems = document.querySelectorAll("#index2 img"); // hämta alla bilder
        image = imgElems[imgElems.length - 1]; // sista bilden
        fadeOut(image);

    }, 5000);
    
    return intervalId
}
// setTimeout(runSlideshow(), 3000);


// //Funktion för att bilder i bildspel "fejdar ut"
function fadeOut(image) {
    let opacity = 1;
    let fadeOutId = setInterval(function () {
        image.style.opacity = opacity;
        if (opacity > 0) {
            opacity -= 0.01
        } else {
            clearInterval(fadeOutId);
            opacity = 1;
            image.style.opacity = 1;
            moveImage(image);
        }

    }, 1000 / 60);
}


// Funktion för att flytta sista bilden högst upp. 
// Prepend to #id "index2" (parent to imgElem)
function moveImage(image) {
    image.remove();
    index2.prepend(image);
 
}

