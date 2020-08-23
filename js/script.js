"use strict";

let numberOfFilms;



function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", "");
        const b = prompt("На сколько вы его оцените?", "");
        personalMovieDB.movies[a] = b;
    
    
        if ( a != null && b != null && a.length < 50 && a != ''){ 
            console.log('done!');        
        } else {
            console.log('one more time');
            i--;
            
        }
    }
}
rememberMyFilms();


function detectPersonalLevel(){
    if (numberOfFilms < 10) {
        console.log("Просмотрено мало фильмов");
    } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
        console.log("Вы класический зритель");
    } else if (numberOfFilms > 30) {
        console.log("Вы киноман!");
    } else {
        console.log("Произошла ошибка!");
    }  
}
detectPersonalLevel();


function showMyDB(privat) {
    if (!privat) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i+1}`, ``);
        personalMovieDB.genres[i] = genre;
    }
}
writeYourGenres();


