/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
function concatenazioneStringhe(str1, str2) {
  const primiDueCaratteri = str1.substring(0, 2);
  const ultimiTreCaratteri = str2.slice(-3);
  const stringaConcatenata = primiDueCaratteri + ultimiTreCaratteri;
  const stringaMaiuscola = stringaConcatenata.toUpperCase();
  console.log(stringaMaiuscola);
}
concatenazioneStringhe("ciao", "epicode");


/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
function generaArrayCasuale() {
  const arrayCasuale = [];
  for (let i = 0; i < 10; i++) {
      const numeroCasuale = Math.floor(Math.random() * 101);
      arrayCasuale.push(numeroCasuale);
  }
  return arrayCasuale;
}
const arrayDiValoriCasuali = generaArrayCasuale();
console.log(arrayDiValoriCasuali);


/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
function filtraValoriPari(array) {
  const valoriPari = array.filter(numero => numero % 2 === 0);
  return valoriPari;
}
const arrayPari = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const valoriPari = filtraValoriPari(arrayPari);
console.log(valoriPari);


/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sommaArray(array) {
  let somma = 0;
  array.forEach(numero => {
      somma += numero;
  });
  return somma;
}
const arraySomma = [1, 2, 3, 4, 5];
const risultatoSomma = sommaArray(arraySomma);
console.log("La somma degli elementi dell'array è:", risultatoSomma);


/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sommaArray(array) {
  const somma = array.reduce((acc, numero) => acc + numero, 0);
  return somma;
}
const arraySomma2 = [1, 2, 3, 4, 5];
const risultatoSomma2 = sommaArray(arraySomma2);
console.log("La somma degli elementi dell'array è:", risultatoSomma2);


/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
function incrementaArray(array, n) {
  const arrayIncrementato = array.map(numero => numero + n);
  return arrayIncrementato;
}
const arrayParametri = [1, 2, 3, 4, 5];
const n = 3;
const arrayIncrementato = incrementaArray(arrayParametri, n);
console.log("Array incrementato:", arrayIncrementato);


/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
function lunghezzaStringhe(array) {
  const lunghezze = array.map(stringa => stringa.length);
  return lunghezze;
}
const arrayDiStringhe = ["EPICODE", "is", "great"];
const lunghezzeStringhe = lunghezzaStringhe(arrayDiStringhe);
console.log("Lunghezze delle stringhe:", lunghezzeStringhe);


/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
function valoriDispari() {
  const arrayDispari = [];
  for (let i = 1; i <= 99; i += 2) {
      arrayDispari.push(i);
  }
  return arrayDispari;
}
const arrayDispari = valoriDispari();
console.log("Array dei valori dispari:", arrayDispari);


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
function trovaFilmPiuVecchio(movies) {
  let vecchio = movies[0];
  movies.forEach(film => {
      if (parseInt(film.Year) < parseInt(vecchio.Year)) {
          vecchio = film;
      }
  });
  return vecchio;
}
const vecchio = trovaFilmPiuVecchio(movies);
console.log("Il film più vecchio è:", vecchio.Title, "(" + vecchio.Year + ")");


/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
function numeroDiFilm(arrayDiFilm) {
  return arrayDiFilm.length;
}
const numeroDiFilmPresenti = numeroDiFilm(movies);
console.log("Il numero di film nell'array è:", numeroDiFilmPresenti);


/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
function ottieniTitoli(arrayDiFilm) {
  const titoliDeiFilm = arrayDiFilm.map(film => film.Title);
  return titoliDeiFilm;
}
const titoliDeiFilm = ottieniTitoli(movies);
console.log("Titoli dei film:", titoliDeiFilm);


/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
function filmDelMillennioCorrente(movies) {
  const annoCorrente = new Date().getFullYear();
  const filmMillennioCorrente = movies.filter(movie => parseInt(movie.Year) >= 2000 && parseInt(movie.Year) <= annoCorrente);
  return filmMillennioCorrente;
}
const filmMillennioCorrente = filmDelMillennioCorrente(movies);
console.log("Film del millennio corrente:", filmMillennioCorrente);


/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
function sommaAnniProdotti(films) {
  const sommaAnni = films.reduce((acc, film) => acc + parseInt(film.Year), 0);
  return sommaAnni;
}
const somma = sommaAnniProdotti(movies);
console.log("La somma degli anni di produzione dei film è:", somma);


/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
function trovaFilmPerImdbID(imdbID) {
  const filmTrovato = movies.find(film => film.imdbID === imdbID);
  return filmTrovato;
}
const filmCercato = trovaFilmPerImdbID('tt0167260');
console.log("Film trovato:", filmCercato);


/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
function indicePrimoFilmPerAnno(anno, arrayFilm) {
  const indice = arrayFilm.findIndex(film => film.Year === anno);
  return indice;
}
const annoDaCercare = '2012';
const indicePrimoFilm = indicePrimoFilmPerAnno(annoDaCercare, movies);
if (indicePrimoFilm !== -1) {
  console.log(`L'indice del primo film uscito nell'anno ${annoDaCercare} è: ${indicePrimoFilm}`);
} else {
  console.log(`Non ci sono film usciti nell'anno ${annoDaCercare}`);
}
