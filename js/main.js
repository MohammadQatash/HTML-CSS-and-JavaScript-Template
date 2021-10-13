// Scrolling window effects on the images 
var img = document.getElementById("mountain"),
    headBox = document.getElementsByClassName("head-box")[0];

window.addEventListener('scroll', function() {
    var value = window.scrollY;
    img.style.top = 135 - value * 0.3 + 'px';
    headBox.style.top = 158 + value * 0.3 + 'px';
    if(value <= 100) {
        headBox.style.opacity = 1;
    } else {
        headBox.style.opacity = 0.7;
    }
})

// Click Menu
var button = document.getElementsByClassName("button")[0],
    hidden = document.getElementsByClassName("hidden")[0],
    swipping = document.getElementById("swipping");

    function swing(evt) {
        hidden.style.display = "block";
        swipping.style.transform = "translateX(20%)rotate(5deg)";
    }

// When user click outside of the mopile nav, close it
    window.onclick = function (event) {
        if(event.target == hidden) {
            hidden.style.display = "none";
            swipping.style.transform = "initial";
        }
    }

// On scrollY at specific position make a boxShadow for header
var header = document.getElementsByClassName("header")[0],
    headerContain = document.getElementsByClassName("contain")[0];

window.addEventListener("scroll", function () {
    if(window.scrollY >= 500) {
        headerContain.style.height = "11vh";
        header.style.boxShadow = "0 1px 9px -2px #fff";
        header.style.background = "#0b1d26";
    } else {
        headerContain.style.height = "14vh";
        header.style.boxShadow = "initial";
        header.style.background = "transparent";
    }
})

// Open panels
let panels = document.querySelectorAll("[data-panel]");
panels.forEach((panel) => {
    panel.addEventListener("click", () => panel.classList.toggle("open"));
});

// Animation Element when scroll
const scrollOffset = 100;
const scrollElements = document.querySelectorAll(".animation");

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
};

const displayScrollElement = (element) => {
    element.classList.add(element.dataset.animation);
};

// const hideScrollElement = (element) => {
//     element.classList.remove(element.dataset.animation);
// };

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, scrollOffset)) {
            displayScrollElement(el);
        } // else {
        //     hideScrollElement(el);
        // }
    });
};

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});