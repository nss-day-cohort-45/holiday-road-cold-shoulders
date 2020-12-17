import { useEateries, getEateries } from "./EateryProvider.js";

const contentTarget = document.querySelector(".dropdown-container");
const dropdownTarget = document.querySelector(".eatery-dropdown");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", (event) => {
  

  if (event.target.id.startsWith("eatery")) {
    const [prefix, eateryId, state] = event.target.id.split("--");
    const customEvent = new CustomEvent("eateryChosen", {
      detail: {
        eateryThatWasChosen: eateryId,
        state,
      },
    });

    eventHub.dispatchEvent(customEvent);
  }
});

const render = (eateryCollection) => {
  contentTarget.innerHTML += `
    <div class="dropdown eaterySelect" id="eateryDrop">
 <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    Select An Eatery
  </button>
 <ul class="dropdown-menu eatery-dropdown" aria-labelledby="dropdownMenuButton">


${eateryCollection
  .map((eateryObj) => {
    let eateryPlace = eateryObj.businessName;
    let eateryState = eateryObj.state;
    let eateryID = eateryObj.id;
    return `<li><a class="dropdown-item" id="eatery--${eateryID}--${eateryState}">${eateryPlace} ${eateryState}</a></li> `;
  })
  .join("")}
</ul>
</div>`;
};





export const eaterySelect = () => {
  getEateries().then(() => {
    const eateries = useEateries();
    render(eateries);
  });
};
