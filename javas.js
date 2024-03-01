const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click' , () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

modeToggle.addEventListener('click', ()=>{
    modeToggle.classList.toggle('active');
    body.classList.toggle('dark');
});e

/*Shopping Cart
let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})
*/
document.addEventListener('DOMContentLoaded', function() {
    const heartIcons = document.querySelectorAll('.bx-heart');

    heartIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const alertBox = document.querySelector('.alert');
            alertBox.classList.add('show');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-icon');
    const searchBar = document.querySelector('.search-bar');

    searchIcon.addEventListener('click', function(event) {
        event.preventDefault();
        searchBar.classList.toggle('active');
    });
});


