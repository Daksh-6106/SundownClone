const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let elemCont = document.querySelector(".elem-container");
let fixed = document.querySelector(".fixed-image");
elemCont.addEventListener('mouseenter', () => {
    fixed.style.display = "block";
});

elemCont.addEventListener('mouseleave', () => {
    fixed.style.display = "none";
});

let elems = document.querySelectorAll(".elem");

elems.forEach(function(e) {
    e.addEventListener("mouseenter", () => {
        const imageInfo = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${imageInfo})`;
    })
});