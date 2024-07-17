//stampo in pagina una grid di boxes con un ciclo
//le box sono associate a numeri e vanno in coppie 


//creare una funzione che generi 16 coppie di numeri random


//selezionare e mettere in una variabile il contenitore
let mainContainer = document.querySelector(`#main-container`);

//dichiarare fuori dal ciclo una variabile per il quadrato
let randomArray = generatePairNumbers(16, 100)
let newSquare
for(let i = 1; i<=randomArray.length; i++){
    //passare la funzione in un ciclo for per stampare il numero desiderato di box
    newSquare = createGrid(i);
    //appendere in pagina l'elemento generato
    mainContainer.append(newSquare);
};


// FUNCTIONS 

//creates a grid of boxes
function createGrid(number) {
    let card = document.createElement('div');
    card.classList.add('box');
    card.innerHTML += `<span>${number}</span>`
    return card;
}

//generates a pair of random numbers
function generatePairNumbers(numOfPairs, max){
    let pairNumbers = [];
    for(let i = 0; i < numOfPairs; i++){
        let randomNum = Math.floor(Math.random() * max);
        pairNumbers.push([randomNum, randomNum]);
    }
    
    return pairNumbers
}