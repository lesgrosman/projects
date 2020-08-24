"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы класический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман!");
        } else {
            console.log("Произошла ошибка!");
        }
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
    showMyDB: function(privat) {
        if (!privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for(let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i+1}`, ``);
            
            while (genre == '' || genre == null) {
                genre = prompt(`Ваш любимый жанр под номером ${i+1}`, ``);
            }
            personalMovieDB.genres[i] = genre;
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр #${i + 1} - это ${item}.`);
        });
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();


