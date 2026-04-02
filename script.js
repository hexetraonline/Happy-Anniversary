// 🎬 CURTAIN + MUSIC + FADE
window.addEventListener("load", () => {
  const curtain = document.getElementById("curtain");
  const music = document.getElementById("bgMusic");

  setTimeout(() => {
    curtain.classList.add("open");

    // Fade in content
    document.body.classList.add("loaded");

    // Start music
    setTimeout(() => {
      music.play().catch(() => {
        console.log("Tap required for audio");
      });
    }, 800);

    // Remove curtain
    setTimeout(() => {
      curtain.style.display = "none";
    }, 2200);

  }, 1200);
});

// 🔝 SCROLL BUTTON
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
  if (window.scrollY > 200) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// ✨ FADE-IN ON SCROLL
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});

// 🎵 FALLBACK MUSIC
document.body.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  }
}, { once: true });

// 🎬 STORY BUTTON
function startStory() {
  alert("Timeline story coming soon ❤️");
}
