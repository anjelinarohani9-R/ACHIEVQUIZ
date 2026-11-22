function chooseRole(role) {
    const message = document.getElementById("message");

    if (!message) {
        alert("Elemen pesan tidak ditemukan!");
        return;
    }

    message.textContent =
        "Kamu memilih masuk sebagai " + role +
        ". Fitur dashboard akan kita buat pada tahap berikutnya.";
}

window.chooseRole = chooseRole;
