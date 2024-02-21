function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId){
    const playGround = document.getElementById(elementId);
    playGround.classList.remove('hidden');
}

function addBgColorById(elementId){
    const bgColor = document.getElementById(elementId);
    bgColor.classList.add('bg-yellow-400');
    
}

function removeBgColorById(elementId){
    const bgColor = document.getElementById(elementId);
    bgColor.classList.remove('bg-yellow-400');
}


function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const getTextValue = element.innerText;
    const value = parseInt(getTextValue);
    return value;
}


function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    // console.log(index,alphabet);
    return alphabet;
}

