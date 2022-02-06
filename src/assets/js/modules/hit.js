
export function toHit(button, element, list, c) {
    let count = 0;
    for(let i in list){        
        if (list[i] != element){
            //se errar e adicionado o estilo ao botao e trocado a imagem do Stickyman
            button.classList.add("inventory-letter--wrong");
        } else{             
            //se acertar e adicionado o estilo ao botao e inserido a letra na missao
            button.classList.add("inventory-letter--hit");
            let letter = document.querySelector(`[data-quest="${i}"]`);
            letter.textContent = element;
            count ++;

            //a cada acerto e acrescido 10 a pontuacao
        }
    }
    
    return c = c + count;
}