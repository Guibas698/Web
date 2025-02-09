document.addEventListener("DOMContentLoaded", function () {
    const homeInput = document.getElementById("tzeet-input");
    const homeCounter = document.getElementById("char-counter");
    const homeSendBtn = document.getElementById("send-btn");

    
    const modal = document.getElementById("tzeetModal");
    const openBtn = document.querySelector(".btn-primary"); 
    const closeBtn = document.querySelector(".close");
    const modalInput = document.getElementById("modal-tzeet-input");
    const modalSendBtn = document.getElementById("modal-send-btn");
    const modalCounter = document.createElement("span"); 

    modalCounter.classList.add("counter");
    modalCounter.textContent = "140"; 
    modalSendBtn.insertAdjacentElement("beforebegin", modalCounter);

    const maxLength = 140;

    
    function updateCounter(input, counter, sendBtn) {
        let length = input.value.length;
        let remaining = maxLength - length;

        
        counter.style.display = length === 0 ? "none" : "inline";

        
        if (remaining < 40 && remaining >= 0) {
            counter.classList.add("warning");
            counter.classList.remove("error");
        } else if (remaining < 0) {
            counter.classList.add("error");
            counter.classList.remove("warning");
            sendBtn.disabled = true;
        } else {
            counter.classList.remove("warning", "error");
        }

        counter.textContent = remaining;

        
        sendBtn.disabled = input.value.trim() === "" || remaining < 0;
    }

    
    if (homeInput && homeCounter && homeSendBtn) {
        homeInput.addEventListener("input", function () {
            updateCounter(homeInput, homeCounter, homeSendBtn);
        });
    }

    
    openBtn.addEventListener("click", function () {
        modal.style.display = "flex";
        modalCounter.textContent = "140"; 
        modalSendBtn.disabled = true;
    });

    
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    
    modalInput.addEventListener("input", function () {
        updateCounter(modalInput, modalCounter, modalSendBtn);
    });
});


//login
document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginBtn = document.getElementById("login-btn");
    const emailError = document.getElementById("email-error");

    function validateForm() {
        const emailValid = emailInput.value.includes("@") && emailInput.value.includes(".");
        const passwordValid = passwordInput.value.trim().length > 0;

        if (!emailValid) {
            emailInput.classList.add("error");
            emailError.style.display = "block";
            loginBtn.disabled = true;
        } else {
            emailInput.classList.remove("error");
            emailInput.classList.add("valid");
            emailError.style.display = "none";
        }

        
        loginBtn.disabled = !(emailValid && passwordValid);
    }

    
    emailInput.addEventListener("input", validateForm);
    passwordInput.addEventListener("input", validateForm);
});


//register
document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const signupBtn = document.getElementById("signup-btn");
    const agreeYes = document.getElementById("agree-yes");

    function validateForm() {
        const nameValid = nameInput.value.trim().length > 0;
        const emailValid = emailInput.value.includes("@") && emailInput.value.includes(".");
        const passwordValid = passwordInput.value.length >= 6;
        const passwordsMatch = passwordInput.value === confirmPasswordInput.value;
        const termsAccepted = agreeYes.checked;

        signupBtn.disabled = !(nameValid && emailValid && passwordValid && passwordsMatch && termsAccepted);
    }

    nameInput.addEventListener("input", validateForm);
    emailInput.addEventListener("input", validateForm);
    passwordInput.addEventListener("input", validateForm);
    confirmPasswordInput.addEventListener("input", validateForm);
    agreeYes.addEventListener("change", validateForm);
});

