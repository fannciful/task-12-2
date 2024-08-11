'use strict'

const parentContainer = document.querySelector('.container');

parentContainer.addEventListener('click', event => {
    if (event.target.classList.contains('btn')) {
        alert(`Клікнуто на кнопці: ${event.target.textContent}`);
    }
});