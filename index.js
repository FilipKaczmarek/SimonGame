const gamePattern = [];
const userClickedPattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
const buttonsNodeArray = document.querySelectorAll('.btn')
const buttonArray = Array.from(buttonsNodeArray)

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

for(let i = 0; i < buttonArray.length; i++){
    buttonArray[i].addEventListener('click', function(){

            let id = this.id;
            userClickedPattern.push(id)
        
    })
}