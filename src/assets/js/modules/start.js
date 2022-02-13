import { hitPoint } from "../modules/hit.js";
import { wrong } from "../modules/wrong.js";
import { audioEffect } from "../modules/effect.js";

export function start(button, element, list, frame, listHits) {
    const hit = [];

    for(let i in list){        
        if (list[i] == element){
            // a cada acerto adiciona o indice e a letra da quest nos arrays:
            hit.push(i);
            listHits.push(element);       
        }         
    }

    if (hit.length > 0){
        hitPoint(button, element, hit); 

        //se acertar todas as letras o jogo define a contagem como 9 para encerrar
        if(listHits.length == list.length){
            setTimeout(function(){
                audioEffect("score-hit");
            }, 450);
            return { count: 9, score: 100, win: true };
        } 
        //a cada acerto e acrescido 100 a pontuacao
        return { count: 0, score: 100, win: false } ;
    } else {
        wrong(button, frame);        
        //subtrai -50 da pontuação a cada erro
        return { count: 1, score: -50, win: false };
    }
}