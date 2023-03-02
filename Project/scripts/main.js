"use strict";

let buttonModal = document.querySelectorAll('#buttonModal');
let modal = document.querySelector('.modal__conteiner');

// Open modal
buttonModal.forEach(element => {
    element.addEventListener('click', modalAdd);
});

function modalAdd(){
    modal.classList.add('modal-active');
}

// close modal
modal.addEventListener('click', closeModal);
function closeModal(event) {
    if(event.target.classList.contains('modal-active')){
        modal.classList.remove('modal-active');
    };
}
