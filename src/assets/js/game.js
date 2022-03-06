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

    questList.innerHTML = `<li class="text-game" tab-index="0">
        Clique acima em Novo Jogo <svg aria-hidden="true" class="menu-button-Svg" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" viewBox="0 0 20 20"><g><rect fill="none" height="20" width="20"/></g><g><g><path d="M15.82,13.55l-0.62-5.76C15.08,6.77,14.23,6,13.21,6H6.79C5.77,6,4.92,6.77,4.81,7.78l-0.62,5.76 C4.09,14.32,4.69,15,5.46,15c0.34,0,0.67-0.14,0.91-0.38L8,13h4l1.62,1.62c0.24,0.24,0.57,0.38,0.91,0.38 C15.31,15,15.91,14.32,15.82,13.55z M9.25,9.75H8V11H7.5V9.75H6.25v-0.5H7.5V8H8v1.25h1.25V9.75z M11.5,9C11.22,9,11,8.78,11,8.5 C11,8.22,11.22,8,11.5,8S12,8.22,12,8.5C12,8.78,11.78,9,11.5,9z M12.5,11c-0.28,0-0.5-0.22-0.5-0.5c0-0.28,0.22-0.5,0.5-0.5 s0.5,0.22,0.5,0.5C13,10.78,12.78,11,12.5,11z"/></g></g></svg>
    <li>`

    newGame.addEventListener("click", function(){
        resetGame(inventory, questList, scoreboard);
        initGame(inventory, scoreboard, questList);
    })
 
})()