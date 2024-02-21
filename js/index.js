// function playNow(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function keyboardButtonPressHandle(event){
    const playerPressed = event.key;
    // console.log('player pressed',playerPressed);

    const currentLetter = document.getElementById('current-letter');
    const currentAlphabet = currentLetter.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    if(playerPressed === expectedAlphabet){
        console.log('you got a point')
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore);

        // update score:
        // setp 1: get the current score
        // const currentScore = document.getElementById('current-score');
        // const currentScoreText = currentScore.innerText;
        // const score = parseInt(currentScoreText);
        // // step 2: increse the score by 1
        // const newScore = score + 1;
        // // step 3: show the update score
        // currentScore.innerText = newScore;
        removeBgColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you loose a life');

        const life = getTextElementValueById('current-life');
        const decreaseLife = life - 1;
        setTextElementValueById('current-life', decreaseLife);

        // // lose life:
        // // step 1: get the current life number
        // const currentLife = document.getElementById('current-life');
        // const currentLifeText = currentLife.innerText;
        // const life = parseInt(currentLifeText);
        // // step 2: decrese the life by 1
        // const minusLife = life - 1;
        // // step 3: display the  update life
        // currentLife.innerText = minusLife;
    }
}

document.addEventListener('keyup',keyboardButtonPressHandle)

function continueGame(){
    const alphabet = getRandomAlphabet()
    console.log('Your Random Letter is:',alphabet);

    const currentLetter = document.getElementById('current-letter');
    currentLetter.innerText = alphabet;

    addBgColorById(alphabet);
}

function playNow(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

