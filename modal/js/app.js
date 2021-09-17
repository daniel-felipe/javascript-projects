const openModalBtn = document.querySelector('.modal-btn');
const closeModalBtn = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const elements = [openModalBtn, closeModalBtn];

elements.forEach(function(btn) {
    btn.addEventListener('click', function() {
        modalOverlay.classList.toggle('modal-active');
    });
});
