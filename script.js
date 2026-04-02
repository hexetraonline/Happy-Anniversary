// =======================
// 📸 GLIMPSES (14)
// =======================
const grid = document.getElementById("glimpsesGrid");

for (let i = 1; i <= 14; i++) {
  const img = document.createElement("img");
  img.src = `images/glimpses/${i}.jpg`;
  grid.appendChild(img);
}


// =======================
// 🎬 STORY DATA (19)
// =======================
const storyData = [
  { img: "images/timeline/1.jpg", text: "The beginning ❤️" },
  { img: "images/timeline/2.jpg", text: "Wedding day 💍" },
  { img: "images/timeline/3.jpg", text: "First memories 😊" },
  { img: "images/timeline/4.jpg", text: "New journey ✨" },
  { img: "images/timeline/5.jpg", text: "Building life 🏡" },
  { img: "images/timeline/6.jpg", text: "Stronger together 💪" },
  { img: "images/timeline/7.jpg", text: "Blessings 🙏" },
  { img: "images/timeline/8.jpg", text: "Family grows 👨‍👩‍👧" },
  { img: "images/timeline/9.jpg", text: "Happy moments 😄" },
  { img: "images/timeline/10.jpg", text: "Joyful days 🌸" },
  { img: "images/timeline/11.jpg", text: "Together always ❤️" },
  { img: "images/timeline/12.jpg", text: "Strong bond 🔗" },
  { img: "images/timeline/13.jpg", text: "Years of love 💖" },
  { img: "images/timeline/14.jpg", text: "Beautiful memories 📸" },
  { img: "images/timeline/15.jpg", text: "Growing together 🌱" },
  { img: "images/timeline/16.jpg", text: "Happiness 😊" },
  { img: "images/timeline/17.jpg", text: "Still in love 💕" },
  { img: "images/timeline/18.jpg", text: "Forever ♾️" },
  { img: "images/timeline/19.jpg", text: "21 Years ❤️" }
];

let index = 0;
let interval;

// START STORY
function startStory() {
  document.getElementById("storyViewer").style.display = "flex";
  document.getElementById("bgMusic").play().catch(()=>{});
  showStory();

  interval = setInterval(nextStory, 3000); // auto slide
}

// SHOW
function showStory() {
  document.getElementById("storyImage").src = storyData[index].img;
  document.getElementById("storyCaption").innerText = storyData[index].text;
}

// NEXT (tap or auto)
function nextStory() {
  index++;

  if (index >= storyData.length) {
    clearInterval(interval);
    document.getElementById("storyViewer").style.display = "none";
    document.getElementById("endPage").style.display = "flex";
    return;
  }

  showStory();
}

// =======================
// 🔝 SCROLL BUTTON
// =======================
const btn = document.getElementById("topBtn");

window.onscroll = () => {
  btn.style.display = window.scrollY > 200 ? "flex" : "none";
};

btn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
