document.getElementsByTagName("h1")[0].innerHTML = " Best way to learn code is by parcticing daily";

for(let i = 0; i <10; i++){

let element = document.createElement("p");
let text = document.createTextNode("There was a golden chld in tyhe world that was not the that was choicen the");

element.appendChild(text);
document.body.appendChild(element);
element.id = String(i);
}
document.getElementById("4").style.color ="red"