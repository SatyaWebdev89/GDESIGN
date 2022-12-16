// // When the user scrolls the page, execute myFunction
// window.onscroll = function () { myFunction() };

// // Get the navbar
// const nav = document.getElementsByClassName("nav");

// // Get the offset position of the navbar
// let sticky = nav.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         nav.classList.add("sticky")
//     } else {
//         nav.classList.remove("sticky");
//     }
// }

// let navSlide = () => {
//     let burger = document.querySelector('.burger');
//     let nav = document.querySelector('.nav-links');
//     let navLinks = document.querySelectorAll('.nav-links li');


//     burger.addEventListener('click', () => {
//         // Toogle Nav
//         nav.classList.toggle('nav-active');

//         // Animation liens
//         navLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = ''
//             } else {
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`;
//                 console.log(index / 7);
//             }
//         });

//         //Animation Burger(X)   
//         burger.classList.toggle('toggle');
//     });

// }

// // let app = ()=>{
// //     navSlide();
// // }
// navSlide();