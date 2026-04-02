// 🎬 CURTAIN + MUSIC
window.onload = () => {
  const curtain = document.getElementById("curtain");
  const music = document.getElementById("bgMusic");

  setTimeout(() => {
    if (curtain) curtain.classList.add("open");

    if (music) {
      setTimeout(() => {
        music.play().catch(() => {});
      }, 600);
    }

    setTimeout(() => {
      if (curtain) curtain.remove();
    }, 1800);

  }, 800);
};

// 🔝 SCROLL BUTTON
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
  topBtn.style.display = window.scrollY > 200 ? "flex" : "none";
};

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// =======================
// 🎬 TIMELINE (19 PHOTOS)
// =======================

const storyData = [
  { img: "images/timeline/1.jpg", text: "The beginning ❤️" },
  { img: "images/timeline/2.jpg", text: "Wedding day 💍" },
  { img: "images/timeline/3.jpg", text: "First smile together 😊" },
  { img: "images/timeline/4.jpg", text: "New journey started ✨" },
  { img: "images/timeline/5.jpg", text: "Building memories 🏡" },
  { img: "images/timeline/6.jpg", text: "Stronger together 💪" },
  { img: "images/timeline/7.jpg", text: "Blessed moments 🙏" },
  { img: "images/timeline/8.jpg", text: "Family grows 👨‍👩‍👧" },
  { img: "images/timeline/9.jpg", text: "Smiles everywhere 😄" },
  { img: "images/timeline/10.jpg", text: "Happy days 🌸" },
  { img: "images/timeline/11.jpg", text: "Together always ❤️" },
  { img: "images/timeline/12.jpg", text: "Unbreakable bond 🔗" },
  { img: "images/timeline/13.jpg", text: "Years of love 💖" },
  { img: "images/timeline/14.jpg", text: "Cherished memories 📸" },
  { img: "images/timeline/15.jpg", text: "Growing together 🌱" },
  { img: "images/timeline/16.jpg", text: "Endless happiness 😊" },
  { img: "images/timeline/17.jpg", text: "Still in love 💕" },
  { img: "images/timeline/18.jpg", text: "Forever together ♾️" },
  { img: "images/timeline/19.jpg", text: "21 Years Complete ❤️" }
];

let index = 0;

function startStory() {
  document.getElementById("storyViewer").style.display = "flex";
  showStory();
}

function showStory() {
  document.getElementById("storyImage").src = storyData[index].img;
  document.getElementById("storyCaption").innerText = storyData[index].text;
}

function nextStory() {
  index = (index + 1) % storyData.length;
  showStory();
}

function prevStory() {
  index = (index - 1 + storyData.length) % storyData.length;
  showStory();
}

function closeStory() {
  document.getElementById("storyViewer").style.display = "none";
}

// =======================
// 📸 GLIMPSES (14 PHOTOS)
// =======================

const glimpsesGrid = document.getElementById("glimpsesGrid");

for (let i = 1; i <= 14; i++) {
  const img = document.createElement("img");
  img.src = `images/glimpses/${i}.jpg`;
  glimpsesGrid.appendChild(img);
}
