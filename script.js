// Smooth scrolling
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Typing effect
const text = "Aspiring Software Developer";
let i = 0;
const title = document.getElementById("typing");

function typeWriter() {
    if (i < text.length) {
        title.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;

// Dark mode
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Back to top button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    topBtn.style.display =
        document.documentElement.scrollTop > 200 ? "block" : "none";
};

topBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
