let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    MenuBar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.toggle('active');
    loginForm.classList.remove('active');
    MenuBar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.toggle('active');
    MenuBar.classList.remove('active');
}

let MenuBar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    MenuBar.classList.toggle('active');
}

window.onscroll = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    MenuBar.classList.remove('active');
    
}


// auto input

let typed = new Typed ('.autoinput',{
    strings:['MOTHERBOARD OF 2023.','CPU OF 2023.','GPU OF 2023.','MONITOR OF 2023.'],
    typeSpeed:100,
    backSpeed: 100,
    backDelay:2000,
    loop:true,
}) 

// let navbar = document.querySelector('.navbar');
// document.querySelector('#menu-btn').onclick = () =>
// {
//     navbar.classList.toggle('active');
// }

// swiper js

var swiper = new Swiper(".product-slider", {
    loop:true,
    slidesPerView: 4,
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination",
      clickable: true},

breakpoints: {
0:{
    slidesPerView: 1,
},
768:{
    slidesPerView: 2,
},

1024:{
    slidesPerView: 3,
},

1512:{
    slidesPerView: 4,
}
},

});

var swiper = new Swiper(".categories-slider", {
    loop:false,
    slidesPerView: 4,
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination",
      clickable: true},

breakpoints: {
0:{
    slidesPerView: 1,
},
768:{
    slidesPerView: 2,
},

1024:{
    slidesPerView: 3,
},
},

});