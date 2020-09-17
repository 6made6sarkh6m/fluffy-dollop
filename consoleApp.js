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
    privat: false,
    personalMovieLevel: function(){
        if(personalMovieDB.count<10){
            alert("bruh");
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            alert("still bruh");
        }else if(personalMovieDB.count > 30){
            alert("OK");
        }else{
            alert("error occured check your code");
        }
        
    },
    writeObject: function(){
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

    },
    showMyDB: function(){
        if(personalMovieDB.privat!=true){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        
    for(let i = 1; i<=3;i++){
       let a = prompt(`Your favourite genre number ${i}?`);//почитай про интерполяцию
       if(a==null || a===''){
            alert("Write genres pls");
            i--;

        
       }else{
        personalMovieDB.genres[i - 1]  = a;//ну здесь забыть про индексацию это пиздец
            
       }
       
    }
    personalMovieDB.genres.forEach(function(value, index){
        console.log(`Favourite genre #${index+1} is ${value}`);
    });
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat!=true){
            personalMovieDB.privat = true;
        }else{
            personalMovieDB.privat = false;
        }
    }




};




