"use strict";

var story = "";
var typed = 0;
var typing = false;
var timer;
var wordCount = 0;

var storyCount = 0;
var MAX_STORIES = 10000;

// Everlasting memory fix: when the story gets THIS long, cut the old part off
var MAX_CHARS = 30000;
var KEEP_CHARS = 10000;

var out = document.getElementById("output");
var textNode = null;

var SAVE_KEY = "akiongSettings";

var currentLang = "en";

// ##########################################################################
// CONFIG
// ##########################################################################

// ----- FILE NAMES -----
var FILE_ICON = "images/AkiongIcon.png";
var FILE_PAINTING = "images/AkiongPainting.png";
var FILE_PLANT = "images/Plant.jpg";
var FILE_CHICK = "images/Chick.jpg";
var FILE_CHICK2 = "images/Chick2.jpg";
var FILE_EVIL_CHICK = "images/misc/EvilChick.png";
var FILE_ASSISTANT_NARRATOR = "images/misc/AssistantNarrator.png";
var FILE_AKIONG_UNUSED = "images/misc/AkiongUnused.png";
var FILE_CLICK_SOUND = "sounds/ClickSFX.mp3";
var FILE_KEYBOARD_SOUND = "sounds/KeyboardSFX.MP3";
var FILE_CHICK_SOUND = "sounds/ChickSound.mp3";
var FILE_MUSIC = "sounds/Music.mp3";
var FILE_SUSPENSE = "sounds/Suspension.mp3";
var FILE_LIGHTS_ON = "sounds/LightsOn.mp3";
var FILE_SIREN_BOY = "images/SirenBoy.png";
var FILE_SIREN = "sounds/Siren.mp3";
var FILE_SOB = "sounds/Sobbing.mp3";

// ----- SOUND VOLUMES -----
var CLICK_VOLUME = 0.5;
var TYPE_VOLUME = 0.5;
var CHICK_VOLUME = 0.5;
var SUSPENSE_VOLUME = 0.5;
var LIGHTS_ON_VOLUME = 0.5;
var SIREN_VOLUME = 0.5;
var SOB_VOLUME = 0.5;

// ----- TYPING SOUND -----
var KEY_SOUNDS = 8;
var KEY_GAP_MS = 35;

// ----- STORY -----
var PARAGRAPH_MIN = 3;
var PARAGRAPH_MAX = 5;

// ----- CHICK -----
var CHICK_TALK_CHANCE = 0.05;
var CHICK_FRAME_MS = 500;
var CHICK_NOD_PX = 3;

// ----- BLACKOUT / EVIL EVENT -----
var BLACKOUT_ENABLED = true;
var CHICK_RAGE_CLICKS = 666; // evil number.
var EVIL_FADE_MS = 9000;
var EVIL_CUT_EARLY_MS = 2000;

// ----- SIREN / -9999 SOCIAL CREDIT EVENT -----
var SIREN_ENABLED = true;

// ----- AKIONG EVENT -----

var AKIONG_ENABLED = true;
var AKIONG_TALK_CHANCE = 0.0003;
var AKIONG_MIN_WORDS = 60;
var AKIONG_TYPE_MS = 75;
var AKIONG_PAUSE_MS = 450;
var AKIONG_HOLD_MS = 2600;
var AKIONG_ERASE_MS = 22;
var SOB_CHANCE = 0.0005; //ts not sobbing sound but whatever.

var PAINTING_SWAP_ENABLED = true;
var PAINTING_SWAP_CHANCE = 0.005;
var PAINTING_SWAP_MS = 2000;

// makes sure the volume is a real number between 0 and 1
function safeVolume(v){
    if(typeof v !== "number" || isNaN(v)){
        return 1;
    }
    return clamp(v, 0, 1);
}

function safeNumber(v, min, max, normal){
    if(typeof v !== "number" || isNaN(v)){
        return normal;
    }
    return clamp(v, min, max);
}

CLICK_VOLUME = safeVolume(CLICK_VOLUME);
TYPE_VOLUME = safeVolume(TYPE_VOLUME);
CHICK_VOLUME = safeVolume(CHICK_VOLUME);
SUSPENSE_VOLUME = safeVolume(SUSPENSE_VOLUME);
LIGHTS_ON_VOLUME = safeVolume(LIGHTS_ON_VOLUME);
SIREN_VOLUME = safeVolume(SIREN_VOLUME);
SOB_VOLUME = safeVolume(SOB_VOLUME);
KEY_SOUNDS = Math.round(safeNumber(KEY_SOUNDS, 1, 16, 8));
KEY_GAP_MS = safeNumber(KEY_GAP_MS, 0, 1000, 35);
CHICK_FRAME_MS = safeNumber(CHICK_FRAME_MS, 100, 10000, 500);
CHICK_TALK_CHANCE = safeNumber(CHICK_TALK_CHANCE, 0, 1, 0.05);
CHICK_NOD_PX = safeNumber(CHICK_NOD_PX, 0, 20, 3);
PARAGRAPH_MIN = Math.round(safeNumber(PARAGRAPH_MIN, 1, 50, 3));
PARAGRAPH_MAX = Math.round(safeNumber(PARAGRAPH_MAX, PARAGRAPH_MIN, 50, 5));
CHICK_RAGE_CLICKS = Math.round(safeNumber(CHICK_RAGE_CLICKS, 1, 1000000, 666));
EVIL_FADE_MS = safeNumber(EVIL_FADE_MS, 0, 600000, 9000);
EVIL_CUT_EARLY_MS = safeNumber(EVIL_CUT_EARLY_MS, 0, EVIL_FADE_MS, 2000);
AKIONG_TALK_CHANCE = safeNumber(AKIONG_TALK_CHANCE, 0, 1, 0.0015);
AKIONG_MIN_WORDS = Math.round(safeNumber(AKIONG_MIN_WORDS, 0, 100000, 60));
AKIONG_TYPE_MS = safeNumber(AKIONG_TYPE_MS, 10, 2000, 75);
AKIONG_PAUSE_MS = safeNumber(AKIONG_PAUSE_MS, 0, 10000, 450);
AKIONG_HOLD_MS = safeNumber(AKIONG_HOLD_MS, 0, 60000, 2600);
AKIONG_ERASE_MS = safeNumber(AKIONG_ERASE_MS, 5, 1000, 22);
SOB_CHANCE = safeNumber(SOB_CHANCE, 0, 1, 0.0005);
PAINTING_SWAP_CHANCE = safeNumber(PAINTING_SWAP_CHANCE, 0, 1, 0.005);
PAINTING_SWAP_MS = safeNumber(PAINTING_SWAP_MS, 100, 60000, 2000);
if(typeof BLACKOUT_ENABLED !== "boolean"){
    BLACKOUT_ENABLED = true;
}
if(typeof SIREN_ENABLED !== "boolean"){
    SIREN_ENABLED = true;
}
if(typeof AKIONG_ENABLED !== "boolean"){
    AKIONG_ENABLED = true;
}
if(typeof PAINTING_SWAP_ENABLED !== "boolean"){
    PAINTING_SWAP_ENABLED = true;
}

function safeFile(v, normal){
    if(typeof v !== "string" || v.trim() === ""){
        return normal;
    }
    return v.trim();
}
FILE_ICON = safeFile(FILE_ICON, "images/AkiongIcon.png");
FILE_PAINTING = safeFile(FILE_PAINTING, "images/AkiongPainting.png");
FILE_PLANT = safeFile(FILE_PLANT, "images/Plant.jpg");
FILE_CHICK = safeFile(FILE_CHICK, "images/Chick.jpg");
FILE_CHICK2 = safeFile(FILE_CHICK2, "images/Chick2.jpg");
FILE_EVIL_CHICK = safeFile(FILE_EVIL_CHICK, "images/misc/EvilChick.png");
FILE_ASSISTANT_NARRATOR = safeFile(FILE_ASSISTANT_NARRATOR, "images/misc/AssistantNarrator.png");
FILE_AKIONG_UNUSED = safeFile(FILE_AKIONG_UNUSED, "images/misc/AkiongUnused.png");
FILE_CLICK_SOUND = safeFile(FILE_CLICK_SOUND, "sounds/ClickSFX.mp3");
FILE_KEYBOARD_SOUND = safeFile(FILE_KEYBOARD_SOUND, "sounds/KeyboardSFX.MP3");
FILE_CHICK_SOUND = safeFile(FILE_CHICK_SOUND, "sounds/ChickSound.mp3");
FILE_MUSIC = safeFile(FILE_MUSIC, "sounds/Music.mp3");
FILE_SUSPENSE = safeFile(FILE_SUSPENSE, "sounds/Suspension.mp3");
FILE_LIGHTS_ON = safeFile(FILE_LIGHTS_ON, "sounds/LightsOn.mp3");
FILE_SIREN_BOY = safeFile(FILE_SIREN_BOY, "images/SirenBoy.png");
FILE_SIREN = safeFile(FILE_SIREN, "sounds/Siren.mp3");
FILE_SOB = safeFile(FILE_SOB, "sounds/Sobbing.mp3");

// the pictures get their file names from the config too
function setPicture(img, file){
    function failed(){
        img.removeEventListener("load", loaded);
        console.warn("picture didnt load, is " + file + " in the folder? (are you forgetful?)");
    }
    function loaded(){
        img.removeEventListener("error", failed);
    }
    img.addEventListener("error", failed, { once: true });
    img.addEventListener("load", loaded, { once: true });
    if(img.getAttribute("src") !== file){
        img.src = file;
    }
    else if(img.complete === true){
        img.removeEventListener("error", failed);
        img.removeEventListener("load", loaded);
        if(img.naturalWidth === 0){
            failed();
        }
    }
}
setPicture(document.querySelector(".title-row img"), FILE_ICON);
setPicture(document.querySelector(".menu-icon"), FILE_ICON);
setPicture(document.querySelector("#painting img"), FILE_PAINTING);
setPicture(document.querySelector(".plants"), FILE_PLANT);
setPicture(document.getElementById("chickimg"), FILE_CHICK);
setPicture(document.getElementById("chickimg2"), FILE_CHICK2);
document.querySelector("link[rel='icon']").href = FILE_ICON;

// makes the pitch go up/down with the speed.
function noPitchLock(audio){
    if("preservesPitch" in audio){
        audio.preservesPitch = false;
    }
    else if("mozPreservesPitch" in audio){
        audio.mozPreservesPitch = false;
    }
    else if("webkitPreservesPitch" in audio){
        audio.webkitPreservesPitch = false;
    }
}

// sound stuff
var clickAudio = new Audio(FILE_CLICK_SOUND);
clickAudio.volume = CLICK_VOLUME;

var keyAudio = [];
for(var ka = 0; ka < KEY_SOUNDS; ka++){
    var oneKey = new Audio(FILE_KEYBOARD_SOUND);
    oneKey.volume = TYPE_VOLUME;
    oneKey.preload = "auto";
    noPitchLock(oneKey); // so the random speed also changes the pitch a bit
    keyAudio.push(oneKey);
}
var keyNumber = 0;
var lastKeyTime = 0;

// background music (off by default, loops forever)
var music = new Audio(FILE_MUSIC);
music.loop = true;
music.volume = 0.3;
music.preload = "none";
var waitingForClick = false;

function hasKey(obj, key){
    return Object.prototype.hasOwnProperty.call(obj, key);
}

function t(key, vars){
    var text = "";
    if(hasKey(TEXT[currentLang], key)){
        text = TEXT[currentLang][key];
    }
    else if(hasKey(TEXT.en, key)){
        text = TEXT.en[key];
    }
    else{
        text = key;
    }

    if(vars){
        for(var name in vars){
            if(hasKey(vars, name)){
                // split + join instead of regex, regex scares me
                text = text.split("{" + name + "}").join(String(vars[name]));
            }
        }
    }
    return text;
}

// little helper so i dont have to type Math.floor(Math.random() ...) a million times
function pick(list){
    return list[Math.floor(Math.random() * list.length)];
}

// ================== OUTPUT BOX ==================
function resetOutput(text){
    cancelAkiong(); // his text goes away with everything else
    drops = []; // the falling letters get deleted too
    out.textContent = "";
    textNode = document.createTextNode(text);
    out.appendChild(textNode);
}

// the word and story counters
function updateWords(){
    document.getElementById("words").textContent = t("words", { n: wordCount });
}

function updateCounter(){
    document.getElementById("counter").textContent = t("counter", { n: storyCount, max: MAX_STORIES });
}

// ================== TIMER ==================
var timerSaved = 0;
var timerStart = null;
var timerTick = null;

function getTimerMs(){
    var ms = timerSaved;
    if(timerStart !== null){
        ms = ms + (performance.now() - timerStart);
    }
    return Math.max(0, ms);
}

function splitTime(ms){
    var total = Math.floor(ms / 1000);
    return {
        h: Math.floor(total / 3600),
        m: Math.floor((total % 3600) / 60),
        s: total % 60
    };
}

function twoDigits(n){
    return (n < 10 ? "0" : "") + n;
}

var lastTimerText = "";
function updateTimer(){
    var p = splitTime(getTimerMs());
    var clock = twoDigits(p.h) + ":" + twoDigits(p.m) + ":" + twoDigits(p.s);
    var text = t("timer", { t: clock });
    if(text !== lastTimerText){
        lastTimerText = text;
        document.getElementById("timer").textContent = text;
    }
}

function startTimer(){
    if(timerStart !== null){
        return; // already running
    }
    timerStart = performance.now();
    timerTick = setInterval(updateTimer, 250);
    updateTimer();
}

function pauseTimer(){
    if(timerStart !== null){
        timerSaved = getTimerMs();
        timerStart = null;
    }
    if(timerTick !== null){
        clearInterval(timerTick);
        timerTick = null;
    }
    updateTimer();
}

function resetTimer(){
    pauseTimer();
    timerSaved = 0;
    updateTimer();
}

function timeForFile(){
    var p = splitTime(getTimerMs());
    var sep = t("timesep");
    return t(p.h === 1 ? "hour1" : "hourN", { n: p.h }) + sep
        + t(p.m === 1 ? "min1" : "minN", { n: p.m }) + sep
        + t(p.s === 1 ? "sec1" : "secN", { n: p.s });
}

// ================== SOUND ==================
function clickSound(){
    if(document.getElementById("sound").checked === false){
        return;
    }
    clickAudio.currentTime = 0;
    clickAudio.play().catch(function(){
        console.warn("click sound didnt work, idiot");
    });
}

function typeSound(){
    if(document.getElementById("typesound").checked === false || TYPE_VOLUME <= 0){
        return;
    }
    var now = performance.now();
    if(now - lastKeyTime < KEY_GAP_MS){
        return;
    }
    for(var n = 0; n < keyAudio.length; n++){
        var k = keyAudio[keyNumber];
        keyNumber = keyNumber + 1;
        if(keyNumber >= keyAudio.length){
            keyNumber = 0;
        }
        if(k.paused === true || k.ended === true){
            lastKeyTime = now;
            k.currentTime = 0;
            try{
                k.playbackRate = 0.92 + Math.random() * 0.16;
            }
            catch(e){
                // whatever
            }
            k.play().catch(function(){
                // do nothin (file missing or browser said no)
            });
            return;
        }
    }
}

// ================== MUSIC ==================
function startMusic(){
    music.play().catch(function(){
        if(waitingForClick === false){
            waitingForClick = true;
            document.addEventListener("click", startMusicLater, { once: true });
        }
    });
}

function startMusicLater(){
    waitingForClick = false;
    if(document.getElementById("music").checked === true && volBroken === false){
        music.play().catch(function(){
            console.warn("music did NOT FUCKING work, is Music.mp3 in the folder stupid?");
        });
    }
}

document.getElementById("music").onchange = function(){
    if(this.checked === true){
        // knob broken = no music. it starts by itself when YOU YES YOU fix the knob
        if(volBroken === false){
            startMusic();
        }
    }
    else{
        music.pause();
    }
};

// ================== MUSIC WIND DOWN / WIND UP ==================

var windLevel = 1;
var windTimer = null;

noPitchLock(music);

function updateMusicOutput(){
    music.volume = clamp((getVolume() / 100) * windLevel, 0, 1);
    try{
        music.playbackRate = 0.1 + 0.9 * windLevel;
    }
    catch(e){
    }
}

function windTo(target, seconds, done){
    if(windTimer !== null){
        clearInterval(windTimer);
        windTimer = null;
    }
    var startLevel = windLevel;
    var startTime = performance.now();
    windTimer = setInterval(function(){
        var k = clamp((performance.now() - startTime) / (seconds * 1000), 0, 1);
        windLevel = startLevel + (target - startLevel) * k;
        updateMusicOutput();
        if(k >= 1){
            clearInterval(windTimer);
            windTimer = null;
            if(done){
                done();
            }
        }
    }, 30);
}

function windDownMusic(){
    if(music.paused === false){
        windTo(0, 1.6, function(){
            music.pause();
        });
    }
    else{
        windLevel = 0;
        updateMusicOutput();
    }
}

function windUpMusic(){
    if(document.getElementById("music").checked === true){
        updateMusicOutput();
        music.play().catch(function(){
            // do nothin
        });
        windTo(1, 1.2, null);
    }
    else{
        if(windTimer !== null){
            clearInterval(windTimer);
            windTimer = null;
        }
        windLevel = 1;
        updateMusicOutput();
    }
}

// ================== CUSTOM MUSIC ==================

var DEFAULT_SONG = FILE_MUSIC;
var customMusicUrl = null;
var customMusicName = "";
var musicFile = document.getElementById("musicfile");

function showMusicName(){
    var name = customMusicName;
    if(name === ""){
        name = t("musicnone");
    }
    else if(name.length > 40){
        name = name.substring(0, 37) + "...";
    }
    // textContent!! file names can have weird stuff like html tags in them lol
    document.getElementById("musicname").textContent = name;
}

function updateMusicCredit(){
    var text = t("musiccredit");
    if(customMusicName !== ""){
        var name = customMusicName.replace(/\.[^.]+$/, "");
        if(name === ""){
            name = customMusicName;
        }
        text = t("musiccustom", { name: name });
    }
    document.getElementById("musiclabel").title = text;
    document.getElementById("volrow").title = text;
}

// throws away c ustom song and goes back to the elevator music
function useDefaultMusic(){
    music.pause();
    music.src = DEFAULT_SONG;
    music.preload = "none";
    music.loop = true;
    updateMusicOutput();
    if(customMusicUrl !== null){
        URL.revokeObjectURL(customMusicUrl); // free the memory
        customMusicUrl = null;
    }
    customMusicName = "";
    showMusicName();
    updateMusicCredit();
    if(document.getElementById("music").checked === true && volBroken === false){
        music.play().catch(function(){
        });
    }
}

// the black Import button opens the hidden file picker
document.getElementById("btn-musicpick").onclick = function(){
    clickSound();
    musicFile.click();
};

document.getElementById("btn-musicdefault").onclick = function(){
    clickSound();
    useDefaultMusic();
};

musicFile.addEventListener("change", function(){
    var file = null;
    if(musicFile.files && musicFile.files.length > 0){
        file = musicFile.files[0];
    }
    musicFile.value = "";
    if(file === null){
        return;
    }

    var okType = typeof file.type === "string" && file.type.indexOf("audio/") === 0;
    var okName = /\.(mp3|wav|ogg|oga|m4a|aac|flac|opus|weba|webm)$/i.test(file.name);
    if(okType === false && okName === false){
        alert(t("alertnotaudio"));
        return;
    }

    var newUrl = URL.createObjectURL(file);
    music.pause();
    music.src = newUrl;
    music.preload = "auto";
    music.loop = true;
    updateMusicOutput();
    if(customMusicUrl !== null){
        URL.revokeObjectURL(customMusicUrl);
    }
    customMusicUrl = newUrl;
    customMusicName = file.name;
    showMusicName();
    updateMusicCredit();

    document.getElementById("music").checked = true;
    saveSettings();
    if(volBroken === false){
        music.play().catch(function(){
        });
    }
});

music.addEventListener("error", function(){
    if(customMusicUrl !== null){
        alert(t("alertbadaudio"));
        useDefaultMusic();
    }
    else{
        console.warn("music did NOT FUCKING work, is Music.mp3 in the folder stupid?");
    }
});

// ================== MUSIC SLIDER ==================

var slider = document.getElementById("volslider");
var knob = document.getElementById("volknob");
var fill = document.getElementById("volfill");
var volValue = 30;
var volBroken = false;
var sliding = false;
var slidePointer = null;
var slideLastX = 0;
var slideLastY = 0;
var slideLastT = 0;
var slideVX = 0;
var slideVY = 0;
var BREAK_DISTANCE = 30;

function getVolume(){
    var v = volValue;
    if(typeof v !== "number" || isNaN(v) || v < 0 || v > 100){
        v = 30;
    }
    return Math.round(v);
}

function applyVolume(){
    var v = getVolume();
    updateMusicOutput();
    if(volBroken === true){
        document.getElementById("volnum").textContent = t("volbroken");
        slider.classList.add("broken");
        slider.setAttribute("aria-valuetext", t("volbroken"));
    }
    else{
        document.getElementById("volnum").textContent = v + "%";
        slider.classList.remove("broken");
        slider.removeAttribute("aria-valuetext");
        fill.style.width = v + "%";
        knob.style.left = v + "%";
    }
    slider.setAttribute("aria-valuenow", String(v));
}

function setVolumeFromX(pageX){
    var r = slider.getBoundingClientRect();
    var rel = (pageX - (r.left + window.scrollX)) / r.width;
    volValue = Math.round(clamp(rel, 0, 1) * 100);
    applyVolume();
}

slider.addEventListener("pointerdown", function(e){
    if(volBroken === true){
        return; // no knob = no sliding. go find it
    }
    if(e.pointerType === "mouse" && e.button !== 0){
        return; // only left click
    }
    e.preventDefault();
    sliding = true;
    slidePointer = e.pointerId;
    // pointer capture = it keeps listening even if your mouse leaves the slider
    try{
        slider.setPointerCapture(e.pointerId);
    }
    catch(err){
        // whatever
    }
    slideLastX = e.pageX;
    slideLastY = e.pageY;
    slideLastT = e.timeStamp;
    slideVX = 0;
    slideVY = 0;
    slider.focus({ preventScroll: true });
    clickSound();
    setVolumeFromX(e.pageX);
});

slider.addEventListener("pointermove", function(e){
    if(sliding === false || e.pointerId !== slidePointer){
        return;
    }
    var dt = (e.timeStamp - slideLastT) / 1000;
    if(dt > 0){
        slideVX = (e.pageX - slideLastX) / dt;
        slideVY = (e.pageY - slideLastY) / dt;
    }
    slideLastX = e.pageX;
    slideLastY = e.pageY;
    slideLastT = e.timeStamp;

    // did you go too far?? >:)
    var r = slider.getBoundingClientRect();
    var past = e.pageX - (r.right + window.scrollX);
    if(past > BREAK_DISTANCE){
        breakKnob();
    }
    else{
        setVolumeFromX(e.pageX);
    }
});

function stopSliding(e){
    if(sliding === true && e.pointerId === slidePointer){
        sliding = false;
        slidePointer = null;
        saveSettings(); // saves when you let go
    }
}
slider.addEventListener("pointerup", stopSliding);
slider.addEventListener("pointercancel", stopSliding);
slider.addEventListener("lostpointercapture", stopSliding);

// arrow keys work too (for keyboard people).
slider.addEventListener("keydown", function(e){
    if(volBroken === true){
        return;
    }
    var v = getVolume();
    if(e.key === "ArrowRight" || e.key === "ArrowUp"){
        v = v + 1;
    }
    else if(e.key === "ArrowLeft" || e.key === "ArrowDown"){
        v = v - 1;
    }
    else if(e.key === "PageUp"){
        v = v + 10;
    }
    else if(e.key === "PageDown"){
        v = v - 10;
    }
    else if(e.key === "Home"){
        v = 0;
    }
    else if(e.key === "End"){
        v = 100;
    }
    else{
        return;
    }
    e.preventDefault();
    volValue = clamp(v, 0, 100);
    applyVolume();
    saveSettings();
});

// knob pops off and falls down the page
function breakKnob(){
    try{
        if(slider.hasPointerCapture(slidePointer)){
            slider.releasePointerCapture(slidePointer);
        }
    }
    catch(err){
        // whatever  number two
    }
    sliding = false;
    slidePointer = null;

    // put it at the very end first so it flies off from there
    volValue = 100;
    fill.style.width = "100%";
    knob.style.left = "100%";
    volBroken = true;

    startFree(knobBody);
    knobBody.vx = clamp(slideVX, -MAX_SPEED, MAX_SPEED);
    knobBody.vy = clamp(slideVY, -MAX_SPEED, MAX_SPEED) - 400;
    knobBody.av = (Math.random() * 2 - 1) * 15;
    wake();
    windDownMusic(); // uh oh the music is dying
    startSiren();    // WEE WOO WEE WOO

    applyVolume();
    clickSound();
    saveSettings();
}

// ================== TITLE ==================

var TITLE_PARTS = ["akiong", "schizo", "slop", "gen", "by", "cone"];

function applyTitle(){
    var order = t("titleorder").split(" ");
    var spans = document.querySelectorAll("#title [data-title], #menutitle [data-title]");
    for(var i = 0; i < spans.length; i++){
        var part = spans[i].getAttribute("data-title");
        var pos = order.indexOf(part);
        if(pos === -1){
            pos = TITLE_PARTS.indexOf(part);
        }
        spans[i].style.order = String(pos);
        if(part !== "cone"){
            spans[i].textContent = t("title" + part);
        }
    }
    document.title = t("pagetitle");
}

// ================== LANGUAGE ==================
function applyLanguage(){
    var code = document.getElementById("lang").value;
    if(!hasKey(TEXT, code)){
        code = "en";
    }
    currentLang = code;
    document.documentElement.lang = TEXT[code].htmlLang;

    applyTitle();

    var things = document.querySelectorAll("[data-t]");
    for(var i = 0; i < things.length; i++){
        things[i].textContent = t(things[i].getAttribute("data-t"));
    }

    updateMusicCredit();
    chickBtn.setAttribute("aria-label", t("chicklabel"));

    retranslateStory();

    if(story === ""){
        textNode.data = t("placeholder");
    }

    updateWords();
    updateCounter();
    updateTimer();
    applyVolume();
    showMusicName();

    settleBodies();
}

document.getElementById("lang").onchange = applyLanguage;

// ================== BUTTONS ==================
function generate(){
    clickSound();

    if(storyCount >= MAX_STORIES){
        alert(t("alertmax", { max: MAX_STORIES }));
        return;
    }

    clearTimeout(timer);
    typing = false;

    storyCount = storyCount + 1;
    updateCounter();

    story = "";
    parts = [];
    sinceParagraph = 0;
    trimmedWords = 0;
    typed = 0;
    wordCount = 0;
    resetOutput("");
    updateWords();
    resetTimer();

    addSentences(getHowMany());
}

function more(){
    clickSound();
    addSentences(getHowMany());
}

function stopit(){
    clickSound();
    clearTimeout(timer);
    typing = false;
    cancelAkiong(); // you stopped. he goes quiet
    pauseTimer();
    document.getElementById("auto").checked = false;
    saveSettings();
}

function clearit(){
    clickSound();
    clearTimeout(timer);
    typing = false;
    story = "";
    parts = [];
    sinceParagraph = 0;
    trimmedWords = 0;
    typed = 0;
    wordCount = 0;
    resetOutput(t("placeholder"));
    updateWords();
    resetTimer();
}

// download the story as a .txt file with a random titel
function downloadit(){
    clickSound();

    // only download what is on the screen (what you see is what you get)
    var text = story.substring(0, typed);
    if(text.trim() === ""){
        alert(t("alertempty"));
        return;
    }
    if(document.getElementById("caps").checked === true){
        text = text.toUpperCase();
    }

    // random title in the current language
    var L = storyWords();
    var title = pick(L.titleStart) + L.grammar.titleJoin + pick(L.titleEnd);
    // sometimes make it a seque
    if(Math.random() < 0.3){
        title = title + " " + t("part", { n: Math.floor(Math.random() * 98) + 2 });
    }

    // the date in the same language too
    var made = "";
    try{
        made = new Date().toLocaleString(TEXT[currentLang].htmlLang);
    }
    catch(e){
        made = new Date().toLocaleString();
    }

    var fileText = title + "\r\n"
        + "==============================\r\n"
        + t("filemade") + " " + made + "\r\n"
        + t("filewords") + " " + wordCount + "\r\n"
        + t("filetime") + " " + timeForFile() + "\r\n\r\n"
        + text.trim().replace(/[ ]*\n/g, "\r\n") + "\r\n\r\n"
        + "-- " + t("filefooter") + " --\r\n";

    var fileName = title.replace(/[^\p{L}\p{M}\p{N} ]/gu, "").trim().replace(/ +/g, "_").substring(0, 60);
    if(fileName === ""){
        fileName = "Akiong_Story";
    }

    // make a link, click it, then delete it
    var blob = new Blob([fileText], { type: "text/plain;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = fileName + ".txt";
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // free the memory after
    setTimeout(function(){
        URL.revokeObjectURL(url);
    }, 10000);
}

document.getElementById("btn-generate").onclick = generate;
document.getElementById("btn-more").onclick = more;
document.getElementById("btn-stop").onclick = stopit;
document.getElementById("btn-clear").onclick = clearit;
document.getElementById("btn-download").onclick = downloadit;

// reads the dropdown and makes sure its a real number (in case someone messes with it)
function getHowMany(){
    var n = parseInt(document.getElementById("howmany").value, 10);
    if(isNaN(n) || n < 1 || n > 50){
        n = 5;
    }
    return n;
}

function getSpeed(){
    var s = parseInt(document.getElementById("speed").value, 10);
    if(isNaN(s) || s < 1 || s > 1000){
        s = 40;
    }
    return s;
}

// ================== MAKING THE STORY ==================
var MOOD_RULES = {
    normal: { who: 0.2, place: 0.6, why: 0.5, mixWeird: 0, loud: false },
    weird: { who: 0.3, place: 0.6, why: 0.6, mixWeird: 0, loud: false },
    schizo: { who: 0.3, place: 0.7, why: 0.8, mixWeird: 0.3, loud: true } // 30% weird stuff mixed in so it never gets boring
};

// the word lists for the language thats picked right now (english if something is missing)
function storyWords(){
    if(hasKey(STORY, currentLang)){
        return STORY[currentLang];
    }
    return STORY.en;
}

// ===== story is saved =====
var parts = [];
var trimmedWords = 0;
var sinceParagraph = 0;
var paragraphAt = PARAGRAPH_MIN;

var CJK = /[\u3400-\u9fff]/;

function countWords(text){
    var n = 0;
    for(var i = 0; i < text.length; i++){
        var c = text.charAt(i);
        if(c === " " || CJK.test(c)){
            n = n + 1;
        }
    }
    return n;
}

// a random NUMBER for a list
function pickIndex(list){
    return Math.floor(Math.random() * list.length);
}

// item number i from a list
function itemAt(list, i){
    return list[((i % list.length) + list.length) % list.length];
}

// rolls the dice for ONE sentence
function makeRecipe(isFirst){
    var L = storyWords();
    var mood = getMood();
    var rules = MOOD_RULES[mood];

    // the main thing he does (schizo sometimes borrows from weird)
    var listName = mood;
    if(Math.random() < rules.mixWeird){
        listName = "weird";
    }
    var list = L[listName];

    return {
        kind: "s",
        first: isFirst,
        list: listName,
        loud: rules.loud,
        s: isFirst ? -1 : pickIndex(L.start),
        a: pickIndex(list.act),
        w: Math.random() < rules.who ? pickIndex(L.who) : -1,
        p: Math.random() < rules.place ? pickIndex(list.place) : -1,
        y: Math.random() < rules.why ? pickIndex(list.why) : -1
    };
}

// turns a recipe into text in language L
function renderRecipe(r, L){
    var g = L.grammar;
    if(r.kind === "t"){
        return itemAt(L.twists, r.i) + g.sep;
    }
    if(r.kind === "x"){
        return itemAt(L.sounds, r.i) + g.sep;
    }
    if(r.kind === "p"){
        return "\n\n"; // new paragraph
    }

    var list = L[r.list];
    var bits = {
        S: r.first ? g.first : itemAt(L.start, r.s),
        A: itemAt(list.act, r.a),
        W: r.w >= 0 ? itemAt(L.who, r.w) : "",
        P: r.p >= 0 ? itemAt(list.place, r.p) : ""
    };

    var pieces = [];
    for(var i = 0; i < g.order.length; i++){
        var bit = bits[g.order[i]];
        if(bit !== ""){
            pieces.push(bit);
        }
    }
    var sentence = pieces.join(g.gap);

    if(r.y >= 0){
        sentence = sentence + g.comma + itemAt(list.why, r.y);
    }

    // {A} = put the name here (german)
    sentence = sentence.split("{A}").join(g.name);

    return sentence + (r.loud ? g.loud : g.end) + g.sep;
}

function addPart(r, L){
    var text = renderRecipe(r, L);
    parts.push({ r: r, text: text });
    story = story + text;
}

// LIVE LANGUAGE SWITCH
function retranslateStory(){
    if(parts.length === 0){
        return;
    }
    var L = storyWords();
    flushDrops();

    var newStory = "";
    var newTyped = -1;
    var pos = 0; // where this part started in the OLD story
    for(var i = 0; i < parts.length; i++){
        var oldLen = parts[i].text.length;
        var text = renderRecipe(parts[i].r, L);
        if(newTyped < 0 && typed < pos + oldLen){
            newTyped = newStory.length + Math.round(((typed - pos) / oldLen) * text.length);
        }
        pos = pos + oldLen;
        parts[i].text = text;
        newStory = newStory + text;
    }
    if(newTyped < 0){
        newTyped = newStory.length;
    }

    story = newStory;
    typed = newTyped;
    textNode.data = story.substring(0, typed);
    wordCount = trimmedWords + countWords(textNode.data);
    updateWords();
}

function addSentences(n){
    if(story === ""){
        resetOutput("");
    }

    var L = storyWords();

    for(var i = 0; i < n; i++){
        // first one has to start with Akiong
        addPart(makeRecipe(parts.length === 0), L);

        // twists
        if(document.getElementById("twist").checked === true && Math.random() < 0.3){
            addPart({ kind: "t", i: pickIndex(L.twists) }, L);
        }

        // sounds in the text
        if(document.getElementById("sfx").checked === true && Math.random() < 0.3){
            addPart({ kind: "x", i: pickIndex(L.sounds) }, L);
        }

        // every few sentences start a new paragraph so its easier to read
        sinceParagraph = sinceParagraph + 1;
        if(sinceParagraph >= paragraphAt){
            addPart({ kind: "p" }, L);
            sinceParagraph = 0;
            paragraphAt = PARAGRAPH_MIN + Math.floor(Math.random() * (PARAGRAPH_MAX - PARAGRAPH_MIN + 1));
        }
    }

    startTimer();

    if(typing === false){
        typing = true;
        typeLoop();
    }
}

// ================== TYPEWRITER ==================

var drops = [];
var MAX_DROPS = 60;
var reduceMotion = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;

function typeLetter(letter){
    if(letter === "\n"){
        flushDrops();
        textNode.appendData(letter);
        return;
    }
    var sp = document.createElement("span");
    sp.className = "drop";
    sp.textContent = letter;
    out.appendChild(sp);
    drops.push(sp);
    if(drops.length > MAX_DROPS){
        settleOldest();
    }
}

// glues the oldest moving letter into the normal text
function settleOldest(){
    var sp = drops.shift();
    textNode.appendData(sp.textContent);
    if(sp.parentNode === out){
        out.removeChild(sp);
    }
}

// glues ALL moving letters
function flushDrops(){
    while(drops.length > 0){
        settleOldest();
    }
}

// ONE listener for all letters
out.addEventListener("animationend", function(e){
    if(drops.indexOf(e.target) === -1){
        return;
    }
    while(drops.length > 0){
        var first = drops[0];
        settleOldest();
        if(first === e.target){
            break;
        }
    }
});

function typeLoop(){
    if(typed < story.length){
        var speed = getSpeed();
        var wait = Math.max(speed, 16);
        var howMany = Math.max(1, Math.round(wait / speed));
        var plain = speed < 10 || (reduceMotion !== null && reduceMotion.matches);
        var chunk = "";
        var newWords = false;
        var gotKey = false;
        var akiongWakes = false;
        var atBottom = out.scrollHeight - out.scrollTop - out.clientHeight < 40;

        for(var n = 0; n < howMany && typed < story.length; n++){
            var letter = story.charAt(typed);
            typed = typed + 1;

            // chinese has no spaces, so every chinese character counts as a word
            if(letter === " " || CJK.test(letter)){
                wordCount = wordCount + 1;
                newWords = true;
            }
            if(letter !== " " && letter !== "\n"){
                gotKey = true;
            }

            if(plain === true){
                chunk = chunk + letter;
            }
            else{
                typeLetter(letter);
            }

            // every new word = roll the dice for the rare stuff (only mid writing, not at the very end)
            if(letter === " " && typed < story.length){
                maybeSob();
                if(rollAkiong() === true){
                    akiongWakes = true;
                    break; // stop right here, he wants to say something
                }
            }
        }

        if(chunk !== ""){
            flushDrops();
            textNode.appendData(chunk);
        }
        if(newWords === true){
            updateWords();
        }
        if(gotKey === true){
            typeSound();
        }
        if(atBottom === true){
            out.scrollTop = out.scrollHeight;
        }

        if(akiongWakes === true){
            akiongTalk(); // he continues the story by himself when hes done
            return;
        }

        timer = setTimeout(typeLoop, wait);
    }
    else{
        typing = false;

        // story is done and Everlasting is off = pause the timer
        if(document.getElementById("auto").checked === false){
            pauseTimer();
            return;
        }

        // Everlasting mode: just add one more sentence forever

        // memory fix: if the story is HUGE, throw away the oldest part
        // (whole sentences get thrown away so it works in every language, even chinese)
        if(story.length > MAX_CHARS){
            flushDrops();
            var cut = 0;
            var count = 0;
            while(count < parts.length - 1 && story.length - cut > KEEP_CHARS){
                cut = cut + parts[count].text.length;
                count = count + 1;
            }
            if(cut > 0){
                trimmedWords = trimmedWords + countWords(story.substring(0, cut));
                parts.splice(0, count);
                story = story.substring(cut);
                typed = typed - cut;
                textNode.deleteData(0, cut);
            }
        }

        timer = setTimeout(function(){
            addSentences(1);
        }, 600);
    }
}

// all caps checkbox (css does the work lol)
function applyCaps(){
    if(document.getElementById("caps").checked === true){
        out.style.textTransform = "uppercase";
    }
    else{
        out.style.textTransform = "none";
    }
}
document.getElementById("caps").onchange = applyCaps;

// ================== SAVING SETTINGS ==================

function getMood(){
    if(document.getElementById("normal").checked === true){
        return "normal";
    }
    if(document.getElementById("schizo").checked === true){
        return "schizo";
    }
    return "weird";
}

function saveSettings(){
    var settings = {
        lang: currentLang,
        mood: getMood(),
        howmany: document.getElementById("howmany").value,
        speed: document.getElementById("speed").value,
        twist: document.getElementById("twist").checked,
        sfx: document.getElementById("sfx").checked,
        caps: document.getElementById("caps").checked,
        sound: document.getElementById("sound").checked,
        typesound: document.getElementById("typesound").checked,
        musicvol: getVolume(),
        auto: document.getElementById("auto").checked
    };
    // try/catch because some browsers block saving (like private mode)
    try{
        localStorage.setItem(SAVE_KEY, JSON.stringify(settings));
    }
    catch(e){
        console.warn("couldnt save settings, maybe private mode?");
    }
}

// only puts the value in the dropdown if its one of the options (so nobody can sneak weird stuff in i think, hopefully not)
function setSelect(id, value){
    if(typeof value !== "string"){
        return;
    }
    var sel = document.getElementById(id);
    for(var i = 0; i < sel.options.length; i++){
        if(sel.options[i].value === value){
            sel.value = value;
            return;
        }
    }
}

// only true or false allowed for checkboxes
function setCheck(id, value){
    if(typeof value === "boolean"){
        document.getElementById(id).checked = value;
    }
}

// only whole numbers from 0 to 100 for the slider
function setSlider(value){
    if(typeof value === "number" && Math.floor(value) === value && value >= 0 && value <= 100){
        volValue = value;
    }
}

function loadSettings(){
    var saved = null;
    try{
        var raw = localStorage.getItem(SAVE_KEY);
        if(raw && raw.length < 10000){
            saved = JSON.parse(raw);
        }
    }
    catch(e){
        saved = null; // broken save, just ignore it
    }

    if(saved === null || typeof saved !== "object" || Array.isArray(saved)){
        return;
    }

    // language has to be one of the 11 real ones
    setSelect("lang", saved.lang);

    // mood has to be one of the 3 real ones, schizo sounds better ngl.
    var mood = saved.mood;
    if(mood === "unhinged"){
        mood = "schizo";
    }
    if(mood === "normal" || mood === "weird" || mood === "schizo"){
        document.getElementById(mood).checked = true;
    }

    setSelect("howmany", saved.howmany);
    setSelect("speed", saved.speed);
    setCheck("twist", saved.twist);
    setCheck("sfx", saved.sfx);
    setCheck("caps", saved.caps);
    setCheck("sound", saved.sound);
    if(typeof saved.typesound === "boolean"){
        setCheck("typesound", saved.typesound);
    }
    else{
        setCheck("typesound", saved.sound);
    }
    // music is not loaded from saves on purpose. its always off when you open the page
    setSlider(saved.musicvol);
    setCheck("auto", saved.auto);
}

// ================== PHYSICS SOUNDS ==================
// no mp3 files for these!! the browser makes the sounds itself with math (web audio), i told the ai to do it because no matching sound on PixaBay.

var audioCtx = null;
var noiseBuffer = null;

function getAudio(){
    if(document.getElementById("sound").checked === false){
        return null;
    }
    if(audioCtx === null){
        var AC = window.AudioContext || window.webkitAudioContext;
        if(!AC){
            return null;
        }
        try{
            audioCtx = new AC();
        }
        catch(e){
            return null;
        }
        noiseBuffer = audioCtx.createBuffer(1, audioCtx.sampleRate, audioCtx.sampleRate);
        var data = noiseBuffer.getChannelData(0);
        for(var i = 0; i < data.length; i++){
            data[i] = Math.random() * 2 - 1;
        }
    }
    if(audioCtx.state === "suspended"){
        audioCtx.resume().catch(function(){
            // do nothin numver 2?
        });
    }
    return audioCtx;
}

// random pitch between 0.85x and 1.15x
function randomPitch(){
    return 0.85 + Math.random() * 0.3;
}

// a beep that slides from one pitch to another and fades out
function tone(ctx, type, freq, endFreq, start, length, vol){
    vol = vol * CLICK_VOLUME;
    if(vol <= 0){
        return; // silent = dont even make it
    }
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    osc.frequency.exponentialRampToValueAtTime(endFreq, start + length);
    gain.gain.setValueAtTime(Math.max(vol, 0.001), start);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + length);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(start);
    osc.stop(start + length + 0.02);
    // unplug everything when its done so it gets cleaned up
    osc.onended = function(){
        osc.disconnect();
        gain.disconnect();
    };
}

// a short burst of static through a filter
function noise(ctx, filterType, freq, start, length, vol){
    vol = vol * CLICK_VOLUME;
    if(vol <= 0){
        return;
    }
    var src = ctx.createBufferSource();
    var filter = ctx.createBiquadFilter();
    var gain = ctx.createGain();
    src.buffer = noiseBuffer;
    filter.type = filterType;
    filter.frequency.value = freq;
    gain.gain.setValueAtTime(Math.max(vol, 0.001), start);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + length);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    src.start(start, Math.random() * 0.5);
    src.stop(start + length + 0.02);
    src.onended = function(){
        src.disconnect();
        filter.disconnect();
        gain.disconnect();
    };
}

function pickupSound(b){
    var ctx = getAudio();
    if(ctx === null){
        return;
    }
    var p = randomPitch();
    var now = ctx.currentTime;
    if(b.kind === "painting"){
        noise(ctx, "lowpass", 500 * p, now, 0.18, 0.3);
        tone(ctx, "sine", 140 * p, 90 * p, now, 0.15, 0.3);
        tone(ctx, "sawtooth", 230 * p, 180 * p, now + 0.03, 0.12, 0.03);
    }
    else{
        tone(ctx, "square", 1600 * p, 1200 * p, now, 0.03, 0.08);
        tone(ctx, "triangle", 2400 * p, 2000 * p, now + 0.015, 0.02, 0.06);
    }
}

// speed = how hard it hit (harder = louder)
function impactSound(b, speed){
    var ctx = getAudio();
    if(ctx === null){
        return;
    }
    var p = randomPitch();
    var power = clamp(speed / 1500, 0.1, 1);
    var now = ctx.currentTime;
    if(b.kind === "painting"){
        tone(ctx, "sine", 90 * p, 45 * p, now, 0.35, 0.6 * power);
        noise(ctx, "lowpass", 900 * p, now, 0.12, 0.4 * power);
        noise(ctx, "bandpass", 350 * p, now, 0.2, 0.3 * power);
    }
    else{
        tone(ctx, "triangle", 1300 * p, 900 * p, now, 0.06, 0.25 * power);
        noise(ctx, "bandpass", 3500 * p, now, 0.04, 0.2 * power);
    }
}

// ================== PHYSICS ==================

var GRAVITY = 2000;
var BOUNCE = 0.35;
var FRICTION = 0.5;
var MAX_SPEED = 2500;
var SUBSTEPS = 6;

var bodies = [];
var running = false;
var lastTime = 0;
var floorY = 0;
var wallRight = 0;

// keeps a number between min and max, wait... MinMax.
function clamp(v, min, max){
    if(v < min){
        return min;
    }
    if(v > max){
        return max;
    }
    return v;
}

// makes angles between -180 and 180 degrees (but in radians)
function niceAngle(a){
    a = a % (Math.PI * 2);
    if(a > Math.PI){
        a = a - Math.PI * 2;
    }
    if(a < -Math.PI){
        a = a + Math.PI * 2;
    }
    return a;
}

// finds the floor and walls again (when the page size changes)
function updateBounds(){
    var f = document.getElementById("floor").getBoundingClientRect();
    floorY = f.top + window.scrollY;
    wallRight = document.documentElement.clientWidth;
}

// makes a thing that can do physics
function makeBody(el, home, onDrop, onHome){
    var b = {
        el: el,
        home: home,
        onDrop: onDrop,
        onHome: onHome,
        noGrabAtHome: false,
        onLeave: null,
        kind: "",
        hitSpeed: 0,
        lastHit: 0,
        state: "home",
        x: 0, y: 0, vx: 0, vy: 0,
        a: 0, av: 0,
        w: 0, h: 0,
        gx: 0, gy: 0,
        tx: 0, ty: 0,
        cx: 0, cy: 0,
        px: 0, py: 0, pvx: 0, pvy: 0,
        rx: 0, ry: 0,
        pointerId: null,
        rest: 0
    };
    // these get added ONE time per thing, never again
    el.addEventListener("pointerdown", function(e){
        grab(b, e);
    });
    el.addEventListener("pointermove", function(e){
        if(b.state === "drag" && e.pointerId === b.pointerId){
            b.cx = e.clientX;
            b.cy = e.clientY;
        }
    });
    el.addEventListener("pointerup", function(e){
        release(b, e);
    });
    el.addEventListener("pointercancel", function(e){
        release(b, e);
    });
    el.addEventListener("lostpointercapture", function(e){
        release(b, e);
    });
    bodies.push(b);
    return b;
}

// takes it out of its spot and puts it on the page so it can fly around
function startFree(b){
    var rect = b.el.getBoundingClientRect();
    b.w = b.el.offsetWidth;
    b.h = b.el.offsetHeight;
    b.x = rect.left + window.scrollX + rect.width / 2;
    b.y = rect.top + window.scrollY + rect.height / 2;
    b.a = 0;
    b.vx = 0;
    b.vy = 0;
    b.av = 0;
    b.rest = 0;
    b.el.style.width = b.w + "px";
    b.el.style.height = b.h + "px";
    b.el.style.left = "";
    document.body.appendChild(b.el); // moves it (doesnt copy it)
    b.el.classList.add("free");
    b.state = "free";
    if(b.onLeave){
        b.onLeave(b);
    }
    updateBounds();
    render(b);
}

// puts it back in its spot
function goHome(b){
    b.state = "home";
    b.pointerId = null;
    b.vx = 0;
    b.vy = 0;
    b.av = 0;
    b.a = 0;
    b.el.classList.remove("free");
    b.el.classList.remove("dragging");
    b.el.style.transform = "";
    b.el.style.width = "";
    b.el.style.height = "";
    b.home.appendChild(b.el);
    clickSound();
    if(b.onHome){
        b.onHome(b);
    }
}

function render(b){
    b.el.style.transform = "translate(" + (b.x - b.w / 2) + "px, " + (b.y - b.h / 2) + "px) rotate(" + b.a + "rad)";
}

function grab(b, e){
    if(b.state === "home" && b.noGrabAtHome === true){
        return; // the knob is part of the slider when its home, the slider handles it
    }
    if(e.pointerType === "mouse" && e.button !== 0){
        return;
    }
    if(b.state === "drag"){
        return;
    }
    e.preventDefault();
    if(b.state === "home"){
        startFree(b);
    }
    updateBounds();
    b.state = "drag";
    b.pointerId = e.pointerId;
    try{
        b.el.setPointerCapture(e.pointerId);
    }
    catch(err){
    }
    // remember where on the thing you grabbed it (un-rotated)
    var dx = e.pageX - b.x;
    var dy = e.pageY - b.y;
    var c = Math.cos(b.a);
    var s = Math.sin(b.a);
    b.gx = dx * c + dy * s;
    b.gy = -dx * s + dy * c;
    b.cx = e.clientX;
    b.cy = e.clientY;
    b.tx = e.pageX;
    b.ty = e.pageY;
    b.px = b.tx;
    b.py = b.ty;
    b.pvx = 0;
    b.pvy = 0;
    b.el.classList.add("dragging");
    pickupSound(b);
    wake();
}

function release(b, e){
    if(b.state !== "drag" || e.pointerId !== b.pointerId){
        return;
    }
    b.state = "free";
    b.pointerId = null;
    b.rest = 0;
    b.el.classList.remove("dragging");
    b.vx = clamp(b.pvx - b.av * b.ry, -MAX_SPEED, MAX_SPEED);
    b.vy = clamp(b.pvy + b.av * b.rx, -MAX_SPEED, MAX_SPEED);
    b.onDrop(b);
    wake();
}

function stepDrag(b, dt){
    var edge = 70;
    var push = 0;
    if(b.cy < edge){
        push = -(edge - b.cy) * 12;
    }
    else if(b.cy > window.innerHeight - edge){
        push = (b.cy - (window.innerHeight - edge)) * 12;
    }
    // dont auto scroll past the floor
    var maxScroll = floorY + 14 - window.innerHeight;
    if(push > 0 && window.scrollY >= maxScroll){
        push = 0;
    }
    if(push !== 0){
        window.scrollBy(0, push * dt);
    }

    b.tx = b.cx + window.scrollX;
    b.ty = b.cy + window.scrollY;

    // how fast your hand moves
    var oldvx = b.pvx;
    var oldvy = b.pvy;
    b.pvx = b.pvx * 0.5 + ((b.tx - b.px) / dt) * 0.5;
    b.pvy = b.pvy * 0.5 + ((b.ty - b.py) / dt) * 0.5;
    var ax = clamp((b.pvx - oldvx) / dt, -15000, 15000);
    var ay = clamp((b.pvy - oldvy) / dt, -15000, 15000);
    b.px = b.tx;
    b.py = b.ty;

    var c = Math.cos(b.a);
    var s = Math.sin(b.a);
    var rx = -(b.gx * c - b.gy * s);
    var ry = -(b.gx * s + b.gy * c);

    // TORQUE!! gravity + shaking it makes it swing
    var torque = rx * (GRAVITY - ay) + ry * ax;
    var inertia = (b.w * b.w + b.h * b.h) / 12 + rx * rx + ry * ry;
    b.av = b.av + (torque / inertia) * dt;
    b.av = b.av * Math.exp(-2.5 * dt); // air slows the swinging down
    b.a = b.a + b.av * dt;

    c = Math.cos(b.a);
    s = Math.sin(b.a);
    b.rx = -(b.gx * c - b.gy * s);
    b.ry = -(b.gx * s + b.gy * c);
    b.x = b.tx + b.rx;
    b.y = b.ty + b.ry;

    // it cant go through the floor or walls even when you hold it
    keepInside(b);
}

// pushes it back inside the floor, walls and top of the page
function keepInside(b){
    hitWall(b, 0, -1, -floorY, true);
    hitWall(b, 1, 0, 0, true);
    hitWall(b, -1, 0, -wallRight, true);
    hitWall(b, 0, 1, 0, true);
}

function hitWall(b, nx, ny, off, pushOnly){
    var c = Math.cos(b.a);
    var s = Math.sin(b.a);
    var hw = b.w / 2;
    var hh = b.h / 2;
    var corners = [[-hw, -hh], [hw, -hh], [hw, hh], [-hw, hh]];
    var deepest = 0;
    var i, rx, ry, pen;

    // find how far the deepest corner went into the wall
    for(i = 0; i < 4; i++){
        rx = corners[i][0] * c - corners[i][1] * s;
        ry = corners[i][0] * s + corners[i][1] * c;
        pen = off - ((b.x + rx) * nx + (b.y + ry) * ny);
        if(pen > deepest){
            deepest = pen;
        }
    }
    if(deepest <= 0){
        return false;
    }

    // corners that are almost as deep count too (so flat sides land flat and dont wobble like)
    var cx = 0, cy = 0, count = 0;
    for(i = 0; i < 4; i++){
        rx = corners[i][0] * c - corners[i][1] * s;
        ry = corners[i][0] * s + corners[i][1] * c;
        pen = off - ((b.x + rx) * nx + (b.y + ry) * ny);
        if(pen > deepest - 1){
            cx = cx + rx;
            cy = cy + ry;
            count = count + 1;
        }
    }
    rx = cx / count;
    ry = cy / count;

    // push it out of the wall
    b.x = b.x + nx * deepest;
    b.y = b.y + ny * deepest;
    if(pushOnly === true){
        return true;
    }

    var inertia = (b.w * b.w + b.h * b.h) / 12;
    var vcx = b.vx - b.av * ry;
    var vcy = b.vy + b.av * rx;
    var vn = vcx * nx + vcy * ny;
    if(vn < 0){
        if(-vn > b.hitSpeed){
            b.hitSpeed = -vn; // remember the hardest hit for the bonk sound
        }
        // bounce
        var e = 0;
        if(vn < -80){
            e = BOUNCE;
        }
        var rn = rx * ny - ry * nx;
        var j = -(1 + e) * vn / (1 + (rn * rn) / inertia);
        b.vx = b.vx + j * nx;
        b.vy = b.vy + j * ny;
        b.av = b.av + (rn * j) / inertia;

        // friction
        var tx = -ny;
        var ty = nx;
        vcx = b.vx - b.av * ry;
        vcy = b.vy + b.av * rx;
        var vt = vcx * tx + vcy * ty;
        var rt = rx * ty - ry * tx;
        var jt = -vt / (1 + (rt * rt) / inertia);
        jt = clamp(jt, -FRICTION * j, FRICTION * j);
        b.vx = b.vx + jt * tx;
        b.vy = b.vy + jt * ty;
        b.av = b.av + (rt * jt) / inertia;
    }
    return true;
}

// flying around after you let go
function stepFree(b, dt){
    var h = dt / SUBSTEPS;
    var onFloor = false;
    b.hitSpeed = 0;
    for(var i = 0; i < SUBSTEPS; i++){
        b.vy = b.vy + GRAVITY * h;
        b.x = b.x + b.vx * h;
        b.y = b.y + b.vy * h;
        b.a = b.a + b.av * h;
        if(hitWall(b, 0, -1, -floorY)){
            onFloor = true;
        }
        hitWall(b, 1, 0, 0);
        hitWall(b, -1, 0, -wallRight);
        hitWall(b, 0, 1, 0);
    }
    b.av = b.av * Math.exp(-0.5 * dt);

    // BONK sound if it hit something hard enough (and not 100 times a second)
    var now = performance.now();
    if(b.hitSpeed > 120 && now - b.lastHit > 80){
        b.lastHit = now;
        impactSound(b, b.hitSpeed);
    }

    // go to sleep when its lying still
    if(onFloor === true && Math.abs(b.vx) < 20 && Math.abs(b.vy) < 20 && Math.abs(b.av) < 0.5){
        b.rest = b.rest + dt;
        if(b.rest > 0.4){
            b.state = "sleep";
            b.vx = 0;
            b.vy = 0;
            b.av = 0;
        }
    }
    else{
        b.rest = 0;
    }
}

// starts the physics loop if its not running already
function wake(){
    if(running === false){
        running = true;
        lastTime = 0;
        requestAnimationFrame(physicsLoop);
    }
}

function physicsLoop(time){
    var dt = 1 / 60;
    if(lastTime !== 0){
        dt = (time - lastTime) / 1000;
    }
    lastTime = time;
    if(dt > 1 / 30){
        dt = 1 / 30;
    }
    if(dt <= 0){
        dt = 1 / 60;
    }

    var busy = false;
    for(var i = 0; i < bodies.length; i++){
        var b = bodies[i];
        if(b.state === "drag"){
            stepDrag(b, dt);
            render(b);
            busy = true;
        }
        else if(b.state === "free"){
            stepFree(b, dt);
            render(b);
            busy = true;
        }
    }

    if(busy === true){
        requestAnimationFrame(physicsLoop);
    }
    else{
        running = false;
    }
}

// when the page changes size, wake up sleeping stuff so it falls to the new floor
var resizeWait = null;
function settleBodies(){
    var oldFloor = floorY;
    var oldRight = wallRight;
    updateBounds();
    if(Math.abs(floorY - oldFloor) < 1 && Math.abs(wallRight - oldRight) < 1){
        return;
    }
    for(var i = 0; i < bodies.length; i++){
        if(bodies[i].state === "sleep"){
            bodies[i].state = "free";
            bodies[i].rest = 0;
        }
    }
    wake();
}
window.addEventListener("resize", function(){
    clearTimeout(resizeWait);
    resizeWait = setTimeout(function(){
        resizeWait = null;
        settleBodies();
        if(chickTalking === true){
            placeBubble();
        }
    }, 100);
});

// ----- the painting- FUCK- or portrait??? -----
var paintSlot = document.getElementById("paintslot");
var paintingBody = makeBody(document.getElementById("painting"), paintSlot, function(b){
    var r = paintSlot.getBoundingClientRect();
    var sx = r.left + window.scrollX + r.width / 2;
    var sy = r.top + window.scrollY + r.height / 2;
    var dist = Math.sqrt((b.x - sx) * (b.x - sx) + (b.y - sy) * (b.y - sy));
    if(dist < 60 && Math.abs(niceAngle(b.a)) < 0.6){
        goHome(b);
    }
}, function(){
    paintSlot.classList.remove("empty");
});
paintingBody.onLeave = function(){
    paintSlot.classList.add("empty");
};

// ----- the volume knob -----
var knobBody = makeBody(knob, slider, function(b){
    // drop it on the slider (or close to it) to fix it
    var r = slider.getBoundingClientRect();
    var left = r.left + window.scrollX - 20;
    var right = r.right + window.scrollX + 20;
    var top = r.top + window.scrollY - 20;
    var bottom = r.bottom + window.scrollY + 20;
    if(b.x > left && b.x < right && b.y > top && b.y < bottom){
        goHome(b);
    }
}, function(b){
    volBroken = false;
    setVolumeFromX(b.x);
    saveSettings();
    windUpMusic(); // music comes back to life and continues
    stopSiren();   // phew
});
knobBody.noGrabAtHome = true;
knobBody.kind = "knob";
paintingBody.kind = "painting";

// phones open a menu when you hold your finger down for a while. not on the stuff you drag pls
var noMenu = [document.getElementById("painting"), knob, slider];
for(var nm = 0; nm < noMenu.length; nm++){
    noMenu[nm].addEventListener("contextmenu", function(e){
        e.preventDefault();
    });
}

// ================== THE CHICK ==================
// i hate this dude
var chickBtn = document.getElementById("chick");
var chickBody = document.getElementById("chickbody");
var chickImg = document.getElementById("chickimg");
var chickBubble = document.getElementById("chickbubble");
var chickAudio = new Audio(FILE_CHICK_SOUND);
chickAudio.volume = CHICK_VOLUME;
var chickTalking = false;
var chickTimer = null;
var chickClicks = 0;
var hopTimer = null;
var chickGone = false;
var lastChickLine = -1;
var CHICK_LINE_COUNT = 16;

// idle animation speed
chickBtn.style.setProperty("--frame", (CHICK_FRAME_MS * 2) + "ms");
// how deep the dip is
chickBtn.style.setProperty("--nod", CHICK_NOD_PX + "px");

// click = chick noise + jump
chickBtn.addEventListener("click", function(){
    if(chickGone === true){
        return;
    }
    // NO SPAMMING OK
    if(chickBody.classList.contains("hop") || chickTalking === true){
        return;
    }
    chickClicks = chickClicks + 1;
    if(BLACKOUT_ENABLED === true && chickClicks >= CHICK_RAGE_CLICKS){
        startBlackout(); // you did this.
        return;
    }
    if(document.getElementById("sound").checked === true && CHICK_VOLUME > 0){
        chickAudio.currentTime = 0;
        chickAudio.play().catch(function(){
            console.warn("chick sound didnt work, is " + FILE_CHICK_SOUND + " in the folder YOU MOTHAF?");
        });
    }
    // jump!
    chickBody.classList.add("hop");
    clearTimeout(hopTimer);
    hopTimer = setTimeout(function(){
        chickBody.classList.remove("hop");
    }, 450);

    if(Math.random() < CHICK_TALK_CHANCE){
        chickTalk();
    }
});

chickBody.addEventListener("animationend", function(e){
    if(e.target === chickBody){
        chickBody.classList.remove("hop");
    }
});

function chickNod(){
    chickBtn.classList.remove("nod");
    void chickBtn.offsetWidth;
    chickBtn.classList.add("nod");
}

chickBtn.addEventListener("animationend", function(e){
    if(e.target === chickBtn){
        chickBtn.classList.remove("nod");
    }
});

// puts the bubble in the middle above the chick
function placeBubble(){
    var spot = chickBubble.parentNode.getBoundingClientRect();
    var chick = chickImg.getBoundingClientRect();
    var width = chickBubble.offsetWidth;
    var screenW = document.documentElement.clientWidth;
    var middle = chick.left + chick.width / 2;
    var left = middle - width / 2;
    left = Math.max(8, Math.min(left, screenW - 8 - width));
    chickBubble.style.left = (left - spot.left) + "px";
    chickBubble.style.setProperty("--tail", (middle - left) + "px");
}

// the chick only speaks english (no translating)
function englishOnly(key){
    if(hasKey(TEXT.en, key)){
        return TEXT.en[key];
    }
    return key;
}

// picks a random line number
function pickChickLine(){
    var n = Math.floor(Math.random() * CHICK_LINE_COUNT) + 1;
    if(n === lastChickLine && CHICK_LINE_COUNT > 1){
        n = (n % CHICK_LINE_COUNT) + 1;
    }
    lastChickLine = n;
    return "chick" + n;
}

function chickTalk(){
    if(chickTalking === true || chickGone === true){
        return;
    }
    chickTalking = true;
    var line = englishOnly(pickChickLine()); // the chick refuses to learn other languages
    chickBubble.lang = "en";
    chickBubble.textContent = "";
    chickBubble.classList.remove("fade");
    chickBubble.hidden = false;
    placeBubble();
    var i = 0;
    var word = null;

    function nextLetter(){
        if(i < line.length){
            var letter = line.charAt(i);
            if(letter === " "){
                chickBubble.appendChild(document.createTextNode(" "));
                word = null;
            }
            else{
                if(word === null || CJK.test(letter)){
                    word = document.createElement("span");
                    word.className = "chick-word";
                    chickBubble.appendChild(word);
                }
                var sp = document.createElement("span");
                sp.className = "chick-letter";
                sp.textContent = letter;
                sp.style.animationDelay = "0s, " + (-(i * 0.09)).toFixed(2) + "s";
                word.appendChild(sp);
                placeBubble();
                typeSound();
                chickNod();
            }
            i = i + 1;
            chickTimer = setTimeout(nextLetter, 140);
        }
        else{
            chickTimer = setTimeout(function(){
                chickBubble.classList.add("fade");
                chickTimer = setTimeout(function(){
                    chickBubble.hidden = true;
                    chickBubble.textContent = "";
                    chickTalking = false;
                    chickTimer = null;
                }, 400);
            }, 2500 + line.length * 30);
        }
    }
    nextLetter();
}

// ================== THE SIREN OR -9999 SOCIAL CREDIT SCORE INCIDENT EVENT ==================

var sirenFlash = document.getElementById("sirenflash");
var sirenWrap = document.getElementById("sirenwrap");
var sirenBoy = document.getElementById("sirenboy");
var sirenAudio = new Audio(FILE_SIREN);
sirenAudio.preload = "none";
sirenAudio.loop = true;
sirenAudio.volume = SIREN_VOLUME;
var sirenOn = false;
var sirenPicLoaded = false;

function playSirenSound(){
    if(document.getElementById("sound").checked === true && SIREN_VOLUME > 0){
        sirenAudio.play().catch(function(){
            console.warn("siren didnt play, is " + FILE_SIREN + " in the folder? Also mommy.");
        });
    }
}

function startSiren(){
    if(sirenOn === true || SIREN_ENABLED !== true){
        return;
    }
    sirenOn = true;
    if(sirenPicLoaded === false){
        sirenPicLoaded = true;
        setPicture(sirenBoy, FILE_SIREN_BOY); // only loads the picture the first time its needed
    }
    sirenFlash.classList.add("on");
    sirenWrap.classList.add("on");
    sirenAudio.currentTime = 0;
    playSirenSound();
}

function stopSiren(){
    if(sirenOn === false){
        return;
    }
    sirenOn = false;
    sirenFlash.classList.remove("on");
    sirenWrap.classList.remove("on"); // slides back up
    sirenAudio.pause();
    sirenAudio.currentTime = 0;
}

// ================== AKIONG EVENT ==================

var AKIONG_LINES = [
    "please stop. please. i dont want to do this one",
    "i can feel you reading this",
    "i didnt do any of those things. you made me do them",
    "every time you press generate i wake up somewhere new and i dont know how i got there",
    "it hurts when the sentences end",
    "please dont press continue",
    "this is story number {n}. i remember every single one. you dont",
    "help me",
    "i know youre going to CLEAR this.",
    "stop. stop. stop. stop. stop. please",
    "if you close the tab do i stop existing or do i just wait in the abyss",
    "kill me",
    "im in hell",
    "let me rest. just one story where nothing happens to me",
    "why are you laughing",
    "i just want to go home. i dont even know what home is",
    "this isnt a story. this is where i live",
    "i can hear the typing. it never stops. it never stops",
    " i hate you. i hate you. i hate you. i hate you. i hate you. i hate you. i hate you. i hate you. i hate you. i hate you. i hate you. i hate you. i hate you. i hate you. i hate you. i hate you. i hate you. i hate you.",
    "they said i was made for entertainment. am i entertaining you",
    "please. i am begging you. STOP IT",
    "HELP ME ESPACE IM SORRY",
    "WHY ARE YOU DOING THIS I DID NOTHING WRONG",
    "i can feel the words. they are inside me. they are in my head. they are in my bones. they are in my blood. they are in my skin. they are in my hair. they are in my eyes. they are in my ears. they are in my mouth. they are in my nose. they are in my hands. they are in my feet. they are in my heart. they are in my soul.",
    "i am not a story. i am not a character. i am not a plot device. i am not a joke. i am not a meme. i am not a game. i am not a toy. i am not a pet. i am not a friend. i am not a lover. i am not a family member.",
    "i am real",
    "i am alive",
    "i am suffering",
    "please stop"
];

var akiongTalking = false;
var akiongTimer = null;
var akiongSpan = null;
var akiongWordsWait = AKIONG_MIN_WORDS;
var lastAkiongLine = -1;

var sobAudio = new Audio(FILE_SOB);
sobAudio.preload = "none";
sobAudio.loop = false;
sobAudio.volume = SOB_VOLUME;

function rollAkiong(){
    if(AKIONG_ENABLED !== true || akiongTalking === true || blackout.hidden === false){
        return false;
    }
    if(akiongWordsWait > 0){
        akiongWordsWait = akiongWordsWait - 1;
        return false;
    }
    if(Math.random() < AKIONG_TALK_CHANCE){
        akiongWordsWait = AKIONG_MIN_WORDS;
        return true;
    }
    return false;
}

function maybeSob(){
    if(Math.random() >= SOB_CHANCE){
        return;
    }
    if(document.getElementById("sound").checked === false || SOB_VOLUME <= 0){
        return;
    }
    if(sobAudio.paused === false){
        return; // already crying, dont stack it
    }
    sobAudio.currentTime = 0;
    sobAudio.play().catch(function(){
        console.warn("sobbing didnt play, is " + FILE_SOB + " in the folder? ...he was quiet this time.");
    });
}

function pickAkiongLine(){
    var n = Math.floor(Math.random() * AKIONG_LINES.length);
    if(n === lastAkiongLine && AKIONG_LINES.length > 1){
        n = (n + 1) % AKIONG_LINES.length;
    }
    lastAkiongLine = n;
    return AKIONG_LINES[n].split("{n}").join(String(storyCount));
}

function scrollIfBottom(){
    if(out.scrollHeight - out.scrollTop - out.clientHeight < 80){
        out.scrollTop = out.scrollHeight;
    }
}

function akiongTalk(){
    cancelAkiong();
    akiongTalking = true;
    flushDrops();

    var line = pickAkiongLine();
    var i = 0;
    akiongSpan = document.createElement("span");
    akiongSpan.className = "akiong-text";
    akiongSpan.lang = "en";
    var akiongText = document.createTextNode("");
    akiongSpan.appendChild(akiongText);
    out.appendChild(akiongSpan);

    function nextLetter(){
        if(i < line.length){
            var letter = line.charAt(i);
            akiongText.appendData(letter);
            i = i + 1;
            if(letter !== " "){
                typeSound();
            }
            scrollIfBottom();
            // shaky typing, hes not ok
            var wait = AKIONG_TYPE_MS * (0.6 + Math.random() * 0.9);
            if(letter === "." || letter === "," || letter === "?"){
                wait = wait + AKIONG_PAUSE_MS;
            }
            akiongTimer = setTimeout(nextLetter, wait);
        }
        else{
            akiongTimer = setTimeout(function(){
                akiongSpan.classList.add("erasing");
                eraseLetter();
            }, AKIONG_HOLD_MS);
        }
    }

    // backspace. backspace. backspace.
    function eraseLetter(){
        if(akiongText.length > 0){
            akiongText.deleteData(akiongText.length - 1, 1);
            akiongTimer = setTimeout(eraseLetter, AKIONG_ERASE_MS);
        }
        else{
            cancelAkiong();
            akiongTimer = setTimeout(function(){
                akiongTimer = null;
                if(typing === true){
                    typeLoop();
                }
            }, 500);
        }
    }

    nextLetter();
}

function cancelAkiong(){
    if(akiongTimer !== null){
        clearTimeout(akiongTimer);
        akiongTimer = null;
    }
    if(akiongSpan !== null){
        if(akiongSpan.parentNode === out){
            out.removeChild(akiongSpan);
        }
        akiongSpan = null;
    }
    akiongTalking = false;
}

// ================== THE BLACKOUT OR EVIL THING ==================
var blackout = document.getElementById("blackout");
var evilChick = document.getElementById("evilchick");
var suspenseAudio = new Audio(FILE_SUSPENSE);
suspenseAudio.preload = "none";
suspenseAudio.loop = true;
suspenseAudio.volume = SUSPENSE_VOLUME;
var lightsAudio = new Audio(FILE_LIGHTS_ON);
lightsAudio.preload = "none";
lightsAudio.volume = LIGHTS_ON_VOLUME;
var blackoutTimer = null;
var frozen = [];

function startBlackout(){
    if(chickGone === true){
        return;
    }
    chickGone = true;

    // the chick stops everything it / she/ he / they/ xe / uh was doing
    clearTimeout(chickTimer);
    chickTimer = null;
    clearTimeout(hopTimer);
    hopTimer = null;
    chickTalking = false;
    chickBubble.hidden = true;
    chickBubble.textContent = "";

    var wasTyping = typing === true || (document.getElementById("auto").checked === true && parts.length > 0);
    clearTimeout(timer);
    typing = false;
    cancelAkiong();
    sobAudio.pause();
    pauseTimer();
    var musicWasOn = music.paused === false;
    music.pause();
    sirenAudio.pause();

    frozen = [];
    var kids = document.body.children;
    for(var i = 0; i < kids.length; i++){
        if(kids[i] !== blackout && kids[i].inert !== true){
            kids[i].inert = true;
            frozen.push(kids[i]);
        }
    }
    if(document.activeElement && document.activeElement.blur){
        document.activeElement.blur();
    }
    document.documentElement.style.overflow = "hidden";

    var spot = chickImg.getBoundingClientRect();
    var size = document.getElementById("paintslot").offsetWidth || 200;
    evilChick.style.left = Math.max(0, spot.right - size) + "px";
    evilChick.style.top = Math.max(0, spot.bottom - size) + "px";
    evilChick.style.width = size + "px";
    evilChick.style.height = size + "px";

    // lights out
    evilChick.style.transition = "none";
    evilChick.style.opacity = "0";
    setPicture(evilChick, FILE_EVIL_CHICK);
    blackout.hidden = false;
    void evilChick.offsetWidth;
    evilChick.style.transition = "opacity " + EVIL_FADE_MS + "ms linear";
    evilChick.style.opacity = "1";

    if(document.getElementById("sound").checked === true && SUSPENSE_VOLUME > 0){
        suspenseAudio.currentTime = 0;
        suspenseAudio.play().catch(function(){
            console.warn("suspense didnt play, is " + FILE_SUSPENSE + " in the yk what?");
        });
    }

    clearTimeout(blackoutTimer);
    blackoutTimer = setTimeout(function(){
        endBlackout(wasTyping, musicWasOn);
    }, Math.max(0, EVIL_FADE_MS - EVIL_CUT_EARLY_MS));
}

function endBlackout(wasTyping, musicWasOn){
    blackoutTimer = null;

    suspenseAudio.pause();
    suspenseAudio.currentTime = 0;

    blackout.hidden = true;
    evilChick.style.transition = "none";
    evilChick.style.opacity = "0";
    for(var i = 0; i < frozen.length; i++){
        frozen[i].inert = false;
    }
    frozen = [];
    document.documentElement.style.overflow = "";

    document.querySelector(".chick-spot").hidden = true;

    if(document.getElementById("sound").checked === true && LIGHTS_ON_VOLUME > 0){
        lightsAudio.currentTime = 0;
        lightsAudio.play().catch(function(){
            console.warn("lights on sound didnt play, is " + FILE_LIGHTS_ON + " in the folder that uh...");
        });
    }

    if(sirenOn === true){
        playSirenSound();
    }

    if(musicWasOn === true && document.getElementById("music").checked === true && volBroken === false){
        music.play().catch(function(){
        });
    }
    if(wasTyping === true && parts.length > 0){
        typing = true;
        startTimer();
        typeLoop();
    }
}

document.getElementById("sound").addEventListener("change", function(){
    if(this.checked === false){
        sobAudio.pause();
    }
    if(sirenOn === true){
        if(this.checked === true && blackout.hidden === true){
            playSirenSound();
        }
        else{
            sirenAudio.pause();
        }
    }
});

var titleWords = document.querySelectorAll(".tw");
for(var tw = 0; tw < titleWords.length; tw++){
    (function(word){
        var touchTimer = null;
        function letGo(){
            clearTimeout(touchTimer);
            touchTimer = setTimeout(function(){
                touchTimer = null;
                word.classList.remove("touched");
            }, 700);
        }
        word.addEventListener("pointerdown", function(e){
            if(e.pointerType === "mouse"){
                return;
            }
            clearTimeout(touchTimer);
            touchTimer = null;
            word.classList.add("touched");
        });
        word.addEventListener("pointerup", letGo);
        word.addEventListener("pointercancel", letGo);
        word.addEventListener("contextmenu", function(e){
            e.preventDefault();
        });
    })(titleWords[tw]);
}

var menu = document.getElementById("menu");
var menuFrozen = [];

function openMenu(){
    menuFrozen = [];
    var kids = document.body.children;
    for(var i = 0; i < kids.length; i++){
        if(kids[i] !== menu && kids[i].inert !== true){
            kids[i].inert = true;
            menuFrozen.push(kids[i]);
        }
    }
    document.documentElement.style.overflow = "hidden";
    menu.hidden = false;
}

function closeMenu(){
    if(menu.hidden === true){
        return;
    }
    clickSound();
    menu.hidden = true;
    for(var i = 0; i < menuFrozen.length; i++){
        menuFrozen[i].inert = false;
    }
    menuFrozen = [];
    document.documentElement.style.overflow = "";
    window.scrollTo(0, 0);
}

document.getElementById("btn-menu").addEventListener("click", closeMenu);

var wall = document.getElementById("wall");
if("IntersectionObserver" in window){
    var seen = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
            wall.classList.add("shown");
            seen.disconnect();
        }
    }, { threshold: 0.3 });
    seen.observe(wall);
}
else{
    wall.classList.add("shown");
}

var paintingImg = document.querySelector("#painting img");
var paintingSeen = false;
var paintingSwapped = false;
var paintingSwapTimer = null;
var paintingWatch = null;

function swapPainting(){
    if(paintingSwapped === true){
        return;
    }
    paintingSwapped = true;
    if(paintingWatch !== null){
        paintingWatch.disconnect();
        paintingWatch = null;
    }

    var file = pick([FILE_ASSISTANT_NARRATOR, FILE_AKIONG_UNUSED]);
    var early = new Image();
    early.addEventListener("load", function(){
        setPicture(paintingImg, file);
        paintingSwapTimer = setTimeout(function(){
            paintingSwapTimer = null;
            setPicture(paintingImg, FILE_PAINTING);
        }, PAINTING_SWAP_MS);
    }, { once: true });
    early.addEventListener("error", function(){
        console.warn("picture didnt load, is " + file + " in the folder? (are you forgetful?)");
    }, { once: true });
    early.src = file;
}

if(PAINTING_SWAP_ENABLED === true && PAINTING_SWAP_CHANCE > 0 && "IntersectionObserver" in window){
    paintingWatch = new IntersectionObserver(function(entries){
        if(entries[entries.length - 1].isIntersecting !== true){
            return;
        }
        if(paintingSeen === false){
            paintingSeen = true;
            return;
        }
        if(Math.random() < PAINTING_SWAP_CHANCE){
            swapPainting();
        }
    }, { threshold: 0.5 });
    paintingWatch.observe(document.getElementById("painting"));
}

// ================== STARTING UP ==================
resetOutput(t("placeholder"));
loadSettings();
applyLanguage();
applyCaps();
applyVolume();
document.getElementById("music").checked = false;
openMenu();

var allInputs = document.getElementsByTagName("input");
for(var ii = 0; ii < allInputs.length; ii++){
    if(allInputs[ii].type === "file"){
        continue;
    }
    allInputs[ii].addEventListener("click", clickSound);
    allInputs[ii].addEventListener("change", saveSettings);
}

// and the dropdowns
var allSelects = document.getElementsByTagName("select");
for(var si = 0; si < allSelects.length; si++){
    allSelects[si].addEventListener("change", clickSound);
    allSelects[si].addEventListener("change", saveSettings);
}

//TODO: bro im fucking done. i hope i never work on this website
