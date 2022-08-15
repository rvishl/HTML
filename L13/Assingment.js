var count1 = 0;
var count2 = 0;
function btn1() {    
    count1++;
    var something = document.getElementById('like');
    something.innerText = count1;
}

function btn2() {
    count2++;
    var something = document.getElementById('dislike');
    something.innerText = count2;
}