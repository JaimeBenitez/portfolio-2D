'use strict'

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

punto.forEach( (cadaPunto, i) => {
    //asignamos click a cada punto
    punto[i].addEventListener('click', () =>{
        //posicion de cada punto en el array
        let posicion = i
        //calculo de la posicion de los videos segun el punto
        let operacion = posicion * -50

        grande.style.transform = `translateX(${operacion}%)`
        //cambios de clase
        punto.forEach( ( cadaPunto, i) =>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})