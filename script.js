const messageButton =
    document.getElementById("messageButton");

const message =
    document.getElementById("message");

let isShown = false;


messageButton.addEventListener("click", function () {

    if (isShown === false) {

        message.textContent =
            "Terima kasih sudah melihat profile saya.";

        messageButton.textContent =
            "Sembunyikan Pesan";

        isShown = true;

    } else {

        message.textContent = "";

        messageButton.textContent =
            "Tampilkan Pesan";

        isShown = false;

    }

});