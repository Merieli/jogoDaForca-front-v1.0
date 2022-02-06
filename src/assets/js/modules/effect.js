export function audioEffect(archive){
    const audio = document.querySelector('[data-audio ]');
    audio.src = `../src/assets/effects/${archive}.ogg`;
    
    audio.play();
}