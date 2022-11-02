/*creo una variabile per prendermi l'elemento html*/
const boardContainer = document.querySelector(".board-container")



/* creo un ciclo in cui ad ogni iterazione stampo un elemento html*/
for (let i = 1; i <= 100; i++) {
   

    if(i % 3 ===0 && i % 5 ===0 ){
        console.log("Fizz");

    }else if(i % 3 === 0){
        console.log("Buzz");


    } else if(i % 5 === 0){
        console.log("FizzBuzz");

    }else {
        console.log(i);

    }


    
}









/*mi richiamo la variabile creata sopra e  vado a stampare l'elemento html desiderato
    boardContainer.innerHTM += `<div class="board-chess ">${i}</div>`*/