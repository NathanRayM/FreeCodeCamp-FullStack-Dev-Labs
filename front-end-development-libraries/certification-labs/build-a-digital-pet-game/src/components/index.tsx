import { useState, useEffect } from "react";

enum PetAction {
  EAT,
  PLAY,
  SLEEP,
}

enum PetMood {
  HAPPY,
  EXCITED,
  CONTENT,
  SAD,
  TIRED,
  SICK,
  HUNGRY,
}

const moodEmoji: Record<PetMood, string> = {
  [PetMood.HAPPY]: "😊",
  [PetMood.EXCITED]: "🤩",
  [PetMood.CONTENT]: "😌",
  [PetMood.SAD]: "😢",
  [PetMood.TIRED]: "😴",
  [PetMood.SICK]: "🤒",
  [PetMood.HUNGRY]: "😋",
};

const Sections = () => {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(true);
  const [petName, setPetName] = useState<string>("");

  const [hunger, setHunger] = useState<number>(0);
  const [energy, setEnergy] = useState<number>(100);
  const [happiness, setHappiness] = useState<number>(100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHunger(100);
      setEnergy(100);
      setHappiness(0);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isGameStarted]);

  const handleGameStart = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = document.getElementById("pet-name") as HTMLInputElement;
    if (input.value.trim()) {
      setPetName(input.value.trim());
      setIsGameStarted(false);
    }
  };

  const handleAction = (action: PetAction) => {
    switch (action) {
      case PetAction.EAT:
        if (hunger === 0 && energy === 100) return;
        setHunger((h) => numLimiter(h - 10));
        setEnergy((e) => numLimiter(e + 10));
        break;
      case PetAction.PLAY:
        if (energy === 0 && happiness === 100) return;
        setEnergy((e) => numLimiter(e - 10));
        setHappiness((h) => numLimiter(h + 10));
        break;
      case PetAction.SLEEP:
        if (hunger === 100 && energy === 100) return;
        setHunger((h) => numLimiter(h + 10));
        setEnergy((e) => numLimiter(e + 10));
    }
  };

  const numLimiter = (value: number): number =>
    Math.max(0, Math.min(100, value));

  function getPetMood(
    hunger: number,
    energy: number,
    happiness: number
  ): PetMood {
    if (hunger > 70) return PetMood.HUNGRY;
    if (energy < 30) return PetMood.TIRED;
    if (happiness < 30) return PetMood.SAD;
    if (happiness > 80 && energy > 70) return PetMood.EXCITED;
    if (happiness > 60) return PetMood.HAPPY;
    return PetMood.CONTENT;
  }

  let mood = getPetMood(hunger, energy, happiness);
  console.log(moodEmoji[mood]);

  return (
    <>
      {!isGameStarted && (
        <section className="base-container game-container ">
          <div className="pet-screen">
            <div className="pet-sprite">{moodEmoji[mood]}</div>
            <h2 className="pet-name">{petName}</h2>
          </div>
          <div className="pet-buttons">
            <button
              className="pet-button pet-buttons-left"
              id="eat-action"
              onClick={() => handleAction(PetAction.EAT)}
            >
              EAT
            </button>
            <button
              className="pet-button pet-buttons-center"
              id="play-action"
              onClick={() => handleAction(PetAction.PLAY)}
            >
              PLAY
            </button>
            <button
              className="pet-button pet-buttons-right"
              id="sleep-action"
              onClick={() => handleAction(PetAction.SLEEP)}
            >
              SLEEP
            </button>
          </div>
        </section>
      )}

      {!isGameStarted && (
        <section className="stats-grid">
          <div className="stat-bar stat">
            <div className="stat-header">
              <div className="stat-label">
                <span className="stat-icon">🍽️</span>
                <span className="stat-name">Hunger</span>
              </div>
              <span className="stat-value">{hunger}%</span>
            </div>
            <div className="stat-progress">
              <div className="stat-fill high"></div>
            </div>
          </div>

          <div className="stat-bar stat">
            <div className="stat-header">
              <div className="stat-label">
                <span className="stat-icon">😊</span>
                <span className="stat-name">Happiness</span>
              </div>
              <span className="stat-value">{happiness}%</span>
            </div>
            <div className="stat-progress">
              <div className="stat-fill high"></div>
            </div>
          </div>

          <div className="stat-bar stat">
            <div className="stat-header">
              <div className="stat-label">
                <span className="stat-icon">⚡</span>
                <span className="stat-name">Energy</span>
              </div>
              <span className="stat-value">{energy}%</span>
            </div>
            <div className="stat-progress">
              <div className="stat-fill high"></div>
            </div>
          </div>
        </section>
      )}

      <section className="base-container info-panel">
        {isGameStarted && (
          <form className="start-questions" onSubmit={handleGameStart}>
            <label htmlFor="pet-name">What is your pet's name?</label>
            <input id="pet-name" name="pet-name" required type="text" />
            <button id="set-name-btn" type="submit">
              Start Game
            </button>
          </form>
        )}

        {!isGameStarted && (
          <div id="hud">
            <p id="pet-species">Species: Cat</p>
            <p id="pet-fact">
              <b>Pet Fact:</b> Ragdoll cats live up to their name: they will
              literally go limp, with relaxed muscles, when lifted by a human
            </p>
          </div>
        )}
      </section>
    </>
  );
};

const PetGame = () => {
  return (
    <main>
      <header>
        <h1>Digital Pet Game</h1>
        <p>Take care of your virtual companion!</p>
      </header>
      <Sections />
    </main>
  );
};
export default PetGame;
