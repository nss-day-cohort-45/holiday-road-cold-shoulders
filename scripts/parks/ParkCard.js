import { parkHTML } from "./ParkHTML.js";
import { getParks, useParks } from "./ParkProvider.js";

const eventHub = document.querySelector(".container");
// const parkCardElement = document.querySelector(".park-card");
const parkCardElement = document.querySelector(".itinerary-preview");

eventHub.addEventListener("parkId", (e) => {
  const parks = useParks();
  const matchingPark = parks.find((park) => park.id === e.detail.id);
  render(matchingPark);
});

export const parksList = () => {
  getParks().then(() => {
    let parks = useParks();
    render(parks);
  });
};

const render = (park) => {
  parkCardElement.innerHTML = parkHTML(park);
};

// TODO need to create default 