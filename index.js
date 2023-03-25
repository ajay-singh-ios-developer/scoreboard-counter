
let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")
let homeCount = 0
let guestCount = 0

function add1PointHome() {
    homeCount += 1
    homeScoreEl.textContent = homeCount
}

function add2PointsHome() {
    homeCount += 2
    homeScoreEl.textContent = homeCount
}

function add3PointsHome() {
    homeCount += 3
    homeScoreEl.textContent = homeCount
}

function add1PointGuest() {
    guestCount += 1
    guestScoreEl.textContent = guestCount
}

function add2PointsGuest() {
    guestCount += 2
    guestScoreEl.textContent = guestCount
}

function add3PointsGuest() {
    guestCount += 3
    guestScoreEl.textContent = guestCount
}

function resetScore() {
    guestScoreEl.textContent = 0
    homeScoreEl.textContent = 0
    guestCount = 0
    homeCount = 0
}

