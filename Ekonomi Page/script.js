let modal = document.querySelector('.modal');
let buttonMap = document.querySelector('.flip-card');

buttonMap.addEventListener('click', () => {
      modal.classList.toggle('active-modal')
});

let modal5 = document.querySelector('.modal-new');
let imgButton = document.querySelector('.contain .img');


imgButton.addEventListener('click', () => {
      modal5.classList.add('active-modal');
})

let closeButton = document.querySelector('.close');

closeButton.addEventListener('click', () => {
      console.log(1)
      modal5.classList.remove('active-modal');
})