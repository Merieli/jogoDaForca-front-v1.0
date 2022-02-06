
export function hitPoint(button, element, hit){
    //loop para preencher todos acertos na quest
    for(let c in hit){
        let letter = document.querySelector(`[data-quest="${hit[c]}"]`);
        letter.textContent = element;
    }
    //adicionar estilo de acerto ao botao
    button.classList.add("inventory-letter--hit");

    //a cada acerto e acrescido 10 a pontuacao
    
}