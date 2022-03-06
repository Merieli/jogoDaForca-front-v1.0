import { audioEffect } from "../modules/effect.js";

export function hitPoint(button, element, hit){
    audioEffect("button-inventory");

    //loop para preencher todos acertos na quest
    for(let c in hit){
        let letter = document.querySelector(`[data-quest="${hit[c]}"]`);
        letter.textContent = element;
    }
    //adicionar estilo de acerto ao botao
    button.classList.add("inventory-letter--hit");
}