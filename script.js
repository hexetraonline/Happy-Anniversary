// GLIMPSES
const grid = document.getElementById("glimpsesGrid");

for (let i = 1; i <= 14; i++) {
  const img = document.createElement("img");
  img.src = `images/glimpses/${i}.jpg`;
  grid.appendChild(img);
}

// STORY DATA
const storyData = [
  { img: "images/timeline/1.jpg", text: "A precious Nikah day moment of our parents beginning their journey together" },
  { img: "images/timeline/2.jpg", text: "The official wedding portrait marking their special day – April 3, 2005" },
  { img: "images/timeline/3.jpg", text: "Groom’s attire carefully prepared for the big day" },
  { img: "images/timeline/4.jpg", text: "Groom sharing joyful moments with friends before the ceremony" },
  { img: "images/timeline/5.jpg", text: "Little guests adding charm to the wedding celebration" },
  { img: "images/timeline/6.jpg", text: "The blessings of elders that shaped our parents’ beautiful journey" },
  { img: "images/timeline/7.jpg", text: "Guests captured during the wedding function" },
  { img: "images/timeline/8.jpg", text: "Groom seated gracefully during the ceremony" },
  { img: "images/timeline/9.jpg", text: "A sacred prayer during the wedding rituals" },
  { img: "images/timeline/10.jpg", text: "Groom arriving for the wedding in a decorated car" },
  { img: "images/timeline/a.jpg", text: "Travel moment 🚗" },
  { img: "images/timeline/11.jpg", text: "The lively wedding procession filled with excitement" },
  { img: "images/timeline/12.jpg", text: "Groom walking forward to begin a new chapter of life" },
  { img: "images/timeline/13.jpg", text: "Guests enjoying moments during the wedding gathering" },
  { img: "images/timeline/14.jpg", text: "Bride seated beautifully during the ceremony" },
  { img: "images/timeline/15.jpg", text: "Family gathered together for the wedding celebration" },
  { img: "images/timeline/16.jpg", text: "Happiness 😊" },
  { img: "images/timeline/b.jpg", text: "Another journey ✈️" },
  { img: "images/timeline/17.jpg", text: "Wedding rituals in progress as traditions are followed" },
  { img: "images/timeline/18.jpg", text: "Bride and groom standing together on their wedding day" },
  { img: "images/timeline/19.jpg", text: "A complete family portrait from the wedding celebration" }
];

let index = 0;
let interval;

function startStory() {
  document.getElementById("storyViewer").style.display = "flex";

  const music = document.getElementById("bgMusic");
  music.currentTime = 0;
  music.play().catch(()=>{});

  showStory();
  interval = setInterval(nextStory, 3000);
}

function showStory() {
  document.getElementById("storyImage").src = storyData[index].img;
  document.getElementById("storyCaption").innerText = storyData[index].text;
}

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

function goHome() {
  document.getElementById("endPage").style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
  index = 0;
}

// TOP BUTTON
const btn = document.getElementById("topBtn");

window.onscroll = () => {
  btn.style.display = window.scrollY > 200 ? "flex" : "none";
};

btn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
