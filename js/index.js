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
        console.log('you have pressed correctly :', expectedAlphabet);
        removeBgColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you loose a life');
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

