const title = "CYBER X";

let i = 0;

function type(){

if(i < title.length){

document.getElementById("text").innerHTML += title.charAt(i);

i++;

setTimeout(type,150);

}

}

type();