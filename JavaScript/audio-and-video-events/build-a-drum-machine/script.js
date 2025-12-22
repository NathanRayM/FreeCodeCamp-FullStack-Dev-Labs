// Variables
const drumPad = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");
const powerToggle = document.querySelector(".power-control .select");
const powerStatus = document.querySelector(".power-status");
const volumeSlider = document.querySelector(
  '.volume-slider input[type="range"]'
);

// Click Event For Drum Pads
drumPad.forEach((pad) => {
  pad.addEventListener("click", () => {
    let audio = pad.querySelector(".clip");
    let id = pad.id;
    let displayText = id.replace("-", " ");
    if (!powerOn) return;
    audio.currentTime = 0;
    audio.play();
    display.innerText = displayText;
  });
});

// Keydown Event For Drum Pads
document.addEventListener("keydown", (event) => {
  let keyPressed = event.key.toUpperCase();
  let audio = document.getElementById(keyPressed);
  if (audio) {
    let id = audio.parentElement.id;
    let displayText = id.replace("-", " ");
    if (!powerOn) return;
    audio.currentTime = 0;
    audio.play();
    display.innerText = displayText;
  }
});

// Power Button Toggle
let powerOn = true;

powerToggle.addEventListener("click", () => {
  powerOn = !powerOn;
  powerToggle.classList.toggle("on", powerOn);
  if (powerOn) {
    powerStatus.textContent = "Power: On";
  } else {
    powerStatus.textContent = "Power: Off";
  }
});

// Input Event For Slider Volume
volumeSlider.addEventListener("input", () => {
  let volumeLevel = volumeSlider.value;
  drumPad.forEach((pad) => {
    let audio = pad.querySelector(".clip");
    audio.volume = volumeLevel;
  });
});
