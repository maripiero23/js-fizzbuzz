/*creo una variabile per prendermi l'elemento html*/
const boardContainer = document.querySelector(".board-container")

/*creo le variabili*/
let textFizz = "Fizz";
let textBuzz = "Buzz";

/* creo un ciclo in cui ad ogni iterazione stampo un elemento html*/
for (let i = 1; i <= 100; i++) {
    console.log(i);

    if(i % 3 === 0){
        console.log(textFizz);

    }


    
}









/*mi richiamo la variabile creata sopra e  vado a stampare l'elemento html desiderato
    boardContainer.innerHTM += `<div class="board-chess ">${i}</div>`*/