import { start } from "./modules/start.js";

(function (){
    const questWords = [
        "ACESSIBILIDADE",
        "RESPONSIVIDADE",
        "ADAPTABILIDADE"
    ]
    
    //função para escolher aleatoriamente a quest
    const randomQuest = _ => {
        const min = Math.ceil(0);
        const max = Math.floor(questWords.length);
        const number = Math.floor(Math.random() * (max - min)) + min;
        return questWords[number];
    }
    
    //definindo a palavra usada na quest e dividindo ela
    let quest = randomQuest(); 
    const questLetter = quest.split('');
    
    //Inserindo as letras na quest
    for(let item in questLetter){
        const questList = document.querySelector('[data-quest]');
        questList.innerHTML += `<li data-quest="${item}" class="quest-letter"></li>`
    }
    
    //capturando cliques no inventory
    const inventory = document.querySelector('[data-inventory]');

    const hits = [];
    let attempts = 1;

    inventory.addEventListener("click", function(event){      
        let keyClicked = event.target;
        let letterSelected = keyClicked.innerText;
        
        //Caso o numero de tentativas da contagem seja menor que 9 ira executar
        if(attempts < 9 && keyClicked != inventory){
            // verificar se a letra existe na quest e a insere na quest
            let error = start(keyClicked, letterSelected, questLetter, attempts, hits);
            
            return attempts += error;
        }
    })
    
})()