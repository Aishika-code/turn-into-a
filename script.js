document.addEventListener("DOMContentLoaded", function() {
  let progress = 0;
  const progressBar = document.getElementById("progressBar");
  const loadingScreen = document.getElementById("loadingScreen");
  const farmContent = document.getElementById("farmContent");

  const loadingInterval = setInterval(function() {
    progress += 10;
    progressBar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(loadingInterval);
      setTimeout(() => {
        loadingScreen.style.display = "none";
        farmContent.style.display = "block";
      }, 500);
    }
  }, 500);
});
