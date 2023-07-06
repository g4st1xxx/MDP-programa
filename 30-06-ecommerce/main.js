const open = document.getElementByClassName('product');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.forEach().addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});