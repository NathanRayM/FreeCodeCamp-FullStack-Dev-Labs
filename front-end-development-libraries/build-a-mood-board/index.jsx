export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img src={image} className="mood-board-image"></img>
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  const cards = [
    {
      color: "green",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "Caribbean",
    },
    {
      color: "purple",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "Gawadar Beach",
    },
    {
      color: "blue",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "Cape Town",
    },
    {
      color: "pink",
      image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
      description: "Suez Canal",
    },
    {
      color: "orange",
      image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
      description: "Santorini",
    },
    {
      color: "grey",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
      description: "Istanbul",
    },
  ];

  return (
    <div className="mood-board">
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      {cards.map((card) => (
        <MoodBoardItem
          key={card.description}
          color={card.color}
          image={card.image}
          description={card.description}
        />
      ))}
    </div>
  );
}
