document.querySelector("ul > li").style.color = 'red';
document.querySelector("ul a").style.fontSize = '2rem'; // remember camelCasing of CSS properties in JavaScript
document.querySelector("ul a").style.backgroundColor = 'darkcyan';
document.querySelector("ul a").style.color = 'white';
document.querySelector("ul a").style.borderRadius = '10px';
// document.querySelector("#title").style.visibility = 'hidden';

document.querySelector(".btn").style.backgroundColor = "yellow";
document.querySelectorAll(".item")[2].style.backgroundColor = "yellow";

document.querySelector("button").classList; // returns the list of classes applied on selected element
// document.querySelector("button").classList.add("invisible");
// document.querySelector("button").classList.toggle("invisible")
document.querySelector("button").classList.toggle("huge");

console.log(document.querySelector("ul").textContent);

document.querySelector("li a").getAttribute("href"); // returns the value of href attribute.
console.log("initial attribute value : " , document.querySelector("li a").getAttribute("href"));
document.querySelector("li a").setAttribute("href", "www.github.io"); // returns the value of href attribute.
console.log("attribute value changed to : " , document.querySelector("li a").getAttribute("href"));

