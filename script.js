var count1 = 9;
var count2 = 12;
var count3 = 9;

var count1Element = document.querySelector("#count1");
var count2Element = document.querySelector("#count2");
var count3Element = document.querySelector("#count3");

function add101() {
    count1++ ;
    count1Element.innerText = count1 + " like(s)"
}

function add102() {
    count2++ ;
    count2Element.innerText = count2 + " like(s)"
}

function add103() {
    count3++ ;
    count3Element.innerText = count3 + " like(s)"
}
