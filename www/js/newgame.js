window.addEventListener("load", function () {
    buttonNewGame = document.getElementById("newgame");
    buttonNewGame.addEventListener("click", initGame);
    checkBtn = document.getElementById("checkbtn");
    checkBtn.addEventListener("click", newRound);

});

function randomColor(min, max) {
    var min = parseInt(min, 10);
    var max = parseInt(max, 10);

    if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function makeRandomColors() {
    var availableColors = [1, 2, 3, 4, 5, 6];
    var randomColorsBox = [0, 0, 0, 0];
    var i, p, tmp1, tmp2;
    p = sessionStorage.getItem('numbercolors') - 1;
    for (i = 0; i < 4; i++) {
        tmp1 = randomColor(0, p);
        randomColorsBox[i] = availableColors[tmp1];
        tmp2 = availableColors[tmp1];
        availableColors[tmp1] = availableColors[p];
        p = p - 1;
    }
    random1 = randomColorsBox[0];
    random2 = randomColorsBox[1];
    random3 = randomColorsBox[2];
    random4 = randomColorsBox[3];
}