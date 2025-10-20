// object of Team players

let footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Ricardo Bochini",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Claudio Borghi",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "José Luis Brown",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Daniel Passarella",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Néstor Clausen",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "José Luis Cuciuffo",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Diego Maradona",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Héctor Enrique",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Oscar Garré",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Ricardo Giusti",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Luis Islas",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Julio Olarticoechea",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Pedro Pasculli",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Carlos Tapia",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Héctor Zelada",
      position: "midfielder",
      isCaptain: false,
    },
  ],
};

// variables getting id's from HTML

const headCoach = document.getElementById("head-coach");
const teamName = document.getElementById("team");
const teamYear = document.getElementById("year");
const allPlayers = document.getElementById("player-cards");
const dropDown = document.getElementById("players");

// adding team, year, and coach details to HTML

headCoach.innerHTML = "Carlos Bilardo";
teamName.innerHTML = "Argentina";
teamYear.innerHTML = "1986";

//accessing the players array

const players = footballTeam.players;

//Reusable function to display player cards

function displayPlayers(playersArray) {
  playersArray.forEach(function (player) {
    const playerCard = document.createElement("div");
    playerCard.classList.add("player-card");
    const playerName = document.createElement("h2");
    const playerPosition = document.createElement("p");

    if (player.isCaptain) {
      playerName.textContent = `${player.name} (Captain)`;
    } else {
      playerName.textContent = player.name;
    }
    playerCard.appendChild(playerName);
    playerPosition.textContent = `Position: ${player.position}`;
    playerCard.appendChild(playerPosition);

    allPlayers.appendChild(playerCard);
  });
}

//Display all players on page load

displayPlayers(footballTeam.players);

//Event listener for dropdown filtering

dropDown.addEventListener("change", function () {
  const selectedPosition = dropDown.value;
  allPlayers.innerHTML = "";
  let filteredPlayers;

  if (selectedPosition === "all") {
    filteredPlayers = footballTeam.players;
  } else {
    filteredPlayers = footballTeam.players.filter(function (player) {
      return player.position === selectedPosition;
    });
  }
  displayPlayers(filteredPlayers);
});
