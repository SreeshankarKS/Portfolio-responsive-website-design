// Navbar shadow when scrolling

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 20) {
        navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.08)";
    } else {
        navbar.style.boxShadow = "none";
    }

});
