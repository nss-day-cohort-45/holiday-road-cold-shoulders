import { getParks, useParks } from "./ParkProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".dropdown-container");

contentTarget.addEventListener("click", (e) => {
  if (e.target.id.startsWith("park--")) {
    const [prefix, parkId, states] = e.target.id.split("--");
    const customEvent = new CustomEvent("parkId", {
      detail: {
        id: parkId,
        states,
      },
    });
    eventHub.dispatchEvent(customEvent);
  }
});

export const parkSelect = () => {
  getParks().then(() => {
    const parks = useParks();
    render(parks);
  });
};

const render = (parksCollection) => {
  contentTarget.innerHTML = `
  <div class="dropdown" id="parkSelect">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    Select Park...
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      ${parksCollection.map(
        (park) => `
      <li><a class="dropdown-item" href="#" id="park--${park.id}--${park.states}">${park.name}</a></li>`
      )}
    </ul>
  </div>
  `;
};
