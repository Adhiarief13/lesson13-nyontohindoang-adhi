
//prototype
//function void / tidak mengembalikan nilai
function cetakNama (){
    console.info("hello javascript !")
}

//menjalankan function
// cetakNama()

function hitungLuas(p, l){
    return p * l ;
}

let hasil = hitungLuas (100,5);

console.info(hasil)

//ambil element button
let buttonAlert = document.getElementById("btn_alert")

function tampilAlert(){
    let title = document.getElementById("title")
    title.textContent = "Persetan dengan wanita !"
    title.style.color = "red"
    title.style.fontSize = "4rem"
}

//tambahkan event listener
buttonAlert.onclick = tampilAlert

