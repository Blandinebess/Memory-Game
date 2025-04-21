const gameBoard = document.querySelector(".game-board");
const icons = ["💡", "🎲", "💡", "🎲", "🎨", "🎨", "🎭", "🎭"];
let shuffledIcons = icons.sort(() => Math.random() - 0.5);
let flippedCards = [];

shuffledIcons.forEach((icon) => {
  let card = document.createElement("div");
  card.classList.add("card");
  card.dataset.icon = icon;
  card.innerHTML = "?";
  card.addEventListener("click", flipCard);
  gameBoard.appendChild(card);
});

function flipCard() {
  if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
    this.classList.add("flipped");
    this.innerHTML = this.dataset.icon;
    flippedCards.push(this);
  }

  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if (flippedCards[0].dataset.icon === flippedCards[1].dataset.icon) {
    flippedCards.forEach((card) => (card.style.pointerEvents = "none"));
  } else {
    flippedCards.forEach((card) => {
      card.classList.remove("flipped");
      card.innerHTML = "?";
    });
  }
  flippedCards = [];
}
