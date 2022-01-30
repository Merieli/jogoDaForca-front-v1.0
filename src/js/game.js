const questWords = [
    "A c e s s i b i l i d a d e",
    "R e s p o n s i v i d a d e",
    "A d a p t a b i l i d a d e"
]

//função para escolher aleatoriamente a quest
const randomQuest = _ => {
    min = Math.ceil(0);
    max = Math.floor(3);
    const number = Math.floor(Math.random() * (max - min)) + min;
    return questWords[number];
}

//palavra usada na quest
let quest = randomQuest(); 
console.log(quest);

const questLetter = quest.split(' ');
console.log(questLetter)

//Inserindo as letras na quest
for(let item in questLetter){
    const questList = document.querySelector('[data-quest]');
    questList.innerHTML += `<li data-quest="${item}" class="quest-letter"></li>`
}


