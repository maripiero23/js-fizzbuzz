/*creo una variabile per prendermi l'elemento html*/
const boardContainer = document.querySelector(".board-container")



/* creo un ciclo in cui ad ogni iterazione stampo un elemento html*/
for (let i = 1; i <= 100; i++) {
   
    /*vado a stampare FizzBuzz per i numeri multipli di 3 e 5(15)*/
    if(i % 3 ===0 && i % 5 ===0 ){
        console.log("FizzBuzz");

    /*vado a stampare FizzBuzz per i numeri multipli di 3*/
    }else if(i % 3 === 0){
        console.log("Fizz");

    /*vado a stampare FizzBuzz per i numeri multipli di 5*/
    } else if(i % 5 === 0){
        console.log("Buzz");

    /*stampo tutti gli altri numeri*/
    }else {
        console.log(i);

    }


    
}









/*mi richiamo la variabile creata sopra e  vado a stampare l'elemento html desiderato
    boardContainer.innerHTM += `<div class="board-chess ">${i}</div>`*/