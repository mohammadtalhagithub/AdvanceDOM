// // alert("Alert...");
// var DOM = document.querySelector("#UOList");
// document.querySelector("h1").innerText="Hello World...";

// var delayInMilliseconds = 2000; //
// setTimeout(function() {

//   // document.querySelector("h1").innerText="Good Morning...";
  
// }, delayInMilliseconds);

// // console.log(DOM);
// //innerText returns all text contained by an element 
// //and all its child elements. innerHtml returns all 
// //text, including html tags, that is contained by an element.

// document.querySelector("h1").innerHTML="<h3>Hello World</h3>";
// // console.log(document.firstElementChild);
// // console.log(document.firstElementChild.firstElementChild);
// console.log(document.firstElementChild.lastElementChild); // returns body
// document.firstElementChild.lastElementChild.firstElementChild.innerText = "H1...";

// var myHeading = document.firstElementChild.lastElementChild.firstElementChild;
// var myBody = document.firstElementChild.lastElementChild;

// myHeading.innerHTML = "Property : innerHTML";
// myHeading.innerText = "Property : innerText";

// myHeading.style.color = 'red'; // 'Red' , "rEd"

// document.querySelector(".btn-primary").style.color = "red"
// document.querySelector("#myBtn").style.color = "blue";
// document.querySelector("#myBtn").style.color = "yellowgreen";
// document.querySelector("input").style.color = "purple"; // NOT

// document.querySelector("input").click(); // checks the checkbx and clicks the button
// document.querySelector("#myCheckbox").click(); // only unchecks the chckbx

// document.querySelector("#list").style.color = "yellowgreen";

// document.querySelector(".myClass") // returns first element with class of myClass
// document.querySelectorAll(".item") // returns an array of objects with class of item
// document.querySelectorAll("#myClass") // returns an array of objects with id of myClass

document.getElementsByTagName("li"); // returns an array of all li elements
// document.getElementsByTagName("li")[2].style.color = 'orange';
document.getElementsByTagName("li").length; // returns quantity of such elements

document.getElementsByClassName("item").length; // returns quantity of such elements
document.getElementsByClassName("btn").length; // returns quantity of such elements

document.getElementsByClassName("btn");
document.getElementsByClassName("btn")[0].innerHTML = "innerHTML";

document.getElementById("list");
document.querySelector("li a"); // parent = <li>, child = <a>.
document.querySelector("li.item"); // A list having a class of item.
document.querySelector("ul#list"); // A ul having an id of list.
document.querySelector("ul > li"); // immediate descendant of ul
// document.querySelector with different selector combinations is used for specific selections.


