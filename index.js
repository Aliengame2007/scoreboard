let homeCount = 0;
let guestCount = 0;

function homeAdd1() {
    homeCount += 1;
    homeCountSpan.textContent = homeCount;
}

function homeAdd2() {
    homeCount += 2;
    homeCountSpan.textContent = homeCount;
}

function homeAdd3() {
    homeCount += 3;
    homeCountSpan.textContent = homeCount;
}

function guestAdd1() {
    guestCount += 1;
    guestCountSpan.textContent = guestCount;
}

function guestAdd2() {
    guestCount += 2;
    guestCountSpan.textContent = guestCount;
}

function guestAdd3() {
    guestCount += 3;
    guestCountSpan.textContent = guestCount;
}


let homeCountSpan = document.getElementById("home-count");
homeCountSpan.textContent = homeCount;

let guestCountSpan = document.getElementById("guest-count");
guestCountSpan.textContent = guestCount;