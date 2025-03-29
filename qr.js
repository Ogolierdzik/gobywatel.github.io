var error = document.querySelector(".error");

document.querySelectorAll(".action").forEach((element) => {
    element.addEventListener('click', () => {
        showError();
    });
});

function showError() {
    const errorBox = document.querySelector('.error_box');
    errorBox.innerHTML = `
        <div class="loading"></div>
        <p class="error_title">Ładowanie...</p>
    `;
    
    error.classList.add("error_open");
    
    setTimeout(() => {
        errorBox.innerHTML = `
            <div class="error_icon">
                <svg width="70" height="70" viewBox="0 0 70 70">
                    <circle cx="35" cy="35" r="35" fill="#FF3B30"/>
                    <path d="M47 23L23 47M23 23L47 47" stroke="white" stroke-width="4" stroke-linecap="round"/>
                </svg>
            </div>
            <p class="error_title">Coś poszło nie tak...</p>
            <p class="error_description">Wystąpił błąd podczas skanowania kodu QR.<br> Spróbuj ponownie później.<br> ERR_SERVER_CONNECTION_FALIURE</p>
            <div class="error_button close">Rozumiem</div>
        `;
    }, 2000);
} 