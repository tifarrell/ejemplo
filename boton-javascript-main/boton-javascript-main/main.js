// palabra reservada FUNCTION
// seguido del NOMBRE de mi función
// dentro del ( ) va un PARÁMETRO

function mostrar_coultar(id){

    let div = document.getElementById(id)

    if (div.style.display == "none") {
        div.style.display = "flex"
    } else {
        div.style.display = "none"
    }
}