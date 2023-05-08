const newPostButton = document.querySelector('#newPostButton');
const modal = document.querySelector('#modal');
const modalCloseButton = document.querySelector('#modalCloseButton');

newPostButton.addEventListener('click',()=>{
    console.log('open modal!');
    modal.classList.remove('translate-x-full');
    modal.classList.add('translate-x-0');
});
modalCloseButton.addEventListener('click',()=>{
    console.log('close modal');
    modal.classList.remove('translate-x-0');
    modal.classList.add('translate-x-full');
})