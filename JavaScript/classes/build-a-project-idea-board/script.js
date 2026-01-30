const projectStatus = {
  PENDING: { description: "Pending Execution" },
  SUCCESS: { description: "Executed Successfully" },
  FAILURE: { description: "Execution Failed" },
};

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }
  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title, ideas) {
    this.title = title;
    this.ideas = [];
  }

  pin(idea) {
    this.ideas.push(idea);
  }

  unpin(idea) {
    this.ideas.pop(idea);
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    let output = `${this.title} has ${this.count()} idea(s)\n`;

    if (this.ideas.length === 0) {
      return output;
    }
    output += this.ideas
      .map(
        (idea) =>
          `${idea.title} (${idea.status.description}) - ${idea.description}\n`
      )
      .join("\n");
    return output;
  }
}

//Testing
const board = new ProjectIdeaBoard("Tech Projects Board");

const idea1 = new ProjectIdea(
  "Smart Home System",
  "An integrated system to control lighting, temperature, and security devices remotely."
);

board.pin(idea1);
console.log(board.formatToString());
