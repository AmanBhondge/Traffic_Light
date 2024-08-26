
function stopRed() {
    document.getElementById("stop").style.backgroundColor = "red";
    document.getElementById("ready").style.backgroundColor = "black";
    document.getElementById("go").style.backgroundColor = "black";

    document.getElementById("circlered").style.backgroundColor = "red";
    document.getElementById("circleyellow").style.backgroundColor = "darkgrey";
    document.getElementById("circlegreen").style.backgroundColor = "darkgrey";

}

function readyYellow() {
    document.getElementById("ready").style.backgroundColor = "yellow";
    document.getElementById("go").style.backgroundColor = "black";
    document.getElementById("stop").style.backgroundColor = "black";

    document.getElementById("circleyellow").style.backgroundColor = "yellow";
    document.getElementById("circlered").style.backgroundColor = "darkgrey";
    document.getElementById("circlegreen").style.backgroundColor = "darkgrey";
}

function goGreen() {
    document.getElementById("go").style.backgroundColor = "green";
    document.getElementById("stop").style.backgroundColor = "black";
    document.getElementById("ready").style.backgroundColor = "black";

    document.getElementById("circlegreen").style.backgroundColor = "green";
    document.getElementById("circlered").style.backgroundColor = "darkgrey";
    document.getElementById("circleyellow").style.backgroundColor = "darkgrey";
}