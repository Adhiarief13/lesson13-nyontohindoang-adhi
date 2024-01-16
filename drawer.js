

let draw = document.getElementById("drawer")
let button = document.getElementById("btn_drawer")

function showHidedraw (){
    draw.classList.toggle("drawer_show")
}

button.onclick = showHidedraw