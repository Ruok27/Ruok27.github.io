function toggleTheme(){

    let element = document.body;

    element.classList.toggle("dark-mode");
}


let box = document.getElementsByClassName(".container div");
let boxwidth = box.clientWidth;

box.style["height"] = boxwidth;

