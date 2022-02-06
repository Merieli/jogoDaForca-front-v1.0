import { toHit } from "../modules/hit.js";

export function start(questLetter, c){
    //capturando cliques no inventory
    const inventory = document.querySelector('[data-inventory]');
    const listAttempts = [];
    
    inventory.addEventListener("click", function(event){
        event.preventDefault();

        let keyClicked = event.target;
        let letterSelected = keyClicked.innerText;

        // adicionar letra clicada na lista de tentativas
        listAttempts.push(letterSelected);
        
        // verificar se a letra existe na quest e a insere na quest
        //toHit(keyClicked, letterSelected, questLetter, c);                
        
        //retorna a soma de count
        toHit(keyClicked, letterSelected, questLetter, c);                
        
        //desativar botao
    })
}