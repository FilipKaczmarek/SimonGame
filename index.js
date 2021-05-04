const gamePattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];


const nextSequence = function() {
    const randomNumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    let button = document.querySelector(`.${randomChosenColour}`);
    button.classList.add('pressed');

    setTimeout(() => {
        button.classList.remove('pressed');
    }, 20 * 10);
    
    // Create sound
    playSound(randomChosenColour);
}

const playSound = function(source){
    let audio = new Audio(`./sounds/${source}.mp3`);
    audio.play();
}

nextSequence()
nextSequence()
nextSequence()
nextSequence()
nextSequence()