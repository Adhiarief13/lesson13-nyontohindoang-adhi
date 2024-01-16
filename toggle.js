

let img_toggle = document.getElementById("img_toggle")
let btn_toggle = document.getElementById("btn_toggle")

function showHideImg(){
    img_toggle.classList.toggle("hide_img")
}

btn_toggle.onclick = showHideImg