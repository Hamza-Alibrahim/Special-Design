if (localStorage.getItem("color")) {
    document.documentElement.style.setProperty("--main-color", localStorage.getItem("color"));
    document.querySelectorAll(".colors li").forEach(el => {
        el.classList.remove("active");
        if (el.dataset.color === localStorage.getItem("color"))
            el.className = "active";
    });
};
if (localStorage.getItem("rbi") === "false") {
    document.querySelector(".rb .yes").classList.remove("active");
    document.querySelector(".rb .no").classList.add("active");
};
if (localStorage.getItem("img")) {
    document.querySelector(".about .image img").setAttribute("src", `imgs/${localStorage.getItem("img")}`);
};
if (localStorage.getItem("sb") === "false") {
    document.querySelectorAll(".nav-bullets .bullet").forEach(e => {
        e.style.display = "none";
    });
    document.querySelector(".sb .yes").classList.remove("active");
    document.querySelector(".sb .no").classList.add("active");
};
let x;
let i = 0;
if (localStorage.getItem("bgimage")) {
    document.querySelector(".landing-page").style.backgroundImage = localStorage.getItem("bgimage");
    i = localStorage.getItem("i");
};
function rbi() {
    x = setInterval(() => {
        if (i >= 10)
            i = 0;
        i++;
        document.querySelector(".landing-page").style.backgroundImage = `url(imgs/img${i}.jpg)`;
        localStorage.setItem("bgimage", `url(imgs/img${i}.jpg)`);
        localStorage.setItem("i", i);
    }, 5000);
};
if (!localStorage.getItem("rbi") || localStorage.getItem("rbi") === "true") {
    rbi();
};

if (localStorage.getItem("fh") === "true") {
    document.querySelector(".landing-page .container1").classList.toggle("fixed");
    document.querySelector(".fh .no").classList.remove("active");
    document.querySelector(".fh .yes").classList.add("active");
};
document.querySelector(".gear").onclick = function () {
    document.querySelector(".setting-box").classList.toggle("open");
    document.querySelector(".setting-box i").classList.toggle("fa-spin");
};
let imags = ["imag1.jpg", "imag2.png", "imag3.jpg", "imag4.jpg", "imag5.jpg"];
document.querySelectorAll(".colors li").forEach(li => {
    li.addEventListener("click", (e) => {
        handleactive(e);
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        localStorage.setItem("color", e.target.dataset.color);
        for (let i = 0; i < 5; i++) {
            if (document.querySelector(".colors").children[i].classList.contains("active")) {
                document.querySelector(".about .image img").setAttribute("src", `imgs/${imags[i]}`);
                localStorage.setItem("img", imags[i]);
                break;
            };
        };
    });
});
document.querySelectorAll(".rb span").forEach(span => {
    span.addEventListener("click", (e) => {
        handleactive(e);
        localStorage.setItem("rbi", e.target.dataset.val);
        if (e.target.dataset.val === "false") {
            clearInterval(x);
        } else {
            rbi();
        };
    });
});
window.onscroll = function () {
    let top = document.querySelector(".skills").offsetTop;
    let height = document.querySelector(".skills").offsetHeight;
    let windowh = this.innerHeight;
    let wst = this.scrollY;
    if (wst >= (top + height - windowh)) {
        document.querySelectorAll(".prog span").forEach(el => {
            el.style.width = el.dataset.prog;
        });
    };
};
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", (e) => {
        let overlay = document.createElement("div");
        overlay.className = "popup";
        document.body.appendChild(overlay);
        let popbox = document.createElement("div");
        popbox.className = "popbox";
        let imag = document.createElement("img");
        imag.setAttribute("src", img.src);
        if (img.alt !== null) {
            let head = document.createElement("h3");
            head.className = "title";
            head.append(`${img.alt}`);
            popbox.appendChild(head);
        };
        let close = document.createElement("span");
        close.append("X");
        popbox.appendChild(close);
        popbox.appendChild(imag);
        document.body.appendChild(popbox);
        close.onclick = function () {
            popbox.remove();
            overlay.remove();
        };
    });
});
document.querySelectorAll(".sb span").forEach(span => {
    span.addEventListener("click", (e) => {
        handleactive(e);
        localStorage.setItem("sb", e.target.dataset.val);
        if (e.target.dataset.val === "false") {
            document.querySelectorAll(".nav-bullets .bullet").forEach(e => {
                e.style.display = "none";
            });
        } else {
            document.querySelectorAll(".nav-bullets .bullet").forEach(e => {
                e.style.display = "block";
            });
        };
    });
});
function scroll(elements) {
    document.querySelectorAll(elements).forEach(el => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(`.${e.target.dataset.name}`).scrollIntoView();
        });
    });
};
scroll(".nav-bullets .bullet");
scroll(".links a");
function handleactive(ev) {
    ev.target.parentElement.querySelector(".active").classList.remove("active");
    ev.target.classList.add("active");
};
document.querySelector(".reset").onclick = function () {
    localStorage.clear();
    location.reload();
};
document.querySelector(".toggle-menu").onclick = function (e) {
    e.stopPropagation();
    this.classList.toggle("active");
    document.querySelector(".links").classList.toggle("open");
};
window.onclick = function (e) {
    if (!e.target.classList.contains("toggle-menu") && !e.target.classList.contains("links")) {
        if (document.querySelector(".links").classList.contains("open")) {
            document.querySelector(".links").classList.remove("open");
            document.querySelector(".toggle-menu").classList.remove("active");
        };
    };
};
document.querySelectorAll(".fh span").forEach(span => {
    span.addEventListener("click", (e) => {
        handleactive(e);
        localStorage.setItem("fh", e.target.dataset.val);
        if (e.target.dataset.val === "false") {
            document.querySelector(".landing-page .container1").classList.toggle("fixed");
        } else {
            document.querySelector(".landing-page .container1").classList.toggle("fixed");
        };
    });
});