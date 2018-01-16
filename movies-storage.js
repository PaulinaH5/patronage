export class MoviesStorage {
    constructor(data) {
        var movies_key = "movies";
        var movies_value = localStorage.getItem(movies_key);
        if (null === movies_value
         || false === Array.isArray(movies_value)) {
            movies_value = JSON.parse(data);
            localStorage.setItem(movies_key, movies_value);
        }

        this.movies = movies_value;
    }

    get(id) {
        var returnValue = this.movies;
        if (arguments.length === 1) {
            for (var item in returnValue) {
                if (item.id === id) {
                    returnValue = item;
                    break;
                }
            }
        }

        return returnValue;
    }

    set(data, id) {
        if (arguments.length === 1) {
            this.movies.push(data)
        } else if (arguments.length === 2) {
            for (var item in this.movies) {
                if (item.id === id) {
                    item.title = data.title;
                    item.year = data.year;
                    item.genre = data.genre;
                    item.summary = data.summary;
                    item.seen = data.seen;
                }
            }
        }
    }

    remove(id) {
        for (var i =0; i < this.movies.length; i++) {
            var item = this.movies[i];
            if (item.id === id) {
                this.movies.slice(i, 1)
                break;
            }
        }
    }
}