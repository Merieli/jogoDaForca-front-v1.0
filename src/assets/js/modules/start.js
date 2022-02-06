import { hitPoint } from "../modules/hit.js";
import { wrong } from "../modules/wrong.js";
import { audioEffect } from "../modules/effect.js";

export function start(button, element, list, frame, listHits) {
    const hit = [];
    let count= 0;

    for(let i in list){        
        if (list[i] == element){
            // a cada acerto adiciona o indice da quest e a letra nos arrays:
            hit.push(i);
            listHits.push(element);       
        }         
    }

    if (hit.length > 0){
        audioEffect("button-inventory");
        hitPoint(button, element, hit); 

        //se acertar todas as letras o jogo define a contagem como 9 para encerrar
        if(listHits.length == list.length){
            return count = 9;
        } 

        return count = 0;
    } else {
        audioEffect("wrong");
        wrong(button, frame);        
        
        return count = 1;
    }
}