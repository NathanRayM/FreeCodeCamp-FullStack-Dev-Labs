let poll = new Map();

// Add Option Function
function addOption(option) {
  if (!option) {
    return "Option cannot be empty.";
  }
  if (!poll.has(option)) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  }
  return `Option "${option}" already exists.`;
}

// Vote Function
function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  const voters = poll.get(option);
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }
  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

// Options
addOption("Cats");
addOption("Dogs");
addOption("Birds");

// Votes
vote("Cats", 101);
vote("Dogs", 211);
vote("Birds", 350);

//Display Results Function
function displayResults() {
  let result = "Poll Results:\n";

  poll.forEach((voters, option) => {
    result += `${option}: ${voters.size} votes\n`;
  });
  return result.slice(0, -1);
}

console.log(displayResults());
