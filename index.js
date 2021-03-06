let gamePattern = [];
let userClickedPattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
const buttonsNodeArray = document.querySelectorAll('.btn');
const buttonArray = Array.from(buttonsNodeArray);
const title = document.querySelector('#level-title');

const GAME_STATE = {
    level: 0,
    isStarted: false
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' && GAME_STATE.isStarted == false) {
        title.innerHTML = `Level ${GAME_STATE.level}`

        nextSequence()
        GAME_STATE.isStarted = true;
    }
})

const nextSequence = function () {
    userClickedPattern = [];

    const randomNumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    addAnimation(randomChosenColour);
    playSound(randomChosenColour);
}

const playSound = function (source) {
    let audio = new Audio(`./sounds/${source}.mp3`);
    audio.play();
}

const addAnimation = function (src) {
    let button = document.querySelector(`.${src}`);
    button.classList.add('pressed');

    setTimeout(() => {
        button.classList.remove('pressed');
    }, 15 * 10);
}

const checkAnswer = function (currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success")
        title.innerHTML = `Level ${GAME_STATE.level + gamePattern.length}`

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence()
            }, 80 * 10)
        }
    } else {
        playSound("wrong")
        document.body.classList.add("game-over");

        setTimeout( () => {
            document.body.classList.remove("game-over");
        }, 20 * 10)

        title.innerHTML = `Game Over, Press "A" Key to Restart`

        startOver()
    }
}

const startOver = function(){
    GAME_STATE.isStarted = false;
    GAME_STATE.level = 0;

    gamePattern = [];
}

for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener('click', function () {

        let id = this.id;
        userClickedPattern.push(id)

        addAnimation(id);
        playSound(id);

        checkAnswer(userClickedPattern.length - 1);
    })
}
