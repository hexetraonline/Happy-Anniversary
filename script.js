// 🎬 CURTAIN + MUSIC
window.addEventListener("load", () => {
  const curtain = document.getElementById("curtain");
  const music = document.getElementById("bgMusic");

  setTimeout(() => {
    curtain.classList.add("open");

    setTimeout(() => {
      music.play().catch(() => {
        console.log("Tap required");
      });
    }, 800);

    setTimeout(() => {
      curtain.style.display = "none";
    }, 2000);

  }, 1200);
});

// 🔝 SCROLL TO TOP
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

// 🎬 FADE IN
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});

// 🎵 FALLBACK MUSIC (USER INTERACTION)
document.body.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  }
}, { once: true });