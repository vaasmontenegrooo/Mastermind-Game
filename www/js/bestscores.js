﻿window.addEventListener("load", function () {
    normalbtn1 = document.getElementById("normalbtn1");
    normalbtn1.addEventListener("click", levelNormal);
    normalbtn2 = document.getElementById("normalbtn2");
    normalbtn2.addEventListener("click", levelNormal);
    normalbtn3 = document.getElementById("normalbtn3");
    normalbtn3.addEventListener("click", levelNormal);
    easybtn1 = document.getElementById("easybtn1");
    easybtn1.addEventListener("click", levelEasy);
    easybtn2 = document.getElementById("easybtn2");
    easybtn2.addEventListener("click", levelEasy);
    hardbtn1 = document.getElementById("hardbtn1");
    hardbtn1.addEventListener("click", levelHard);
    hardbtn2 = document.getElementById("hardbtn2");
    hardbtn2.addEventListener("click", levelHard);
    //playerNameBtn = document.getElementById("playernamebtn");
    //playerNameBtn.addEventListener("click", submit);
});


function levelNormal() {
    var normalNickListTemp = ['BRAK', 'BRAK', 'BRAK', 'BRAK', 'BRAK', 'BRAK', 'BRAK', 'BRAK', 'BRAK', 'BRAK'];
    var normalScoreListTemp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var temp1, temp2, temp3;
    //localStorage.setItem("normalNickListLS", JSON.stringify(normalNickListTemp));
    //localStorage.setItem("normalScoreListLS", JSON.stringify(normalScoreListTemp));
    if (localStorage.getItem("normalNickListLS") === null) {
        localStorage.setItem("normalNickListLS", JSON.stringify(normalNickListTemp));
    }
    if (localStorage.getItem("normalScoreListLS") === null) {
        localStorage.setItem("normalScoreListLS", JSON.stringify(normalScoreListTemp));
    }
    temp3 = localStorage.getItem("normalNickListLS");
    normalNickListTemp = JSON.parse(temp3);
    for (var i = 0; i < normalNickListTemp.length; i++) {
        temp1 = 'namen' + (i + 1);
        temp2 = document.getElementById(temp1);
        temp2.innerHTML = normalNickListTemp[i];
    }

    temp3 = localStorage.getItem("normalScoreListLS");
    normalScoreListTemp = JSON.parse(temp3);
    for (var i = 0; i < normalScoreListTemp.length; i++) {
        temp1 = 'scoren' + (i + 1);
        temp2 = document.getElementById(temp1);
        temp2.innerHTML = normalScoreListTemp[i];
    }
  
}

function levelEasy() {
    
    var easyNickListTemp = ['BRAK', 'BRAK', 'BRAK', 'BRAK', 'BRAK', 'BRAK', 'BRAK', 'BRAK', 'BRAK', 'BRAK'];
    var easyScoreListTemp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var temp1, temp2, temp3;
    //localStorage.setItem("easyNickListLS", JSON.stringify(easyNickListTemp));
    //localStorage.setItem("easyScoreListLS", JSON.stringify(easyScoreListTemp));
    if (localStorage.getItem("easyNickListLS") === null) {
        localStorage.setItem("easyNickListLS", JSON.stringify(easyNickListTemp));
    }
    if (localStorage.getItem("easyScoreListLS") === null) {
        localStorage.setItem("easyScoreListLS", JSON.stringify(easyScoreListTemp));
    }
    temp3 = localStorage.getItem("easyNickListLS");
    easyNickListTemp = JSON.parse(temp3);
    for (var i = 0; i < easyNickListTemp.length; i++) {
        temp1 = 'namee' + (i + 1);
        temp2 = document.getElementById(temp1);
        temp2.innerHTML = easyNickListTemp[i];
    }

    temp3 = localStorage.getItem("easyScoreListLS");
    easyScoreListTemp = JSON.parse(temp3);
    for (var i = 0; i < easyScoreListTemp.length; i++) {
        temp1 = 'scoree' + (i + 1);
        temp2 = document.getElementById(temp1);
        temp2.innerHTML = easyScoreListTemp[i];
    }

}

function levelHard() {
    
    var hardNickListTemp = ['BRAK', 'BRAK', 'BRAK', 'BRAK', 'BRAK', 'BRAK', 'BRAK', 'BRAK', 'BRAK', 'BRAK'];
    var hardScoreListTemp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var temp1, temp2, temp3;

    if (localStorage.getItem("hardNickListLS") === null) {
        localStorage.setItem("hardNickListLS", JSON.stringify(hardNickListTemp));
    }
    
    if (localStorage.getItem("hardScoreListLS") === null) {
        localStorage.setItem("hardScoreListLS", JSON.stringify(hardScoreListTemp));
    }
    
    temp3 = localStorage.getItem("hardNickListLS");
    hardNickListTemp = JSON.parse(temp3);
    for (var i = 0; i < hardNickListTemp.length; i++) {
        temp1 = 'nameh' + (i + 1);
        temp2 = document.getElementById(temp1);
        temp2.innerHTML = hardNickListTemp[i];
    }

    temp3 = localStorage.getItem("hardScoreListLS");
    hardScoreListTemp = JSON.parse(temp3);
    for (var i = 0; i < hardScoreListTemp.length; i++) {
        temp1 = 'scoreh' + (i + 1);
        temp2 = document.getElementById(temp1);
        temp2.innerHTML = hardScoreListTemp[i];
    }

}

function isItGoodScore(x) {
    var temp1, temp2;
    var yesOrNo;
    var toParse = sessionStorage.getItem('time');
    switch (toParse) {
        case '40':
            temp1 = localStorage.getItem("easyScoreListLS");
            temp2 = JSON.parse(temp1);
            if (temp2[9] < points) yesOrNo = true;
            else yesOrNo = false;
            break;
        case '30':
            temp1 = localStorage.getItem("normalScoreListLS");
            temp2 = JSON.parse(temp1);
            if (temp2[9] < points) yesOrNo = true;
            else yesOrNo = false;
            break;
        case '20':
            temp1 = localStorage.getItem("hardScoreListLS");
            temp2 = JSON.parse(temp1);
            if (temp2[9] < points) yesOrNo = true;
            else yesOrNo = false;
            break;
    }
    return yesOrNo;
}

function sortResults(x,tempName) {
    var temp1, temp2, temp3, j, i, y, z;
    var toParse = sessionStorage.getItem('time');
    switch (toParse) {
        case '40':
            temp1 = localStorage.getItem("easyScoreListLS");
            temp2 = JSON.parse(temp1); /*tu mam liste wyników*/
            temp1 = localStorage.getItem("easyNickListLS");
            temp3 = JSON.parse(temp1);/*tu mam liste imion*/
            break;
        case '30':
            temp1 = localStorage.getItem("normalScoreListLS");
            temp2 = JSON.parse(temp1); /*tu mam liste wyników*/
            temp1 = localStorage.getItem("normalNickListLS");
            temp3 = JSON.parse(temp1);/*tu mam liste imion*/
            break;
        case '20':
            temp1 = localStorage.getItem("hardScoreListLS");
            temp2 = JSON.parse(temp1); /*tu mam liste wyników*/
            temp1 = localStorage.getItem("hardNickListLS");
            temp3 = JSON.parse(temp1);/*tu mam liste imion*/
            break;
    }
    temp2[9] = x;
    temp3[9] = tempName;
    console.log(temp2);
    alert('');

    for (j = 0; j < temp2.length - 1; j++)
        for (i = 0; i < temp2.length - 1; i++)
            if (temp2[i] > temp2[i + 1]) {
                y = temp2[i]; temp2[i] = temp2[i + 1]; temp2[i + 1] = y;
                z = temp3[i]; temp3[i] = temp3[i + 1]; temp3[i + 1] = z;
            };
    temp2 = temp2.reverse();
    temp3 = temp3.reverse();
    
    switch (toParse) {
        case '40':
            localStorage.setItem("easyNickListLS", JSON.stringify(temp3));
            localStorage.setItem("easyScoreListLS", JSON.stringify(temp2));
            break;
        case '30':
            localStorage.setItem("normalNickListLS", JSON.stringify(temp3));
            localStorage.setItem("normalScoreListLS", JSON.stringify(temp2));
            break;
        case '20':
            localStorage.setItem("hardNickListLS", JSON.stringify(temp3));
            localStorage.setItem("hardScoreListLS", JSON.stringify(temp2));
            break;
    }
alert('Wynik został zapisany. Sprawdz listę najlepszych wyników w menu głównym.')        
}

function submit() {
    playerName = document.getElementById("playername").value;
    sortResults(points,playerName);
    window.location.href = "#menu";
    location.reload();
}