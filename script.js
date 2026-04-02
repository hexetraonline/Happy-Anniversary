// 🎬 CURTAIN + MUSIC
window.addEventListener("load", () => {
  const curtain = document.getElementById("curtain");
  const music = document.getElementById("bgMusic");

  setTimeout(() => {
    if (curtain) curtain.classList.add("open");

    // Play music safely
    if (music) {
      setTimeout(() => {
        music.play().catch(() => {});
      }, 600);
    }

    // Remove curtain
    setTimeout(() => {
      if (curtain) curtain.remove();
    }, 2000);

  }, 800);
});

// 🔝 SCROLL BUTTON
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// ✨ FADE-IN
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});

// 🎵 MUSIC FALLBACK
document.body.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music && music.paused) {
    music.play();
  }
}, { once: true });

// 🎬 STORY BUTTON
function startStory() {
  alert("Story coming soon ❤️");
}
