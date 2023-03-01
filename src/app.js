'use strict'

//Parte carrusel
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

//Parte acordeon

const bloque = document.querySelectorAll('.bloque')
const titulo = document.querySelectorAll('.acordeon-title')


titulo.forEach( ( cadaTitulo, i )=>{
    
    titulo[i].addEventListener( 'click', () =>{

        bloque.forEach( ( cadaBloque, i )=>{
            bloque[i].classList.remove('activo')
    })
    bloque[i].classList.add('activo')
    })
})

//Parte lightbox

const enlaces = document.querySelectorAll('.lightbox__ul .lightbox__a')
const lightbox = document.querySelector('.lightbox')
const lightboxGrande = document.querySelector('.lightbox__grande')
const cerrar = document.querySelector('.lightbox__cerrar')

enlaces.forEach( ( cadaEnlace, i )=>{
    enlaces[i].addEventListener( 'click', ( e )=>{
        e.preventDefault()
        let ruta = cadaEnlace.querySelector('.lightbox__img').src
        let alt = cadaEnlace.querySelector('.lightbox__img').alt
        
        
        lightbox.classList.add('activo')

        
        
        lightboxGrande.setAttribute('src', ruta)
        lightboxGrande.setAttribute('alt', alt)
        
        
        
    })
})

cerrar.addEventListener('click',()=>{
    lightbox.classList.remove('activo')
   
    lightboxGrande.setAttribute('src', '')
    lightboxGrande.setAttribute('alt', '')

})

//Parte tabs

const li  = document.querySelectorAll('.tab__li')
const liDos = document.querySelectorAll('.tab__li--dos')
const tabBloque = document.querySelectorAll('.tab__bloque')
const tabBloqueDos = document.querySelectorAll('.tab__bloque--dos')
console.log(liDos)

li.forEach((cadaLi, i) =>{
    li[i].addEventListener('click', ()=>{
        li.forEach((cadaLi, i)=>{
            li[i].classList.remove('activo')
            tabBloque[i].classList.remove('activo')
        })
        li[i].classList.add('activo')
        tabBloque[i].classList.add('activo')
    })
})

liDos.forEach((cadaLi, i) =>{
    liDos[i].addEventListener('click', ()=>{
        liDos.forEach((cadaLi, i)=>{
            liDos[i].classList.remove('activo')
            tabBloqueDos[i].classList.remove('activo')
        })
        liDos[i].classList.add('activo')
        tabBloqueDos[i].classList.add('activo')
    })
})