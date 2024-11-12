/* ESERCIZIO 1
      Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
   */


const changeTitle = function () {
    const myHeading = document.querySelector("div:first-child > h1");
    let stringData = "Prima PAGINA DI WALTER ";
    myHeading.innerText =  stringData;
    return stringData;
}

changeTitle();

/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
    const myHeading = document.querySelector("div:first-child > h1");
    myHeading.setAttribute("class", "myHeading");
    return myHeading;
}

addClassToTitle();

/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/

const changePcontent = function () {
    const paragraph = document.querySelectorAll("div p");
    paragraph.forEach((parag) => {
        parag.innerHTML = 'YEAHHHHHHHHHHHHHH HHHHHSSS';
    });
}

changePcontent();

/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {
    const linkData = document.querySelectorAll("div > a");
    const linkString = "https://www.google.com";
    linkData.forEach((element) => {
        element.setAttribute("href", linkString);
        console.log(element);
    });
}

changeUrls();

/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {
    const secondList = document.getElementById("secondList");
    const list = document.createElement("li");
    list.innerText = "Elemento inserito da Walter";
    secondList.appendChild(list);
}

addToTheSecond();

/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const addParagraph = function () {
    const paragraph = document.querySelector("div:first-child");
    const newPar = document.createElement("p");
    newPar.innerText = "Questo è un altro paragrafo fatto da Walter";
    paragraph.appendChild(newPar);
}

addParagraph();

/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
    const list = document.getElementById("firstList");
    list.setAttribute("class", "displayNone");
}

hideFirstUl();

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {
    const lists = document.querySelectorAll("ul");
    lists.forEach((element) => {
        element.setAttribute("class", "green");
    });
}

paintItGreen();

/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

const makeItClickable = function () {
    const myHeading = document.querySelector("h1");
    let stringa = '';
    myHeading.addEventListener("click", () => {
        stringa = myHeading.innerHTML;
        stringa = stringa.split('').pop();
        myHeading.innerText = stringa;
        return stringa;
    });

}

makeItClickable();

/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/
  
const footer = document.querySelector("footer");
const linkFooter = document.querySelector("footer > h3 > a");

footer.addEventListener("click",() => {
    revealFooterLink();
 });

const revealFooterLink = function () { 
    alert(linkFooter.getAttribute("href"));
}



/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

const generateTable = function () {
    const tableArea = document.getElementById("tableArea");
    const arrayTable = ['immagine','nome prodotto','quantità','prezzo'];
    tableArea.innerHTML += '<table>';
    for(let i = 0; i < arrayTable.length; i++) {
        tableArea.innerHTML += `<tr>${arrayTable[i]}</tr>`;
    }
    tableArea.innerHTML += '</table>';
 }

 generateTable();

/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

const addRow = function () { }

/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () { }

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const myHeading = document.querySelector("h2");

const changeColorWithRandom = function () {
     const arrayColor = ['A','B','C','D','E','F',
                        '0','1','2','3','4','5','6','7','8','9'];
     
     let colorRand = '';
     for(let i = 1; i < 5; i++) {
         colorRand += Math.floor(Math.random() * arrayColor.length);
     }
     console.log(colorRand);
     myHeading.style.color = `#${colorRand}`;
 }

 myHeading.addEventListener("click",() => {
    changeColorWithRandom();  
 });


