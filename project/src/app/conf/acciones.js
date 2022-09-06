const lander_pages = document.getElementById("lander_pages");
const main_page = document.getElementById("main_pages");
const frames = document.getElementById("frames");

function showWelcomeMessage() {
  frames.src = "private/client/index.html?lang=es";
  lander_pages.style.display = "none"; 
  main_page.style.display = "initial";
}
