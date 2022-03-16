// Getting the body from the dom
let body = document.body;
let div

function manyDivs () {
    div = document.createElement('div')
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = "blue";
    body.appendChild(div);
    div.addEventListener('mouseover', toggleBlue)
}

setInterval(manyDivs, 2000 )

function toggleBlue() {
    if (div.style.backgroundColor == "red") {
        div.style.backgroundColor = "blue"    
    } else {
        div.style.backgroundColor = "red"
    }
}
