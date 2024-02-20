// 1 way 
// function playNow(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

// 2nd way

function continueGame(){
    const alphabet = getRandomAlphabet()
    console.log('Your Random Letter is:',alphabet);

    const currentLetter = document.getElementById('current-letter');
    currentLetter.innerText = alphabet;
}

function playNow(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

