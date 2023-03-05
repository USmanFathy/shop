let _4fr = document.getElementById('4fr');
let _1fr = document.getElementById('1fr');
let products_contant_1fr = document.getElementById('products-contant')

_1fr.onclick = function (eo){

    _1fr.classList.add("ac");
    _4fr.classList.remove("ac");
    products_contant_1fr.classList.add("products-contant-1fr");

}

_4fr.onclick = ()=>{

    _1fr.classList.remove("ac");
    _4fr.classList.add("ac");
    products_contant_1fr.classList.remove("products-contant-1fr");
    
}