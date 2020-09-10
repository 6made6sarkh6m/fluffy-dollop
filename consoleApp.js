const numberOfFilms = +prompt("How many movies have you watched???","");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors : {},
    genres: [],
    privat: false


};
if(personalMovieDB.count<10){
    alert("bruh");
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    alert("still bruh");
}else if(personalMovieDB.count > 30){
    alert("OK");
}else{
    alert("error occured check your code");
}
for(let i = 0; i< 2; i++){
    
    const lastWatchedFilm = prompt("Last movie you have watched?",""),
      rateLastWatchedFilm = +prompt("How would you rate it?"," ");
    if(lastWatchedFilm !=null && rateLastWatchedFilm!=null && lastWatchedFilm != '' && rateLastWatchedFilm !='' && lastWatchedFilm.length<50){
        personalMovieDB.movies[lastWatchedFilm] = rateLastWatchedFilm;
    }else{
        alert("ANSWER PLEASE");
        i--;
    }


}

console.log(personalMovieDB);

