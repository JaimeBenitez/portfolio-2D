'use strict'

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')
const grandeHistoria = document.querySelector('.grande-historia')
const puntoHistoria = document.querySelectorAll('.punto-historia')

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

puntoHistoria.forEach( (cadaPunto, i) => {
    //asignamos click a cada punto
    puntoHistoria[i].addEventListener('click', () =>{
        //posicion de cada punto en el array
        let posicion = i
        //calculo de la posicion de los videos segun el punto
        let operacion = posicion * -25

        grandeHistoria.style.transform = `translateX(${operacion}%)`
        //cambios de clase
        puntoHistoria.forEach( ( cadaPunto, i) =>{
            puntoHistoria[i].classList.remove('activo')
        })
        puntoHistoria[i].classList.add('activo')
    })
})