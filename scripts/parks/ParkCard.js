import { parksDialog } from "./ParkDialog.js";
import { parkHTML } from "./ParkHTML.js";
import { getParks, useParks } from "./ParkProvider.js";

const eventHub = document.querySelector(".container");
const parkCardElement = document.querySelector(".park-card");

eventHub.addEventListener("parkId", (e) => {
  const parks = useParks();
  const matchingPark = parks.find((park) => park.id === e.detail.id);
  render(matchingPark);
  new Splide("#image-slider", {
    trimSpace: true,
    rewind: true,
    heightRatio: 0.25,
    autoWidth: true,
    gap: "2em",
  }).mount();
});

const parksList = () => {
  getParks().then(() => {
    let parks = useParks();
    render(parks);
  });
};

const render = (park) => {
  parkCardElement.innerHTML = `${parkHTML(park)} ${parksDialog()}`;
};

// TODO need to create default
