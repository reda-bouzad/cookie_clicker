let flag = false;
let count = 0;
let reseat;

var audio = new Audio('audio/click.mp3');

//function that print the result
function printer(){
    result = document.getElementById('result');
    result.innerHTML = count;
}

//function that keep track of number of clicks
function counter(){
   myImage = document.getElementById('myImage');
   if (flag == false) {
        count = count + 1;
   } else {
        count = count + 4;
   }
   printer();
   audio.play();
}

//function that reseat the count variable
function reseater() {
    reseat = document.getElementById('reseat');
    result.innerHTML = ("0");
    count = 0;
}

//function for achievement  : +1 coockie per click : 50 cookies
function achievement1() {
    if (count > 49){
        count = count - 50;
        result.innerHTML = count;
        flag = true;
    } else {
        alert('not enough coockies');
    }
}





