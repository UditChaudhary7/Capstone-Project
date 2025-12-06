const buttonId = "show-signup";
const newButtonText = "Sign Up";
const myFavoriteColors = ["blue", "green", "red"];
const userSettings = {
    theme: "light",
    notifications: true,
    version: 1.0
};
const signupButton = document.querySelector(`.signup-btn`);
if (userSettings.version < 1.1) {
    console.log("App version is current.");
}
if (signupButton) {
    signupButton.textContent = newButtonText;
}
function logArrayData(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Color at index ${i}: ${arr[i]}`);
    }
}
logArrayData(myFavoriteColors);
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const emailInput = document.querySelector('input[type="email"]').value;
        const passwordInput = document.querySelector('input[placeholder="Must be 8 characters"]').value;
        console.log(`\n--- Form Submission Data ---`);
        console.log(`Email: ${emailInput}`);
        console.log(`Password Length: ${passwordInput.length}`);
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.textContent = 'Submitted!';
        if (passwordInput.length >= 8) {
            console.log("Password meets minimum length requirement.");
        } else {
            console.log("Password is too short!");
        }
        setTimeout(() => {
            submitBtn.textContent = 'Create Account';
        }, 2000);
    });
}