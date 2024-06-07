const fanBtn = document.querySelectorAll(".btn");
let imgFan = document.querySelector("#fanImage");

const speedMap = {
  off: "0s",
  on: "2s",
  s1: "1s",
  s2: "0.7s",
  s3: "0.3s",
};

const playFan = (key) => {
  imgFan.style.animationDuration = speedMap[key];
};

fanBtn.forEach((Button) => {
  Button.addEventListener("click", () => {
    playFan(Button.id);
  });
});
