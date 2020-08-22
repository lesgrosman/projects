"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;

do {
    const a = prompt("Один из последних просмотренных фильмов?", "");
    const b = prompt("На сколько вы его оцените?", "");
    personalMovieDB.movies[a] = b;

    i++;

    if ( a != null && b != null && a.length < 50 && a != ''){ 
        console.log('done!');        
    } else {
        console.log('one more time');
        i--;
        
    }
} while (i < 2);

if (numberOfFilms < 10) {
    console.log("Просмотрено мало фильмов");
} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
    console.log("Вы класический зритель");
} else if (numberOfFilms > 30) {
    console.log("Вы киноман!");
} else {
    console.log("Произошла ошибка!");
}

console.log(personalMovieDB);

