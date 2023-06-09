let progress1 = document.getElementById("progress1");
let progress2 = document.getElementById("progress2");
let progress3 = document.getElementById("progress3");
let song1 = document.getElementById("song1");
let song2 = document.getElementById("song2");
let song3 = document.getElementById("song3");
let ctrlIcon1 = document.getElementById("ctrlIcon1");
let ctrlIcon2 = document.getElementById("ctrlIcon2");
let ctrlIcon3 = document.getElementById("ctrlIcon3");

song1.onloadedmetadata = function () {
    progress1.max = song1.duration;
    progress1.value = song1.currentTime;
}

song2.onloadedmetadata = function () {
    progress2.max = song2.duration;
    progress2.value = song2.currentTime;
}

song3.onloadedmetadata = function () {
    progress3.max = song3.duration;
    progress3.value = song3.currentTime;
}

function playPause1() {
    if (ctrlIcon1.classList.contains("fa-pause")) {
        song1.pause();
        ctrlIcon1.classList.remove("fa-pause");
        ctrlIcon1.classList.add("fa-play");
    } else {
        song1.play();
        ctrlIcon1.classList.add("fa-pause");
        ctrlIcon1.classList.remove("fa-play");
        song2.pause();
        song3.pause();
        ctrlIcon2.classList.remove("fa-pause");
        ctrlIcon2.classList.add("fa-play");
        ctrlIcon3.classList.remove("fa-pause");
        ctrlIcon3.classList.add("fa-play");
    }
}

function playPause2() {
    if (ctrlIcon2.classList.contains("fa-pause")) {
        song2.pause();
        ctrlIcon2.classList.remove("fa-pause");
        ctrlIcon2.classList.add("fa-play");
    } else {
        song2.play();
        ctrlIcon2.classList.add("fa-pause");
        ctrlIcon2.classList.remove("fa-play");
        song1.pause();
        song3.pause();
        ctrlIcon1.classList.remove("fa-pause");
        ctrlIcon1.classList.add("fa-play");
        ctrlIcon3.classList.remove("fa-pause");
        ctrlIcon3.classList.add("fa-play");
    }
}

function playPause3() {
    if (ctrlIcon3.classList.contains("fa-pause")) {
        song3.pause();
        ctrlIcon3.classList.remove("fa-pause");
        ctrlIcon3.classList.add("fa-play");
    } else {
        song3.play();
        ctrlIcon3.classList.add("fa-pause");
        ctrlIcon3.classList.remove("fa-play");
        song1.pause();
    song2.pause();
    ctrlIcon1.classList.remove("fa-pause");
    ctrlIcon1.classList.add("fa-play");
    ctrlIcon2.classList.remove("fa-pause");
    ctrlIcon2.classList.add("fa-play");
    }
}

if (song1.play()) {
    setInterval(() => {
        progress1.value = song1.currentTime;
    }, 500);
}

if (song2.play()) {
    setInterval(() => {
        progress2.value = song2.currentTime;
    }, 500);
}

if (song3.play()) {
    setInterval(() => {
        progress3.value = song3.currentTime;
    }, 500);
}

progress1.onchange = function() {
    song1.play();
    song1.currentTime = progress1.value;
    ctrlIcon1.classList.add("fa-pause");
    ctrlIcon1.classList.remove("fa-play");
}

progress2.onchange = function() {
    song2.play();
    song2.currentTime = progress2.value;
    ctrlIcon2.classList.add("fa-pause");
    ctrlIcon2.classList.remove("fa-play");
}

progress3.onchange = function() {
    song3.play();
    song3.currentTime = progress3.value;
    ctrlIcon3.classList.add("fa-pause");
    ctrlIcon3.classList.remove("fa-play");
}
