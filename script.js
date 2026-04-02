// MUSIC
const music = document.getElementById("bgMusic");

// TIMELINE
const timeline = Array.from({ length: 19 }, (_, i) => ({
  img: `images/timeline/${i + 1}.jpg`,
  text: "A beautiful moment in their journey ❤️"
}));

let current = 0;
let autoPlay;

function startTimeline() {
  current = 0;
  document.getElementById("storyModal").style.display = "flex";
  music.play();
  showSlide();
  autoPlay = setInterval(nextSlide, 2500);
}

function showSlide() {
  const img = document.getElementById("storyImg");
  const text = document.getElementById("storyText");

  img.style.opacity = 0;
  text.style.opacity = 0;

  setTimeout(() => {
    img.src = timeline[current].img;
    text.innerText = timeline[current].text;
    img.style.opacity = 1;
    text.style.opacity = 1;
  }, 200);
}

function nextSlide() {
  current++;

  if (current >= timeline.length) {
    clearInterval(autoPlay);
    document.getElementById("storyModal").style.display = "none";
    document.getElementById("endPage").style.display = "flex";
  } else {
    showSlide();
  }
}

// GLIMPSES
const glimpses = Array.from({ length: 14 }, (_, i) =>
  `images/glimpses/${i + 1}.jpg`
);

const grid = document.getElementById("glimpseGrid");

glimpses.forEach(img => {
  const image = document.createElement("img");
  image.src = img;
  image.onclick = () => openImage(img);
  grid.appendChild(image);
});

function openImage(src) {
  document.getElementById("imageModal").style.display = "flex";
  document.getElementById("previewImg").src = src;
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}

// SCROLL BUTTON
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
  topBtn.style.display =
    document.documentElement.scrollTop > 200 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// SCROLL ANIMATION
const sections = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  sections.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});