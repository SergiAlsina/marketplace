// function productos(){
//     location.href = "product.html";
// }

// function contactos(){
//     location.href = "contact.html";
// }

// function carro(){
//     location.href = "cart.html";
// }

// function home(){
//     location.href = "home.html";
// }

const toggle = document.getElementById('_toggle')
const items = document.getElementById('_items')

toggle.onclick = ()=>{
    items.classList.toggle('open')
    items.classList.toggle('close')
}