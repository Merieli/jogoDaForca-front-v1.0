
export function start(questLetter){
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
                //funcao se acertar
                divClicada.classList.add("inventory-letter--hit");
                let letter = document.querySelector(`[data-quest="${i}"]`);
                letter.textContent = letterSelected;
            } else{
                //funcao se errar
                divClicada.classList.add("inventory-letter--wrong")
            }
        }

        //desativar botao
    })

}