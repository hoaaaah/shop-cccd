window.addEventListener("load", () => {
  setTimeout(() => {
    const logo = document.getElementById("logoIntro");
    const main = document.getElementById("mainContent");

    if (logo && main) {
      logo.style.display = "none";
      main.style.display = "block";
    }
  }, 2500); // Hiện logo trong 2.5 giây
});
