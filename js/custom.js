 const navLink = document.querySelectorAll(".nav-link");
const collapse =document.querySelector(".collapse")
const navbarToggler = document.querySelector(".navbar-toggler")





 navLink.forEach((element) =>{

element.addEventListener("click",e => {
 collapse.style.display="none"


})


 })



 