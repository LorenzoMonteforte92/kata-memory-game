//stampo in pagina una grid di boxes con un ciclo
//le box sono associate a numeri e vanno in coppie 


//creare una funzione che generi 16 coppie di numeri random


//selezionare e mettere in una variabile il contenitore
let mainContainer = document.querySelector(`#main-container`);
console.log(mainContainer);
//dichiarare fuori dal ciclo una variabile per il quadrato
let newSquare
for(let i = 1; i<=16; i++ ){
    //passare la funzione in un ciclo for per stampare il numero desiderato di box
    newSquare = createGrid(i);
    //appendere in pagina l'elemento generato
    mainContainer.append(newSquare);
};


// FUNCTIONS 
function createGrid(number) {
    let card = document.createElement('div');
    card.classList.add('box');
    card.innterHtml += `<span>${number}</span>`
    return card;
}