/* =========================
   TYPING ANIMATION
========================= */

const text = "Aspiring Software Developer";

let index = 0;

const typingElement = document.getElementById("typing");

function typeText() {

    if (index < text.length) {

        typingElement.textContent += text.charAt(index);

        index++;

        setTimeout(typeText, 80);
    }
}

typeText();


/* =========================
   SMOOTH NAVIGATION
========================= */

const navigationLinks = document.querySelectorAll(".navbar a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================
   BACK TO TOP BUTTON
========================= */

const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", function() {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


topButton.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   SECTION REVEAL ANIMATION
========================= */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(function(section) {

    section.style.opacity = "0";

    section.style.transform = "translateY(40px)";

    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});
