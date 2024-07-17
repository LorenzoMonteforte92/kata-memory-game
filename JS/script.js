//stampo in pagina una grid di boxes con un ciclo
//le box sono associate a numeri e vanno in coppie 
//creare una funzione che generi 16 coppie di numeri random


// FUNCTIONS 
function createGrid(number) {
    let card = document.createElement('div');
    card.classList.add('box');
    card.innterHtml += `<span>${number}</span>`
}