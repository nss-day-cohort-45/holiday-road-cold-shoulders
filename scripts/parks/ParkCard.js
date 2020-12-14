import { parkHTML } from "./ParkHTML.js";
import { getParks, useParks } from "./ParkProvider.js";

const parkCardElement =  document.querySelector(".park-card")

export const parksList = () => {
  getParks().then(() => {
    let parks = useParks();
    render(parks);
  });
};

const render = (parks) => {
  let parkCards = [];
  for (const park of parks) {
    parkCards.push(parkHTML(park));
  }
  parkCardElement.innerHTML = parkCards.join("");
};