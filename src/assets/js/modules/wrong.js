import { audioEffect } from "./effect.js";

export function wrong(button, frame){
    audioEffect("wrong");
    const image = document.querySelector('[data-health]');

    //se errar é adicionado o estilo ao botao
    button.classList.add("inventory-letter--wrong"); 

    //troca da imagem do Stickyman
    frame ++;
    image.src = `assets/img/Frame${frame}.png`;
    image.alt = `Forca com o Stickman com ${(9 - frame)} de vida`;
}