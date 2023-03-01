
//creo una lista
const shoppingProducts = ['uova','latte','zucchero','farina','prosciutto','formaggio','carne','pesce','pane','acqua'];

//richiamo l'elemento dal DOM all'interno del quale inserirò gli elementi contenuti nella lista
let listElement = document.getElementById('list');

//creo una variabile contatore per porre un limite al ciclo while
let contatore = 0;

//creo un ciclo while
while (contatore < 10) {

    //creo un nuovo elemento da inserire nel DOM
    let itemList = document.createElement('li');

    //creo il contenuto da inserire nell'elemento creato
    let itemListText = document.createTextNode(shoppingProducts[contatore]);

    //inserisco il contenuto nell'elemento creato
    itemList.appendChild(itemListText);

    // console.log(contatore)
    // console.log(itemList);
    // console.log(itemList.textContent);

    //inserisco l'elemento creato (ed il suo contenuto) nel DOM
    listElement.append(itemList);

    //aumento il contatore di un unità per non creare un ciclo infinito
    contatore++
}