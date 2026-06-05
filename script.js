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
// NAVIGATION GREETING (HOME PAGE ONLY)
// ==========================================

const navGreeting =
    document.getElementById("nav-greeting");

if (
    navGreeting &&
    window.location.pathname.includes("index.html")
) {

    const hour = new Date().getHours();

    let greeting = "";

    if(hour < 12){
        greeting =
            "Good Morning,<br>Welcome to My Portfolio!";
    }
    else if(hour < 18){
        greeting =
            "Good Afternoon,<br>Welcome to My Portfolio!";
    }
    else{
        greeting =
            "Good Evening,<br>Welcome to My Portfolio!";
    }

    navGreeting.innerHTML = greeting;

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
// CURRENT DATE & TIME
// ==========================================

const dateTimeElement =
    document.getElementById("datetime");

if(dateTimeElement){

    function updateDateTime(){

        const now = new Date();

        const options = {
            weekday: "short",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        };

        dateTimeElement.textContent =
            now.toLocaleString(
                "en-US",
                options
            );

    }

    updateDateTime();

    setInterval(
        updateDateTime,
        1000
    );

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

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
    !nameInput.value.trim() ||
    !emailInput.value.trim() ||
    !messageInput.value.trim()
) {

    event.preventDefault();

    alert(
        "Please complete all required fields before submitting."
    );

    return;
}

if(
    !emailPattern.test(emailInput.value)
){

    event.preventDefault();

    alert(
        "Please enter a valid email address."
    );

    return;
}

        alert(
    "Form submitted successfully!"
);
    });

}

// ==========================================
// LIVE EMAIL VALIDATION
// ==========================================

const liveEmail =
    document.getElementById("email");

const emailError =
    document.getElementById("email-error");

if(liveEmail && emailError){

    liveEmail.addEventListener("input", () => {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(
            liveEmail.value === ""
        ){
            emailError.textContent = "";
        }
        else if(
            !emailPattern.test(
                liveEmail.value
            )
        ){
            emailError.textContent =
                "Invalid email address";
        }
        else{
            emailError.textContent =
                "";
        }

    });

}
