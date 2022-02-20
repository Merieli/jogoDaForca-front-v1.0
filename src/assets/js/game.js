import { start } from "./modules/start.js";

(function (){
    // capturando elementos necessarios
    const inventory = document.querySelector('[data-inventory]');
    const scoreboard = document.querySelector('[data-score]');
    const questList = document.querySelector('[data-quest]');
    const newGame = document.querySelector('[data-newgame]');

    function resetGame(inventory, questList, scoreboard){
        // limpar classes Wrong e hit dos botoes do inventario
        let child = inventory.children;
        for (var i = 0; i < child.length; i++) {
            child[i].classList.remove('inventory-letter--hit');
            child[i].classList.remove('inventory-letter--wrong');
        }

        // remover todas li da quest
        while (questList.firstChild){
            questList.removeChild(questList.firstChild);
        }

        // zerar frame da forca
        document.querySelector('[data-health]').src = `assets/img/Frame1.png`;

        // zerar placar
        scoreboard.innerText = 0;
    }

    function initGame(inventory, scoreboard, questList){
        const questWords = [
            "ACESSIBILIDADE", "TESTE",
            "RESPONSIVIDADE", "FRONT",
            "ADAPTABILIDADE", "API",
            "PROGRAMACAO", "MOBILE"
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
        questList.ariaLabel = `Palavra do jogo com ${questLetter.length} letras`;
        for(let item in questLetter){
            questList.innerHTML += `<li role="region" aria-label="Letra ${item} da palavra" aria-live="polite" data-quest="${item}" class="quest-letter"></li>`
        }    
        
        const hits = [];
        const clicked = [];
        let attempts = 1;
        let score = 0;
        setTimeout(function(){
            //capturando cliques no inventory
            inventory.addEventListener("click", function(event){      
                let keyClicked = event.target;
                let letterSelected = keyClicked.innerText;

                //Verificando se o elemento "existe na lista de clicados" ja foi clicado antes
                const wasClicked = clicked.includes(keyClicked);
                
                //Caso o numero de tentativas da contagem seja menor que 9 e a letra ja nao tenha sido clicada ira executar
                if(attempts < 9 && keyClicked != inventory && wasClicked == false ){
                    //adicionado letra a lista de clicados:
                    clicked.push(keyClicked);
                    // verificar se a letra existe na quest e a insere na quest
                    let game = start(keyClicked, letterSelected, questLetter, attempts, hits);
                    //somar a pontuacao
                    score += game.score;
                    // inserir a pontuação no placar
                    scoreboard.innerText = score;
                    //somar as tentativas erradas
                    attempts += game.count;
                    
                    setTimeout(function(){
                        if(game.win){                    
                            window.alert(`PARABÉNS!! Você venceu com ${score} pontos!!`);
                        }else if(game.win == false && attempts == 9){
                            window.alert(`AH NÃOOOOOOOOO! Você perdeu!! A palavra era ${quest}`);
                        }
                    }, 700);
                }
            })
        }, 900)
    }

    initGame(inventory, scoreboard, questList);

    newGame.addEventListener("click", function(){
        resetGame(inventory, questList, scoreboard);
        initGame(inventory, scoreboard, questList);
    })
 
})()