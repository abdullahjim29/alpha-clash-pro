function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId){
    const playGround = document.getElementById(elementId);
    playGround.classList.remove('hidden');
}