// // Smooth scrolling when clicking on menu links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// function showMenu(){
//     let nav = document.getElementById("navMenu");
//     if (nav.style.display === "block") {
//         nav.style.display = "none";
//     } else {
//         nav.style.display = "block";
//     }
// }