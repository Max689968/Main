function rejectApology() {
    document.getElementById("mainScreen").style.display = "none";
    document.getElementById("sadScreen").style.display = "flex";
}

function restorePage() {
    document.getElementById("mainScreen").style.display = "block";
    document.getElementById("sadScreen").style.display = "none";
}

function goToYes() {
    window.location.href = "yes.html";
}
