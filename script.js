document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       PAGE LOAD
    ========================= */

    document.body.classList.add("loaded");


    /* =========================
       SMOOTH NAVIGATION
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav ul li a");


    window.addEventListener("scroll", () => {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            const sectionHeight = section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    });


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(
            ".skill-card, .project-card, .experience-item, .education-card"
        );


    const revealObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =========================
       PROFILE IMAGE CHECK
    ========================= */

    const profileImage =
        document.querySelector(".hero-image img");


    if (profileImage) {

        profileImage.addEventListener("error", () => {

            console.log(
                "Profile image could not be loaded."
            );

        });

    }


    /* =========================
       AUTOMATIC YEAR
    ========================= */

    const footerText =
        document.querySelector("footer p");


    if (footerText) {

        const currentYear =
            new Date().getFullYear();


        footerText.innerHTML =
            `© ${currentYear} Kavin Kumar | Mechanical Engineering Portfolio`;

    }


    /* =========================
       CONSOLE
    ========================= */

    console.log(
        "Kavin Kumar | Mechanical Engineering Portfolio"
    );

    console.log(
        "Portfolio loaded successfully."
    );

});