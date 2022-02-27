import { hitPoint } from "../modules/hit.js";
import { wrong } from "../modules/wrong.js";
import { audioEffect } from "../modules/effect.js";

export function start(button, element, list, attempt, listHits) {
    const hit = [];
    // loop para percorrer todas letras da quest:
    for(let i in list){        
        if (list[i] == element){
            // a cada acerto adiciona o indice e a letra da quest nos arrays:
            hit.push(i);
            listHits.push(element);       
        }         
    }

    const quantityHits = hit.length;
    // se nessa execução houver uma quantidade de acertos maior que 0 executa a função de acerto:
    if (quantityHits > 0){
        hitPoint(button, element, hit); 

        //se acertar todas as letras o jogo define a contagem como 9 para encerrar
        if(listHits.length == list.length){
            setTimeout(function(){
                audioEffect("score-hit");
            }, 500);
            return { count: 9, score: (100 * quantityHits), win: true };
        } 
        //a cada acerto e acrescido 100 a pontuacao
        return { count: 0, score: (100 * quantityHits), win: false } ;
    } else {
        wrong(button, attempt);        
        //subtrai -50 da pontuação a cada erro
        if(attempt == 8){
            setTimeout(function(){
                audioEffect("lose");
            }, 500);    
            return { count: 1, score: -50, win: false };        
        }
        return { count: 1, score: -50, win: false };     
    }
}