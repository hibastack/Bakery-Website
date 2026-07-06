const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

const menu = document.querySelector(".menu-icon");

const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});
hiddenElements.forEach((element) => {
    observer.observe(element);
});


