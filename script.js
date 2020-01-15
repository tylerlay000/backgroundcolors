// access css properties via 35

//events: onmouseover, onmouseout, onmousedown, onmouseup

let changeBackground = function () {

    let box1 = document.getElementById("block1");
    let box2 = document.getElementById("block2");
    let box3 = document.getElementById("block3");

    box1.style.backgroundColor = "green";
    box2.style.backgroundColor = "blue";
    box3.style.backgroundColor = "yellow";

    box1.innerText = "Hello";
    box2.innerText = "EEE RRR";
    box3.innerText = "Indigo Montoya";

};

let setOriginal = function () {

    let box1 = document.getElementById("block1");
    let box2 = document.getElementById("block2");
    let box3 = document.getElementById("block3");

    box1.style.backgroundColor = "red";
    box2.style.backgroundColor = "red";
    box3.style.backgroundColor = "red";

    box1.innerText = "Over";
    box2.innerText = "Enter";
    box3.innerText = "Down";

};

let showHidden = function () {

    document.getElementById("hidden").innerText = "You've found out the secret";

};

let mouseOver = function(id){

    id.style.backgroundColor = "yellow";
    id.innerText = "HELLO";

};

let mouseOut = function (id) {

    id.style.backgroundColor = "red";
    if (id === document.getElementById('block1')){
        id.innerText = "OVER";
    }else if (id === document.getElementById('block2')) {
        id.innerText = "ENTER";
    }else
        id.innerText = "DOWN";

};

let addClass = function (id) {

    id.classList.add("blueBigBold");
};

let removeClass = function (id) {
    id.classList.remove("blueBigBold")

};

let toggleClass = function (id) {
    id.classList.toggle("blueBigBold")

};

