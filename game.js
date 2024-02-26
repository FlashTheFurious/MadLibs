// Sample JSON data
const levels = {
  level1: {
    sentence:
      "A Italian man went to a Restaurant in [blank] and saw a [blank] which made me [blank].",
    blanks: ["place", "noun", "verb"],
  },
  // Add more levels eventually
};

function loadGame(level) {
  const levelData = levels[level];
  const container = document.querySelector("#game");
  container.innerHTML = ""; // Clear previous content

  // Create input fields for each blank
  levelData.blanks.forEach((blank, index) => {
    const input = document.createElement("input");
    input.setAttribute("id", `input${index}`);
    input.setAttribute("placeholder", blank);
    container.appendChild(input);
  });
}

function generateStory() {
  const levelData = levels["level1"]; // Currently loading level 1 statically
  let sentence = levelData.sentence;

  levelData.blanks.forEach((blank, index) => {
    const input = document.querySelector(`#input${index}`);
    sentence = sentence.replace("[blank]", input.value);
  });

  // Display the generated story in the #story div instead of an alert
  const storyContainer = document.querySelector("#story");
  storyContainer.innerText = sentence;
}

// Initially load the first level
loadGame("level1");
