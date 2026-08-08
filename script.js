/* =========================
   TYPING ANIMATION
========================= */

const typingText = "Aspiring Software Developer";

let typingIndex = 0;

const typingElement = document.getElementById("typing");

function typeWriter() {

    if (typingIndex < typingText.length) {

        typingElement.textContent += typingText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeWriter, 80);

    }

}


/* Start typing animation */

if (typingElement) {
    typeWriter();
}


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


if (topButton) {

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

}


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const sections = document.querySelectorAll(".section");


const sectionObserver = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                sectionObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(function(section) {

    sectionObserver.observe(section);

});


/* =========================
   PROJECT CARD INTERACTION
========================= */

const projectCards = document.querySelectorAll(".card");


projectCards.forEach(function(card) {

    card.addEventListener("mouseenter", function() {

        this.style.transform = "translateY(-10px)";

    });


    card.addEventListener("mouseleave", function() {

        this.style.transform = "translateY(0)";

    });

});


/* =========================
   PHOTO INTERACTION
========================= */

const profileImage = document.querySelector(".profile-image");


if (profileImage) {

    profileImage.addEventListener("click", function() {

        this.classList.toggle("photo-active");

    });

}


/* =========================
   CURRENT YEAR
========================= */

const footerText = document.querySelector("footer p");


if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Ishaan Bijith. All rights reserved.`;

}
