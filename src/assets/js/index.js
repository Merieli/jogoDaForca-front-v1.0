import { start } from "./modules/start.js";

(function (){
    const questWords = [
        "A C E S S I B I L I D A D E",
        "R E S P O N S I V I D A D E",
        "A D A P T A B I L I D A D E"
    ]
    
    //função para escolher aleatoriamente a quest
    const randomQuest = _ => {
        const min = Math.ceil(0);
        const max = Math.floor(3);
        const number = Math.floor(Math.random() * (max - min)) + min;
        return questWords[number];
    }
    
    //definindo a palavra usada na quest e dividindo ela
    let quest = randomQuest(); 
    const questLetter = quest.split(' ');
    
    //Inserindo as letras na quest
    for(let item in questLetter){
        const questList = document.querySelector('[data-quest]');
        questList.innerHTML += `<li data-quest="${item}" class="quest-letter"></li>`
    }
    
    let c = 0;
    
    //Executa as funcoes 
    start(questLetter, c);
})()