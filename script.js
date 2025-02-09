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
