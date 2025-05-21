const Button = document.getElementById("FormaButtonPrijava")

const Username = document.getElementById("username")
const Password = document.getElementById("password")

let UsernameValue = "Marko"
let PasswordValue = "1234"

Button.addEventListener("click", function (event) {
    event.preventDefault()
    if (Username.value === UsernameValue && Password.value === PasswordValue) {
        alert("Uspesno ste se prijavili")
        window.location.href = "index.html"
    } else {
        alert("Pogresno korisnicko ime ili lozinka")
    }
})

const img = document.getElementById('OsobnaSlika1');
const fileInput = document.getElementById('fileInput');

img.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        img.src = URL.createObjectURL(file);
    }
});