import { setCounterOfTo } from './movies-counter.js';
import { MoviesStorage } from "./movies-storage.js";

var jsonData = `[{"id":1,"title":"The Shawshank Redemption","year":1994,"genre":"drama","summary":"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.","seen":"T"},{"id":2,"title":"The Godfather","year":1972,"genre":"crime","summary":"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.","seen":"T"},{"id":3,"title":"The Dark Knight","year":2008,"genre":"action","summary":"When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.","seen":"T"},{"id":5,"title":"12 Angry Men","year":1957,"genre":"drama","summary":"A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.","seen":"F"},{"id":8,"title":"Schindler's List","year":1993,"genre":"biography","summary":"In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.","seen":"F"},{"id":13,"title":"Pulp Fiction","year":1994,"genre":"crime","summary":"The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.","seen":"T"},{"id":21,"title":"The Good, the Bad and the Ugly","year":1966,"genre":"western","summary":"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.","seen":"F"}]`
export var moviesStorage = new MoviesStorage(jsonData);

var counterAll = {
    value : 0,
};

var counterViewed = {
    value : 0,
};

export function countAllMovies(elementId) {
    var element_moviesCounterAll = document.getElementById(elementId);
    var movies = moviesStorage.get();

    setCounterOfTo(counterAll, -counterAll.value);
    setCounterOfTo(counterAll, movies.length);
    element_moviesCounterAll.innerHTML = counterAll.value;
}

export function countSeenMovies(elementId) {
    var movies = moviesStorage.get();
    setCounterOfTo(counterViewed, -counterViewed.value);

    movies.forEach(function(item){
        if ("T" === item.seen) {
            setCounterOfTo(counterViewed, 1);
        }
    });

    var element_moviesCounterSeen = document.getElementById(elementId);
    element_moviesCounterSeen.innerHTML = counterViewed.value;
}

export function onClickSeenImageCallback(movie, element_image){
    var seen = "T";
    var image_src = 'true.png';
    if ("T" === movie.seen){
        seen = "F";
        image_src = 'false.png';
    }

    movie.seen = seen;
    element_image.src = image_src;
}

export function fillMoviesList(elementId_moviesList, elementId_moviesCounterSeen){
    var movies = moviesStorage.get();
    var element_moviesList = document.getElementById(elementId_moviesList);
    movies.forEach(function(item){
        var element_listItem = document.createElement("li");
        var element_seen = document.createElement("img");

        var iconName = 'false.png';
        if ("T" === item.seen) {
            iconName = 'true.png';
        }

        element_seen.src = iconName;
        element_seen.addEventListener('click', function(){
            onClickSeenImageCallback(item, element_seen);
            countSeenMovies(elementId_moviesCounterSeen);
        });

        var items = [
            document.createTextNode(item.id.toString()),
            document.createTextNode(item.year.toString()),
            document.createTextNode(item.genre),
            document.createTextNode(item.title),
            document.createTextNode(item.summary),
            element_seen,
        ];

        items.forEach(function (i) {
            var element_div = document.createElement("div");
            if(element_div) {
                element_div.className += element_div.className ? 'movie_element' : 'movie_element';
            }
            element_div.appendChild(i);
            element_listItem.appendChild(element_div);
        });

        element_moviesList.appendChild(element_listItem);
    });
}