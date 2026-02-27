const brandLogo = document.getElementById("brandLogo");
const logoFallback = document.getElementById("logoFallback");

function showLogoFallback() {
  if (!brandLogo || !logoFallback) return;
  brandLogo.classList.add("is-hidden");
  logoFallback.classList.add("is-visible");
}

function setupLogoFallback() {
  if (!brandLogo) return;

  if (brandLogo.complete && brandLogo.naturalWidth <= 1) {
    showLogoFallback();
  }

  brandLogo.addEventListener("error", showLogoFallback);
  brandLogo.addEventListener("load", () => {
    if (brandLogo.naturalWidth <= 1 || brandLogo.naturalHeight <= 1) {
      showLogoFallback();
    }
  });
}

setupLogoFallback();
