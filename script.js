/* =========================
   ENTER WEBSITE
========================= */

function enterWebsite() {

    const opening = document.getElementById("opening");
    const main = document.getElementById("main");
    const music = document.getElementById("bgMusic");

    if (!opening || !main) {
        return;
    }

    /* =========================
       PLAY MUSIC
    ========================= */

    if (music) {

        music.volume = 0.5;

        music.play().catch(error => {

            console.log("Musik tidak dapat diputar:", error);

        });

    }


    /* =========================
       OPEN WEBSITE
    ========================= */

    opening.style.opacity = "0";

    opening.style.transition = "opacity 1s ease";


    setTimeout(() => {

        opening.style.display = "none";

        main.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

        initializeRevealAnimations();

    }, 1000);

}


/* =========================
   SCROLL REVEAL
========================= */

function initializeRevealAnimations() {

    const elements = document.querySelectorAll(".reveal");

    if (!elements.length) {
        return;
    }

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================
   INITIALIZATION
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const main = document.getElementById("main");

    if (main && !main.classList.contains("hidden")) {

        initializeRevealAnimations();

    }

});