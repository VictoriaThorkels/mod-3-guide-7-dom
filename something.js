/*var h2 = document.querySelectorAll('#borgarbilar .mynd'); // here I am storing the HTML element as a value so that I can add a function (event) to it later, if I do not do this then I wont be abel to make an a event happen on the page, which wold suck...
Array.from(btns).forEach(function(btn){ //"btns" stands for bottons, and the point of putting "Array" there is to tell JS that we are focusing on all of the elements with in the array, otherewise Js wont be abel to make the function happen because its would not be passific enough
    btn.addEventListener('onmouseover',function(e){ //"btn" stands for botton, (e) stands for "event", the addEventListner is to make elements do things, and I picked the on mouse event. which means that when a user howers over it it will have a function to it... I hope

        const dt = e.target.parentElement;

    });
});*/ // Was going to use this but It I changed my mind, but wanted to keep it:)

/*const { Color } = require("gif-encoder-2/src/OctreeQuant");*/

/*function myFunction() { //this was a test to see if I did it right
    document.getElementById("buy").innerHTML ="sike";
};*/

function myFunctionImgTwo(a) {
    var x = document.createElement("img");
    x.setAttribute("src", "https://cdn.dribbble.com/users/205084/screenshots/4025624/mago.gif");
   /* x.setAttribute("width", "500px");
    x.setAttribute("height", "350px");*/
    x.setAttribute("alt", "Magic Trick");
    x.setAttribute("class", "img");
    let header = document.querySelector(".header1");
    header.appendChild(x);
    console.log(a);
    a.style.display = "none";
    x.classList.add("animate");


};

function myFunctionone() { //function is "onclick"
    document.getElementById("down-the-rabbit-hole").innerHTML ="wrong"; //what comes when you click it, new text appears
};

function myFunctiontwo() {
    document.getElementById("back-stage").innerHTML ="wrong again...";
};
function myFunctionthree() {
    document.getElementById("on-top-of-his-head").innerHTML ="YOU DID IT!";
};

