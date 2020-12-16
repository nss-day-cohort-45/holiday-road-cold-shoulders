import { useEateries } from "./EateryProvider.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("parkId", (event) => {
  const state = event.detail.states;
  const eatery = useEateries();
  const filteredEatery = eatery.find((eateryObj) => {
    if (eateryObj.state === state) {
      return eateryObj;
    }
    // document.getElementById("btn").disabled = true;
  });

  renderFilter(filteredEatery);
});

const renderFilter = (filteredObj) => {
  const contentTarget = document.querySelector(".eatery-dropdown");
  const newList = `<li><a class="dropdown-item" href=# id="eatery--${filteredObj.id}--${filteredObj.state}">${filteredObj.businessName} ${filteredObj.state}</a></li>`;

  contentTarget.innerHTML = newList;
};
