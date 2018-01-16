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

    if ("" === mfYear || mfYear != 4) {
        isError = true;
        errorMsg += "missing year or does not have 4 digits<br>"
    }

    if ("" === mfGenre) {
        isError = true;
        errorMsg += "missing genre<br>"
    }

    if (true === isError) {
        var element_errorMessage = document.getElementById("errorMessage");
        element_errorMessage.innerHTML = errorMsg;
    } else {

    }
}
