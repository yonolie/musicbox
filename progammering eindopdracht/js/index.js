const lightBulb = document.querySelector("#icon");
const clickSound = document.querySelector("#clickSound");
let iconStatus = false;

function switchicon() {
    if (iconStatus == true) {
        lightBulb.src = "content/min.png";
        iconStatus = false;
    } else {
        lightBulb.src = "content/plus.png";
        iconStatus = true;
    }
    // Geluid afspelen wanneer er op de lamp wordt geklikt
    clickSound.play();
    
}

lightBulb.addEventListener('click', switchicon);