const questWords = [
    "A C E S S I B I L I D A D E",
    "R E S P O N S I V I D A D E",
    "A D A P T A B I L I D A D E"
]

//função para escolher aleatoriamente a quest
const randomQuest = _ => {
    min = Math.ceil(0);
    max = Math.floor(3);
    const number = Math.floor(Math.random() * (max - min)) + min;
    return questWords[number];
}

//definindo a palavra usada na quest
let quest = randomQuest(); 
const questLetter = quest.split(' ');

//Inserindo as letras na quest
for(let item in questLetter){
    const questList = document.querySelector('[data-quest]');
    questList.innerHTML += `<li data-quest="${item}" class="quest-letter"></li>`
}

//capturando cliques no inventory
const inventory = document.querySelector('[data-inventory]');
const listAttempts = [];

inventory.addEventListener("click", function(event){
    let divClicada = event.target
    let letterSelected = divClicada.innerText

    // adicionar letra clicada na lista de tentativas
    listAttempts.push(letterSelected);
    
    // verificar se a letra existe na quest e a insere na quest
    for(let i in questLetter){
        if (questLetter[i] == letterSelected){
            divClicada.classList.add("inventory-letter--hit");
            let letter = document.querySelector(`[data-quest="${i}"]`);
            letter.textContent = letterSelected;
        } else{
            divClicada.classList.add("inventory-letter--wrong")
        }
    }
 
    //desativar botao
})