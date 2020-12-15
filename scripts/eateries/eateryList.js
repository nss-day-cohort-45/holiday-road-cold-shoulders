import { useEateries, getEateries } from "./EateryProvider.js";
import { eateries } from "./eateriesHTMLprovider.js";

const contentTarget = document.querySelector(".eatery-card");
const eventHub = document.querySelector(".container");


const render = (place) => {
  contentTarget.innerHTML = eateries(place).join("");
};

export const eateryList = () => {
  getEateries().then(() => {
    const allEateries = useEateries();
    render(allEateries);
  });
};
