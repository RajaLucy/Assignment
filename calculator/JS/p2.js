var data = document.getElementById("res");

let l = document.getElementsByTagName("button");

function f1() {
    data.innerHTML += l[0].innerText;
}
function f2() {
    data.innerHTML += l[1].innerText;
}
function f3() {
    data.innerHTML += l[2].innerText;
}
function add() {
    data.innerHTML += l[3].innerText;
}

function f4() {
    data.innerHTML += l[4].innerText;
}
function f5() {
    data.innerHTML += l[5].innerText;
}
function f6() {
    data.innerHTML += l[6].innerText;
}


function sub() {
    data.innerHTML += l[7].innerText;
}
function f7() {
    data.innerHTML += l[8].innerText;
}
function f8() {
    data.innerHTML += l[9].innerText;
}
function f9() {
    data.innerHTML += l[10].innerText;
}



function mul() {
    data.innerHTML += l[11].innerText;
}
function f0() {
    data.innerHTML += l[12].innerText;
}
function div() {
    data.innerHTML += l[13].innerText;
}
function per() {
    data.innerHTML += l[14].innerText;
}
function dot() {
    data.innerHTML += l[15].innerText;
}
function doo() {
    data.innerHTML += l[16].innerText;
}


function del() {
    var p = data.innerHTML;
    p = p.substring(0, p.length - 1);
    data.innerHTML = p;
}




function resu() {


    var p = data.innerHTML;
    if (p == "=") {
        data.innerHTML = "";
    }
    if (p != "C" && p != "AC" && p != "=") {

        data.innerHTML = (eval(p));
    }
    else {


    }
}
function fa() {
    data.innerHTML = "";
}