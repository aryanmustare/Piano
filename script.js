const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio(`tunes/a.wav`); 

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; 
    audio.play(); 

    const clickedKey = document.querySelector(`[data-key="${key}"]`); 
    clickedKey.classList.add("active"); 
    setTimeout(() => { 
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); 
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value; 
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key);
}




const jingleBellsNotes = [
    
    ['d', 'd', 'd'], ['d', 'd', 'd'], ['d', 'g', 'a'], ['s', 'd', ''],
    ['f', 'f', 'f'], ['f', 'f', 'd'], ['d', 'd', 'd'], ['s', 's', 'd'], ['g', 'f', ''],
    ['d', 'd', 'd'], ['d', 'd', 'd'], ['d', 'g', 'a'], ['s', 'd', ''],
    ['f', 'f', 'f'], ['f', 'f', 'd'], ['d', 'g', 'g'], ['f', 's', 'a']
];


const playButton = document.querySelector("#playTune");

const playJingleBells = async () => {
    playButton.disabled = true;
    
    for (let measure of jingleBellsNotes) {
        for (let note of measure) {
            if (note !== '') {
                playTune(note);
            }
            await new Promise(resolve => setTimeout(resolve, 300));  //modify this 300,250 for adjusting speed
        }
        await new Promise(resolve => setTimeout(resolve, 250)); 
    }
    
    playButton.disabled = false;
};
playButton.addEventListener("click", playJingleBells);




const happyBirthdayNotes = [
    ['a', 'a', ''], ['s', 'a', 'f'], ['d', '', ''],
    ['a', 'a', ''], ['s', 'a', 'g'], ['f', '', ''],
    ['a', 'a', 'a'], ['h', 'f', 'd'], ['s', '', ''],
    ['j', 'j', ''], ['h', 'f', 'g'], ['f', '', '']
];

const playHappyBirthday = async () => {
    birthdayButton.disabled = true;
    
    for (let measure of happyBirthdayNotes) {
        for (let note of measure) {
            if (note !== '') {
                playTune(note);
            }
            await new Promise(resolve => setTimeout(resolve, 300));//modify this 300,200 for adjusting speed
        }
        await new Promise(resolve => setTimeout(resolve, 200)); 
    }
    
    birthdayButton.disabled = false;
};

const birthdayButton = document.querySelector("#playBirthday");
birthdayButton.addEventListener("click", playHappyBirthday);





const twinkleTwinkleNotes = [
    ['a', 'a', ''], ['g', 'g', ''], ['h', 'h', 'g'], ['', '', ''],
    ['f', 'f', ''], ['d', 'd', ''], ['s', 's', 'a'], ['', '', ''],
    ['g', 'g', ''], ['f', 'f', ''], ['d', 'd', 's'], ['', '', ''],
    ['g', 'g', ''], ['f', 'f', ''], ['d', 'd', 's'], ['', '', ''],
    ['a', 'a', ''], ['g', 'g', ''], ['h', 'h', 'g'], ['', '', ''],
    ['f', 'f', ''], ['d', 'd', ''], ['s', 's', 'a'], ['', '', '']
];

const playTwinkleTwinkle = async () => {
    twinkleButton.disabled = true;
    
    for (let measure of twinkleTwinkleNotes) {
        for (let note of measure) {
            if (note !== '') {
                playTune(note);
            }
            await new Promise(resolve => setTimeout(resolve, 400)); //modify this 400,200 for adjusting speed
        }
        await new Promise(resolve => setTimeout(resolve, 200)); 
    }
    
    twinkleButton.disabled = false;
};

const twinkleButton = document.querySelector("#playTwinkle");
twinkleButton.addEventListener("click", playTwinkleTwinkle);

const notesDisplay = document.querySelector("#notesDisplay");

const showJingleNotes = () => {
    notesDisplay.innerHTML = `
        Jingle Bells Notes:<br>
        E E E | E E E | E G C D E (d d d | d d d | d g a s d)<br>
        F F F F F | E E E E | D D E G F (f f f f f | d d d d | s s d g f)<br>
        E E E | E E E | E G C D E (d d d | d d d | d g a s d)<br>
        F F F F F | E E G G | F D C (f f f f f | d d g g | f s a)
    `;
};

const showBirthdayNotes = () => {
    notesDisplay.innerHTML = `
        Happy Birthday Notes:<br>
        C C D C F E (a a s a f d)<br>
        C C D C G F (a a s a g f)<br>
        C C C A F E D (a a a h f d s)<br>
        B B A F G F (j j h f g f)
    `;
};

const showTwinkleNotes = () => {
    notesDisplay.innerHTML = `
        Twinkle Twinkle Notes:<br>
        C C G G A A G (a a g g h h g)<br>
        F F E E D D C (f f d d s s a)<br>
        G G F F E E D (g g f f d d s)<br>
        G G F F E E D (g g f f d d s)<br>
        C C G G A A G (a a g g h h g)<br>
        F F E E D D C (f f d d s s a)
    `;
};

document.querySelector("#showJingle").addEventListener("click", showJingleNotes);
document.querySelector("#showBirthday").addEventListener("click", showBirthdayNotes);
document.querySelector("#showTwinkle").addEventListener("click", showTwinkleNotes);


volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);