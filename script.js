function onStart() {
    countAllMovies();
    countSeenMovies();
    fillMoviesList();
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

function fillMoviesList(){
    var element_moviesList = document.getElementById("moviesList");
    moviesData.forEach(function(item){
        var element_listItem = document.createElement("li");
        var element_seen = document.createElement("img");

        var id = document.createTextNode(item.id.toString());
        var title = document.createTextNode(item.title);
        var year = document.createTextNode(item.year.toString());
        var genre = document.createTextNode(item.genre);
        var summary = document.createTextNode(item.summary);
        var seen = document.createTextNode(item.seen);

        var iconName = 'false.png';
        if ("T" == item.seen) {
            iconName = 'true.png';
        }

        element_seen.src = iconName;
        element_seen.addEventListener('click', function(){
            onClickSeenImageCallback(item, element_seen);
        });
        element_seen.appendChild(seen);

        element_listItem.appendChild(id);
        element_listItem.appendChild(title);
        element_listItem.appendChild(year);
        element_listItem.appendChild(genre);
        element_listItem.appendChild(summary);
        element_listItem.appendChild(element_seen);

        element_moviesList.appendChild(element_listItem);
    });
}

function onClickSeenImageCallback(movie, element_image){
    var seen = "T";
    var image_src = 'true.png';
    if ("T" == movie.seen){
        seen = "F";
        image_src = 'false.png';
    }

    movie.seen = seen;
    element_image.src = image_src;

    countSeenMovies();
}
