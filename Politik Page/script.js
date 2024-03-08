let modal = document.querySelector('.modal');
let buttonMap = document.querySelector('.circle');
let close = document.querySelectorAll('.close');

buttonMap.addEventListener('click', () => {
    modal.classList.toggle('active-modal')
})

let box1 = document.querySelector('.box-1');
let modal1 = document.querySelector('.modal-1')

box1.addEventListener('click', () => {
    console.log(1)
    modal1.classList.add('active-modal')
})

let box2 = document.querySelector('.box-2');
let modal2 = document.querySelector('.modal-2')

box2.addEventListener('click', () => {
    console.log(2)
    modal2.classList.add('active-modal')
})

let box3 = document.querySelector('.box-3');
let modal3 = document.querySelector('.modal-3')

box3.addEventListener('click', () => {
    modal3.classList.add('active-modal')
})

let box4 = document.querySelector('.box-4');
let modal4 = document.querySelector('.modal-4')

box4.addEventListener('click', () => {
    modal4.classList.add('active-modal')
})

close.forEach(c => {
    c.addEventListener('click', () => {
        console.log("Close is already");
        modal1.classList.remove('active-modal')
        modal2.classList.remove('active-modal')
        modal3.classList.remove('active-modal')
        modal4.classList.remove('active-modal')
    } )
})

let modalSlide = document.querySelector('.contain-st');
let modalSlide2 = document.querySelector('.contain-ed');
let slide = document.querySelector('.slide-1');
let slide2 = document.querySelector('.slide-2');


modalSlide.addEventListener('click', () => {
    modalSlide.classList.add('active-contain')
    modalSlide2.classList.add('active-contain')
    slide.classList.add('active-slide');
})

modalSlide2.addEventListener('click', () => {
    modalSlide.classList.add('active-contain')
    modalSlide2.classList.add('active-contain')
    slide2.classList.add('active-slide');
})

let boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        console.log(1)
        modalSlide.classList.remove('active-contain')
        modalSlide2.classList.remove('active-contain')
        slide.classList.remove('active-slide');
        slide2.classList.remove('active-slide')
    })
})