import { useEateries, getEateries } from "./EateryProvider.js";
import { eateries } from "./eateriesHTMLprovider.js";

const contentTarget = document.querySelector(".eatery-card");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("eateryChosen", (event) => {
  const allEateries = useEateries();
  const eaterySelected = parseInt(event.detail.eateryThatWasChosen)
  const matchingEatery = allEateries.find(
    (eatery) => eatery.id === eaterySelected
  );
  console.log("match", matchingEatery);
  render(matchingEatery);
});

const render = (place) => {
  contentTarget.innerHTML = eateries(place);
};

// let allEateries = []
export const eateryList = () => {
  getEateries().then(() => {
    const allEateries = useEateries();
    render(allEateries);
  });
};
