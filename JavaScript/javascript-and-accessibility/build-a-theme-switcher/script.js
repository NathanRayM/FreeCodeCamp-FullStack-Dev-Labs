let themes = [
  {
    name: "light",
    message: "Hello sunshine — Light theme is on!",
  },
  {
    name: "dark",
    message: "The night is yours — Dark theme is on!",
  },
  {
    name: "ocean",
    message: "Blue skies and high tides — Ocean theme is on!",
  },
  {
    name: "nord",
    message: "The frost has settled - Nord theme is on!",
  },
];

const themeSwitchBtn = document.getElementById("theme-switcher-button");
const themeDropDown = document.getElementById("theme-dropdown");
const dropDownItem = document.querySelectorAll(".dropdown-item");
const newMessage = document.querySelector('[aria-live="polite"]');

themeSwitchBtn.addEventListener("click", function () {
  if (themeDropDown.hasAttribute("hidden")) {
    themeDropDown.removeAttribute("hidden");
    themeSwitchBtn.setAttribute("aria-expanded", "true");
  } else {
    themeDropDown.setAttribute("hidden", "");
    themeSwitchBtn.setAttribute("aria-expanded", "false");
  }
});

dropDownItem.forEach((item) => {
  item.addEventListener("click", function () {
    document.body.className = "";
    document.body.classList.add(item.id);
    const themeName = item.id.replace("theme-", "");
    const selectedTheme = themes.find((t) => t.name === themeName);
    newMessage.textContent = selectedTheme.message;
  });
});
