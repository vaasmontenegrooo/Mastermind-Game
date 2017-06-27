window.addEventListener("load", function () {
    buttonNewGame = document.getElementById("newgame");
    buttonNewGame.addEventListener("click", initGame);
    checkBtn = document.getElementById("checkbtn");
    checkBtn.addEventListener("click", newRound);
        //zaczepy do pomaranczowych kulek
    orangeColorBtn11 = document.getElementById("orange11");
    orangeColorBtn11.addEventListener("click", function () { pickOrange(1); }, false);;
    orangeColorBtn12 = document.getElementById("orange12");
    orangeColorBtn12.addEventListener("click", function () { pickOrange(2); }, false);;
    orangeColorBtn13 = document.getElementById("orange13");
    orangeColorBtn13.addEventListener("click", function () { pickOrange(3); }, false);;
    orangeColorBtn14 = document.getElementById("orange14");
    orangeColorBtn14.addEventListener("click", function () { pickOrange(4); }, false);;

    orangeColorBtn21 = document.getElementById("orange21");
    orangeColorBtn21.addEventListener("click", function () { pickOrange(1); }, false);;
    orangeColorBtn22 = document.getElementById("orange22");
    orangeColorBtn22.addEventListener("click", function () { pickOrange(2); }, false);;
    orangeColorBtn23 = document.getElementById("orange23");
    orangeColorBtn23.addEventListener("click", function () { pickOrange(3); }, false);;
    orangeColorBtn24 = document.getElementById("orange24");
    orangeColorBtn24.addEventListener("click", function () { pickOrange(4); }, false);;

    orangeColorBtn31 = document.getElementById("orange31");
    orangeColorBtn31.addEventListener("click", function () { pickOrange(1); }, false);;
    orangeColorBtn32 = document.getElementById("orange32");
    orangeColorBtn32.addEventListener("click", function () { pickOrange(2); }, false);;
    orangeColorBtn33 = document.getElementById("orange33");
    orangeColorBtn33.addEventListener("click", function () { pickOrange(3); }, false);;
    orangeColorBtn34 = document.getElementById("orange34");
    orangeColorBtn34.addEventListener("click", function () { pickOrange(4); }, false);;

    orangeColorBtn41 = document.getElementById("orange41");
    orangeColorBtn41.addEventListener("click", function () { pickOrange(1); }, false);;
    orangeColorBtn42 = document.getElementById("orange42");
    orangeColorBtn42.addEventListener("click", function () { pickOrange(2); }, false);;
    orangeColorBtn43 = document.getElementById("orange43");
    orangeColorBtn43.addEventListener("click", function () { pickOrange(3); }, false);;
    orangeColorBtn44 = document.getElementById("orange44");
    orangeColorBtn44.addEventListener("click", function () { pickOrange(4); }, false);;

    orangeColorBtn51 = document.getElementById("orange51");
    orangeColorBtn51.addEventListener("click", function () { pickOrange(1); }, false);;
    orangeColorBtn52 = document.getElementById("orange52");
    orangeColorBtn52.addEventListener("click", function () { pickOrange(2); }, false);;
    orangeColorBtn53 = document.getElementById("orange53");
    orangeColorBtn53.addEventListener("click", function () { pickOrange(3); }, false);;
    orangeColorBtn54 = document.getElementById("orange54");
    orangeColorBtn54.addEventListener("click", function () { pickOrange(4); }, false);;

    orangeColorBtn61 = document.getElementById("orange61");
    orangeColorBtn61.addEventListener("click", function () { pickOrange(1); }, false);;
    orangeColorBtn62 = document.getElementById("orange62");
    orangeColorBtn62.addEventListener("click", function () { pickOrange(2); }, false);;
    orangeColorBtn63 = document.getElementById("orange63");
    orangeColorBtn63.addEventListener("click", function () { pickOrange(3); }, false);;
    orangeColorBtn64 = document.getElementById("orange64");
    orangeColorBtn64.addEventListener("click", function () { pickOrange(4); }, false);;

    orangeColorBtn71 = document.getElementById("orange71");
    orangeColorBtn71.addEventListener("click", function () { pickOrange(1); }, false);;
    orangeColorBtn72 = document.getElementById("orange72");
    orangeColorBtn72.addEventListener("click", function () { pickOrange(2); }, false);;
    orangeColorBtn73 = document.getElementById("orange73");
    orangeColorBtn73.addEventListener("click", function () { pickOrange(3); }, false);;
    orangeColorBtn74 = document.getElementById("orange74");
    orangeColorBtn74.addEventListener("click", function () { pickOrange(4); }, false);;

    orangeColorBtn81 = document.getElementById("orange81");
    orangeColorBtn81.addEventListener("click", function () { pickOrange(1); }, false);;
    orangeColorBtn82 = document.getElementById("orange82");
    orangeColorBtn82.addEventListener("click", function () { pickOrange(2); }, false);;
    orangeColorBtn83 = document.getElementById("orange83");
    orangeColorBtn83.addEventListener("click", function () { pickOrange(3); }, false);;
    orangeColorBtn84 = document.getElementById("orange84");
    orangeColorBtn84.addEventListener("click", function () { pickOrange(4); }, false);;
    //zaczepy do niebieskich kulek
    blueColorBtn11 = document.getElementById("blue11");
    blueColorBtn11.addEventListener("click", function () { pickBlue(1); }, false);;
    blueColorBtn12 = document.getElementById("blue12");
    blueColorBtn12.addEventListener("click", function () { pickBlue(2); }, false);;
    blueColorBtn13 = document.getElementById("blue13");
    blueColorBtn13.addEventListener("click", function () { pickBlue(3); }, false);;
    blueColorBtn14 = document.getElementById("blue14");
    blueColorBtn14.addEventListener("click", function () { pickBlue(4); }, false);;

    blueColorBtn21 = document.getElementById("blue21");
    blueColorBtn21.addEventListener("click", function () { pickBlue(1); }, false);;
    blueColorBtn22 = document.getElementById("blue22");
    blueColorBtn22.addEventListener("click", function () { pickBlue(2); }, false);;
    blueColorBtn23 = document.getElementById("blue23");
    blueColorBtn23.addEventListener("click", function () { pickBlue(3); }, false);;
    blueColorBtn24 = document.getElementById("blue24");
    blueColorBtn24.addEventListener("click", function () { pickBlue(4); }, false);;

    blueColorBtn31 = document.getElementById("blue31");
    blueColorBtn31.addEventListener("click", function () { pickBlue(1); }, false);;
    blueColorBtn32 = document.getElementById("blue32");
    blueColorBtn32.addEventListener("click", function () { pickBlue(2); }, false);;
    blueColorBtn33 = document.getElementById("blue33");
    blueColorBtn33.addEventListener("click", function () { pickBlue(3); }, false);;
    blueColorBtn34 = document.getElementById("blue34");
    blueColorBtn34.addEventListener("click", function () { pickBlue(4); }, false);;

    blueColorBtn41 = document.getElementById("blue41");
    blueColorBtn41.addEventListener("click", function () { pickBlue(1); }, false);;
    blueColorBtn42 = document.getElementById("blue42");
    blueColorBtn42.addEventListener("click", function () { pickBlue(2); }, false);;
    blueColorBtn43 = document.getElementById("blue43");
    blueColorBtn43.addEventListener("click", function () { pickBlue(3); }, false);;
    blueColorBtn44 = document.getElementById("blue44");
    blueColorBtn44.addEventListener("click", function () { pickBlue(4); }, false);;

    blueColorBtn51 = document.getElementById("blue51");
    blueColorBtn51.addEventListener("click", function () { pickBlue(1); }, false);;
    blueColorBtn52 = document.getElementById("blue52");
    blueColorBtn52.addEventListener("click", function () { pickBlue(2); }, false);;
    blueColorBtn53 = document.getElementById("blue53");
    blueColorBtn53.addEventListener("click", function () { pickBlue(3); }, false);;
    blueColorBtn54 = document.getElementById("blue54");
    blueColorBtn54.addEventListener("click", function () { pickBlue(4); }, false);;

    blueColorBtn61 = document.getElementById("blue61");
    blueColorBtn61.addEventListener("click", function () { pickBlue(1); }, false);;
    blueColorBtn62 = document.getElementById("blue62");
    blueColorBtn62.addEventListener("click", function () { pickBlue(2); }, false);;
    blueColorBtn63 = document.getElementById("blue63");
    blueColorBtn63.addEventListener("click", function () { pickBlue(3); }, false);;
    blueColorBtn64 = document.getElementById("blue64");
    blueColorBtn64.addEventListener("click", function () { pickBlue(4); }, false);;

    blueColorBtn71 = document.getElementById("blue71");
    blueColorBtn71.addEventListener("click", function () { pickBlue(1); }, false);;
    blueColorBtn72 = document.getElementById("blue72");
    blueColorBtn72.addEventListener("click", function () { pickBlue(2); }, false);;
    blueColorBtn73 = document.getElementById("blue73");
    blueColorBtn73.addEventListener("click", function () { pickBlue(3); }, false);;
    blueColorBtn74 = document.getElementById("blue74");
    blueColorBtn74.addEventListener("click", function () { pickBlue(4); }, false);;

    blueColorBtn81 = document.getElementById("blue81");
    blueColorBtn81.addEventListener("click", function () { pickBlue(1); }, false);;
    blueColorBtn82 = document.getElementById("blue82");
    blueColorBtn82.addEventListener("click", function () { pickBlue(2); }, false);;
    blueColorBtn83 = document.getElementById("blue83");
    blueColorBtn83.addEventListener("click", function () { pickBlue(3); }, false);;
    blueColorBtn84 = document.getElementById("blue84");
    blueColorBtn84.addEventListener("click", function () { pickBlue(4); }, false);;
    //zaczepy do czerwonych kulek
    redColorBtn11 = document.getElementById("red11");
    redColorBtn11.addEventListener("click", function () { pickRed(1); }, false);;
    redColorBtn12 = document.getElementById("red12");
    redColorBtn12.addEventListener("click", function () { pickRed(2); }, false);;
    redColorBtn13 = document.getElementById("red13");
    redColorBtn13.addEventListener("click", function () { pickRed(3); }, false);;
    redColorBtn14 = document.getElementById("red14");
    redColorBtn14.addEventListener("click", function () { pickRed(4); }, false);;

    redColorBtn21 = document.getElementById("red21");
    redColorBtn21.addEventListener("click", function () { pickRed(1); }, false);;
    redColorBtn22 = document.getElementById("red22");
    redColorBtn22.addEventListener("click", function () { pickRed(2); }, false);;
    redColorBtn23 = document.getElementById("red23");
    redColorBtn23.addEventListener("click", function () { pickRed(3); }, false);;
    redColorBtn24 = document.getElementById("red24");
    redColorBtn24.addEventListener("click", function () { pickRed(4); }, false);;

    redColorBtn31 = document.getElementById("red31");
    redColorBtn31.addEventListener("click", function () { pickRed(1); }, false);;
    redColorBtn32 = document.getElementById("red32");
    redColorBtn32.addEventListener("click", function () { pickRed(2); }, false);;
    redColorBtn33 = document.getElementById("red33");
    redColorBtn33.addEventListener("click", function () { pickRed(3); }, false);;
    redColorBtn34 = document.getElementById("red34");
    redColorBtn34.addEventListener("click", function () { pickRed(4); }, false);;

    redColorBtn41 = document.getElementById("red41");
    redColorBtn41.addEventListener("click", function () { pickRed(1); }, false);;
    redColorBtn42 = document.getElementById("red42");
    redColorBtn42.addEventListener("click", function () { pickRed(2); }, false);;
    redColorBtn43 = document.getElementById("red43");
    redColorBtn43.addEventListener("click", function () { pickRed(3); }, false);;
    redColorBtn44 = document.getElementById("red44");
    redColorBtn44.addEventListener("click", function () { pickRed(4); }, false);;

    redColorBtn51 = document.getElementById("red51");
    redColorBtn51.addEventListener("click", function () { pickRed(1); }, false);;
    redColorBtn52 = document.getElementById("red52");
    redColorBtn52.addEventListener("click", function () { pickRed(2); }, false);;
    redColorBtn53 = document.getElementById("red53");
    redColorBtn53.addEventListener("click", function () { pickRed(3); }, false);;
    redColorBtn54 = document.getElementById("red54");
    redColorBtn54.addEventListener("click", function () { pickRed(4); }, false);;

    redColorBtn61 = document.getElementById("red61");
    redColorBtn61.addEventListener("click", function () { pickRed(1); }, false);;
    redColorBtn62 = document.getElementById("red62");
    redColorBtn62.addEventListener("click", function () { pickRed(2); }, false);;
    redColorBtn63 = document.getElementById("red63");
    redColorBtn63.addEventListener("click", function () { pickRed(3); }, false);;
    redColorBtn64 = document.getElementById("red64");
    redColorBtn64.addEventListener("click", function () { pickRed(4); }, false);;

    redColorBtn71 = document.getElementById("red71");
    redColorBtn71.addEventListener("click", function () { pickRed(1); }, false);;
    redColorBtn72 = document.getElementById("red72");
    redColorBtn72.addEventListener("click", function () { pickRed(2); }, false);;
    redColorBtn73 = document.getElementById("red73");
    redColorBtn73.addEventListener("click", function () { pickRed(3); }, false);;
    redColorBtn74 = document.getElementById("red74");
    redColorBtn74.addEventListener("click", function () { pickRed(4); }, false);;

    redColorBtn81 = document.getElementById("red81");
    redColorBtn81.addEventListener("click", function () { pickRed(1); }, false);;
    redColorBtn82 = document.getElementById("red82");
    redColorBtn82.addEventListener("click", function () { pickRed(2); }, false);;
    redColorBtn83 = document.getElementById("red83");
    redColorBtn83.addEventListener("click", function () { pickRed(3); }, false);;
    redColorBtn84 = document.getElementById("red84");
    redColorBtn84.addEventListener("click", function () { pickRed(4); }, false);;
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

function screenSize() {
    var i;
    var el = document.getElementsByClassName("singlerow");
    for (i = 0; i < el.length; i++) {
        var element = el.item(i);
        element.style.width = window.innerWidth + 'px';
        element.style.height = window.innerHeight * 0.1 + 'px';
    }
    el = document.getElementsByClassName("singlebox");
    for (i = 0; i < el.length; i++) {
        element = el.item(i);
        element.style.width = window.innerWidth * 0.2 + 'px';
        element.style.height = window.innerHeight * 0.1 + 'px';
    }
    el = document.getElementsByClassName("singleboxscore");
    for (i = 0; i < el.length; i++) {
        element = el.item(i);
        element.style.width = window.innerWidth * 0.2 + 'px';
        element.style.height = window.innerHeight * 0.1 + 'px';
    }
    element = document.getElementById('timer');
    element.style.width = window.innerWidth * 0.5 + 'px';
    element.style.height = window.innerHeight * 0.1 + 'px';
    element = document.getElementById('checkbuttonbox');
    element.style.width = window.innerWidth * 0.5 + 'px';
    element.style.height = window.innerHeight * 0.1 + 'px';
    
    el = document.getElementsByClassName("popupmenua");
    for (i = 0; i < el.length; i++) {
        element = el.item(i);
        element.style.width = window.innerWidth * 0.2 + 'px';
        element.style.height = window.innerHeight * 0.1 + 'px';
    }
    el = document.getElementsByClassName("popupimg");
    for (i = 0; i < el.length; i++) {
        element = el.item(i);
        element.style.width = window.innerWidth * 0.2 + 'px';
        element.style.height = window.innerHeight * 0.1 + 'px';
    }
    
    el = document.getElementsByClassName("ulpossition");
    var y = sessionStorage.getItem('numbercolors');
        for (i = 0; i < el.length; i++) {
            element = el.item(i);
            element.style.top = window.innerHeight - 70 + 'px';
            switch (y) {
                case '4':
                    element.style.left = (window.innerWidth - 200) / 2 + 'px';
                    break;
                case '5':
                    element.style.left = (window.innerWidth - 250) / 2 + 'px';
                    break;
                case '6':
                    element.style.left = (window.innerWidth - 300) / 2 + 'px';
                    break;
            }
        }
}


function getTime() {
    var time, toParse;
    toParse = sessionStorage.getItem('time');
    switch (toParse) {
        case '40':
            time = 40;
            break;
        case '30':
            time = 30;
            break;
        case '20':
            time = 20;
            break;
    }
    return time;
}

function time() {
    var elClock = document.getElementById('clock');
    if (sec>9)
        elClock.textContent = '00 : ' + sec;
    else
        elClock.textContent = '00 : 0' + sec;
    sec = sec - 1;
    temporaryTime = setTimeout("time();", 1000);
    if (sec === -2) {
        newRound();
        return;
    }
}