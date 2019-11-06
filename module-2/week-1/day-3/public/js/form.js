const eyeIcon = document.getElementById("eye");
const passwordField = document.getElementById("password");

function togglePasswordDisplay() {
  if (eyeIcon.classList.contains("fa-eye")) {
    eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    passwordField.type = "text";
  } else {
    eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
    passwordField.type = "password";
  }
}

eyeIcon.onclick = togglePasswordDisplay;
