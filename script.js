function onStart() {
    countAllMovies();
    countSeenMovies();
}

function countAllMovies() {
    var element_moviesCounterAll = document.getElementById("moviesCounterAll");
    element_moviesCounterAll.innerHTML = moviesData.length;
}

function countSeenMovies() {
    var counterSeenMovies = 0;
    moviesData.forEach(function(item){
        if ("T" == item.seen) {
            counterSeenMovies += 1;
        }
    });

    var element_moviesCounterSeen = document.getElementById("moviesCounterSeen");
    element_moviesCounterSeen.innerHTML = counterSeenMovies;
}