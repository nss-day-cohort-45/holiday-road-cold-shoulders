import { useEateries, getEateries } from "./EateryProvider.js";
import { eateries } from "./eateriesHTMLprovider.js";

const contentTarget = document.querySelector(".eatery-card");
const eventHub = document.querySelector(".container");

// eventHub.addEventListener("parkID", (event) => {
//   let allEateries = useEateries();
//   if (event.target.state === "0") {
//     const eateryState = event.detail.state;
//     const matchingEateries = allEateries.find(
//       (eatery) => eatery.state === eateryState
//     );
//     const restaurant = allEateries.businessName;
//     contentTarget.innerHTML = restaurant;
//     console.log("restaurant", restaurant)
//   }
// });

eventHub.addEventListener("parkId", (event) => {
    const eateries = useEateries();
    const matchingEatery = eateries.find((eatery) => eatery.state === event.detail.state);
    console.log("matching", matchingEatery)
    render(matchingEatery);
  });
  

// const render = (eateryArray) => {
//   const allEateriesConverted = eateryArray
//     .map((place) => eateries(place))
//     .join("");

//   contentTarget.innerHTML = allEateriesConverted;
// };

const render = (place) => {
  contentTarget.innerHTML = eateries(place).join("");
};

export const eateryList = () => {
  getEateries().then(() => {
    const allEateries = useEateries();
    render(allEateries);
  });
};
