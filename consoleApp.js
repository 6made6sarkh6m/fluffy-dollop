let numberOfFilms; 
function start(){
    while(numberOfFilms == "" || numberOfFilms == true || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How many movies have you watched???","");

    }
}

//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors : {},
    genres: [],
    privat: false


};
function personalMovieLevel(){
    if(personalMovieDB.count<10){
        alert("bruh");
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert("still bruh");
    }else if(personalMovieDB.count > 30){
        alert("OK");
    }else{
        alert("error occured check your code");
    }
    
}

//personalMovieLevel();

function writeObject(){
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
}

//writeObject();

function showMyDB(){
    if(personalMovieDB.privat!=true){
        console.log(personalMovieDB);
    }
}
function writeYourGenres(){
    let i = 1;
    while(i<=3){
       let a = prompt(`Your favourite genre number ${i}?`);//почитай про интерполяцию
       personalMovieDB.genres[i - 1]  = a;//ну здесь забыть про индексацию это пиздец
       i++;
    }
}
writeYourGenres();

showMyDB();




