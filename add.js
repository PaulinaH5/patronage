var movieStorage = null;

function setMovieStorage(value) {
    movieStorage = value;
}

function onSubmitFormClick(form) {
    var errorMsg = "Error: ";
    var isError = false;

    var mfTitle = form.elements["title"].value;
    var mfYear = form.elements["year"].value;
    var mfGenre = form.elements["genre"].value;
    var mfSummary = form.elements["summary"].value;

    if ("" === mfTitle) {
        isError = true;
        errorMsg += "missing title<br>"
    }

    if ("" === mfYear || mfYear.length != 4) {
        isError = true;
        errorMsg += "missing year or does not have 4 digits<br>"
    }

    if ("" === mfGenre) {
        isError = true;
        errorMsg += "missing genre<br>"
    }

    var moviesList = movieStorage.get();
    for (var item in moviesList) {
        var movie = moviesList[item];
            if (movie.title === mfTitle) {
                isError = true;
                errorMsg += "title is repeating<br>";
                break;
        }
    }

    if (true === isError) {
        var element_errorMessage = document.getElementById("errorMessage");
        element_errorMessage.innerHTML = errorMsg;
    } else {
        clearFormFields();
    }
}

function clearFormFields() {
    var formItems = [
        form.elements["title"],
        form.elements["year"],
        form.elements["genre"],
        form.elements["summary"]
    ];
    formItems.forEach(function (item) {
        item.value = "";
    })
}
