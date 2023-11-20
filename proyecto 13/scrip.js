let progreso = document.querySelector(".progreso");
let porcentaje = document.querySelector(".porcentaje");
let celebracion = document.querySelector("body");
let avence = 0;

let tiempo = setInterval(() => {
    avence += 1;
    progreso.style.width = `${avence}%`


    if (avence === 100){
        clearInterval(tiempo)
        celebracion.classList.add("celebracion")
    }
    porcentaje.textContent = `${avence}%`

},75);