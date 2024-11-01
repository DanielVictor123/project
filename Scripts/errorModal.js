function showModal() {
  document.getElementById("errorModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("errorModal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("errorModal");
  if (event.target === modal) {
    closeModal();
  }
};

function login(role) {
  const termsCheckbox = document.getElementById("termsCheckbox");
  if (!termsCheckbox.checked) {
    alert("Please agree to the terms and conditions before logging in.");
    return;
  }

  // REDIRECTS BASED ON CHOICE
  switch (role) {
    case "super":
      window.location.href = "/admin.html";
      break;
    case "sub":
      window.location.href = "/admin.html";
      break;
    case "semi":
      window.location.href = "/admin.html";
      break;
    default:
      break;
  }
}
