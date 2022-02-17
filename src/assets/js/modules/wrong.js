import { audioEffect } from "./effect.js";

export function wrong(button, frame){
    audioEffect("wrong");

    //se errar é adicionado o estilo ao botao
    button.classList.add("inventory-letter--wrong"); 

    //troca da imagem do Stickyman
    frame = frame + 1;
    document.querySelector('[data-health]').src = `assets/img/Frame${frame}.png`;
}