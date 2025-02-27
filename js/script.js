
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        let isValid = true;

        // Validasi Nama
        let nameInput = document.getElementById("name");
        if (nameInput.value.trim() === "") {
            alert("Nama tidak boleh kosong!");
            isValid = false;
        }

        // Validasi Email
        let emailInput = document.getElementById("email");
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value)) {
            alert("Masukkan alamat email yang valid!");
            isValid = false;
        }

        // Validasi Pilihan
        let interestSelect = document.getElementById("interest");
        if (interestSelect.value === "Select option") {
            alert("Silakan pilih minat Anda!");
            isValid = false;
        }

        // Cegah form terkirim jika ada kesalahan
        if (!isValid) {
            event.preventDefault();
        }

window.onbeforeunload = () => {
            for (const form of document.getElementsByTagName("form")) {
              form.reset();
            }
          };