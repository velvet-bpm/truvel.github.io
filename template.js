// Lista de juegos
const games = [
  {
    title: "Balatro",
    cover: "./balatro_game/cover.jpeg",
    background: "./balatro_game/banner.jpg",
    link: "./balatro_game/Balatro/index.html"
  },
  {
    title: "Spider-Man",
    cover: "https://i.ibb.co/m6CtX2B/spiderman.jpg",
    background: "https://i.ibb.co/MGJzhtP/spiderman-bg.jpg",
    link: "https://store.steampowered.com/app/1817070/Marvels_SpiderMan_Remastered/"
  },
  {
    title: "God of War",
    cover: "https://i.ibb.co/Y3VRqFr/godofwar.jpg",
    background: "https://i.ibb.co/2sKfjSt/godofwar-bg.jpg",
    link: "https://store.steampowered.com/app/1593500/God_of_War/"
  }
];

// Contenedor
const container = document.getElementById("games-container");

// Fondo dinámico
const body = document.body;

// Crear cards
games.forEach(game => {
  const card = document.createElement("div");
  card.classList.add("game-card");
  card.tabIndex = 0; // para que funcione con teclado

  const img = document.createElement("img");
  img.src = game.cover;
  img.alt = game.title;

  card.appendChild(img);
  container.appendChild(card);

  // Hover / Focus cambia fondo
  const setBackground = () => {
    body.style.backgroundImage = `url(${game.background})`;
  };

  card.addEventListener("mouseenter", setBackground);
  card.addEventListener("focus", setBackground);

  // Click abre link
  card.addEventListener("click", () => {
    window.open(game.link, "_blank");
  });
});
