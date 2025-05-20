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

let options = document.querySelectorAll(".option");              //Returns a nodelist
let desc = document.querySelector('.desc');
let optionImage = document.querySelector('.option-image');

const paras = [
    'Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.',
    'Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.',
    'We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experienc'
]

let defaultIndex = 0;

options.forEach((o,i) => {
    if(i === defaultIndex){ 
        o.style.color = `white`;
        const image = o.getAttribute("data-image");

        desc.innerHTML = `<p>${paras[defaultIndex]}</p>`
        optionImage.src = image;
    }
})

options.forEach(function(o) {
    o.addEventListener("click", () => {
        o.style.color = `white`;
        const image = o.getAttribute("data-image");
        const index = [...options].indexOf(o);

        options.forEach((otherOption, i) => {
            if (i !== index) {
                otherOption.style.color = `#504A45`;
            }
        })

        desc.innerHTML = `<p>${paras[index]}</p>`
        optionImage.src = image;
    })
});

// let defaultOption = 0;

// options[defaultOption].classList.add('selected');

// options.forEach(o => {
//     o.addEventListener('click', () => {
//         options.forEach(option => {
//             option.classList.remove("selected");
//         })

//         o.classList.add("selected");
//     })
// })