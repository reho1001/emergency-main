const html = document.querySelector("html");
const btn = document.querySelector(".darkmode_btn");

function toggleTheme() {
  html.classList.toggle("dark");

  if (btn.textContent === "Dark mode") {
    btn.textContent = "Light mode";
  } else {
    btn.textContent = "Dark mode";
  }
  // Toggle "dark" på <html> elementet
}

btn.addEventListener("click", toggleTheme);
