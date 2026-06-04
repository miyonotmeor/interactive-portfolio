// ==========================================
// THEME TOGGLE
// ==========================================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }

    });

}


// ==========================================
// SCROLL TO TOP WHEN PAGE LOADS
// ==========================================

history.scrollRestoration = "manual";

window.addEventListener("load", function () {

    if (window.location.hash) {
        history.replaceState(null, null, window.location.pathname);
    }

    window.scrollTo(0, 0);

});

window.addEventListener("pageshow", function () {
    window.scrollTo(0, 0);
});


// ==========================================
// PERSONALIZED GREETING
// ==========================================

const greetingElement = document.getElementById("greeting");

if (greetingElement) {

    const hour = new Date().getHours();

    let greeting = "";

    if (hour < 12) {
        greeting = "Good Morning, Welcome to My Portfolio!";
    }
    else if (hour < 18) {
        greeting = "Good Afternoon, Welcome to My Portfolio!";
    }
    else {
        greeting = "Good Evening, Welcome to My Portfolio!";
    }

    greetingElement.textContent = greeting;

}


// ==========================================
// CURRENT DATE & TIME
// ==========================================

const dateTimeElement = document.getElementById("datetime");

if (dateTimeElement) {

    function updateDateTime() {

        const now = new Date();

        dateTimeElement.textContent =
            now.toLocaleString();

    }

    updateDateTime();

    setInterval(updateDateTime, 1000);

}


// ==========================================
// FORM VALIDATION
// ==========================================

const contactForm = document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        const nameInput =
            contactForm.querySelector('input[type="text"]');

        const emailInput =
            contactForm.querySelector('input[type="email"]');

        const messageInput =
            contactForm.querySelector("textarea");

        if (
            !nameInput.value.trim() ||
            !emailInput.value.trim() ||
            !messageInput.value.trim()
        ) {

            event.preventDefault();

            alert(
                "Please complete all required fields before submitting."
            );

        }

    });

}
