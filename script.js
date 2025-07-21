window.addEventListener("load", () => {
  setTimeout(() => {
    const logo = document.getElementById("logoIntro");
    const main = document.getElementById("mainContent");

    if (logo && main) {
      logo.style.display = "none";
      main.style.display = "block";
    }
  }, 2500); // Hiện logo trong 2.5 giây
  true });
  });
window.addEventListener('load', () => {
  const sound = document.getElementById('introSound');
  sound.play().catch(() => {
    document.addEventListener('click', () => sound.play(), { once: true });
  });

  setTimeout(() => {
    document.querySelector('.logo-wrapper').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
  }, 2500);
});

