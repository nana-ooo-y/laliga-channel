const players = [
    {
        name: "Thibaut Courtois",
        position: "GK",
        club: "Real Madrid",
        image: "images/Thibaut-Courtois.jpeg"
    },
    {
        name: "Pedri",
        position: "MF",
        club: "FC Barcelona",
        image: "images/Pedri.jpeg"
    },
    {
        name: "Takefusa Kubo",
        position: "MF",
        club: "Real Sociedad",
        image: "images/Takefusa-Kubo.jpeg"
    },
    {
        name: "Lamine Yamal",
        position: "FW",
        club: "FC Barcelona",
        image: "images/Lamine-Yamal.jpeg"
    },
    {
        name: "Kylian Mbappé",
        position: "FW",
        club: "Real Madrid",
        image: "images/Kylian-Mbappé.jpeg"
    },
];

const playerList = document.querySelector(".player-list");
const searchInput = document.querySelector("#player-search");
const filterButtons = document.querySelectorAll(
    ".filter-buttons button"
);

let selectedPosition = "ALL";

function displayPlayers(playerData) {

    playerList.innerHTML = "";

    if (playerData.length === 0) {
    playerList.innerHTML = `
        <p class="no-results">
            No players found.
        </p>
    `;
    return;
}

    playerData.forEach((player) => {

        const card = document.createElement("article");
        card.classList.add("player-card");

        card.innerHTML = `
            <img
                src="${player.image}"
                alt="${player.name}"
                class="player-image"
            >

            <div class="player-info">
                <p class="player-position">
                    ${player.position}
                </p>

                <h3>${player.name}</h3>

                <p class="player-club">
                    ${player.club}
                </p>
            </div>
        `;

        playerList.appendChild(card);
    });
}

displayPlayers(players);

searchInput.addEventListener("input", filterPlayers);

function filterPlayers() {

    const keyword = searchInput.value.toLowerCase();

    const filteredPlayers = players.filter((player) => {

        const matchesName =
            player.name.toLowerCase().includes(keyword);

        const matchesPosition =
            selectedPosition === "ALL" ||
            player.position === selectedPosition;

        return matchesName && matchesPosition;
    });

    displayPlayers(filteredPlayers);
}

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedPosition = button.dataset.position;

        filterPlayers();
    });

});