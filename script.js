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
// RESET FORM VALIDATION MESSAGES
// ==========================================

const resetButton =
    document.querySelector(
        'input[type="reset"]'
    );

if(resetButton){

    resetButton.addEventListener(
        "click",
        function(){

            setTimeout(() => {

                // Name validation

                const nameError =
                    document.getElementById(
                        "name-error"
                    );

                if(nameError){
                    nameError.textContent = "";
                }

                // Email validation

                const emailError =
                    document.getElementById(
                        "email-error"
                    );

                if(emailError){
                    emailError.textContent = "";
                }

                // Character counter

                const messageCounter =
                    document.getElementById(
                        "message-counter"
                    );

                if(messageCounter){

                    messageCounter.textContent =
                        "";

                    messageCounter.style.color =
                        "#666";
                }

            },10);

        }
    );

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

    emailError.style.color =
        "red";
}
else{

    emailError.textContent =
        "✓ Valid email address";

    emailError.style.color =
        "limegreen";

}

    });

}

// ==========================================
// LIVE NAME VALIDATION
// ==========================================

const liveName =
    document.getElementById("name");

const nameError =
    document.getElementById("name-error");

if(liveName && nameError){

    liveName.addEventListener("input", () => {

        const namePattern =
            /^[A-Za-z\s]+$/;

        if(
            liveName.value === ""
        ){
            nameError.textContent = "";
        }
        else if(
            !namePattern.test(
                liveName.value
            )
        ){
            nameError.textContent =
                "Name must contain letters only";
        }
        else{
            nameError.textContent =
                "";
        }

    });

}

// ==========================================
// MESSAGE CHARACTER COUNTER
// ==========================================

const messageBox =
    document.getElementById("message");

const messageCounter =
    document.getElementById("message-counter");

if(
    messageBox &&
    messageCounter
){

    messageBox.addEventListener(
        "input",
        () => {

            const remaining =
                500 -
                messageBox.value.length;

            if(
                remaining > 30
            ){

                messageCounter.textContent =
                    remaining +
                    " characters remaining";

                messageCounter.style.color =
                    "#666";
            }

            else if(
                remaining > 0
            ){

                messageCounter.textContent =
                    "Warning: Only " +
                    remaining +
                    " characters left";

                messageCounter.style.color =
                    "orange";
            }

            else{

                messageCounter.textContent =
                    "Maximum 500 characters reached";

                messageCounter.style.color =
                    "red";
            }

        }
    );

}
