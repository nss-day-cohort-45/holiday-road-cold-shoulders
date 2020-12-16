import { useEateries, getEateries } from "./EateryProvider.js";

const contentTarget = document.querySelector(".dropdown-container");
const dropdownTarget = document.querySelector(".eatery-dropdown");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", (event) => {
  console.log("event", event.target.state);

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
    <div class="dropdown">
 <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    Select An Eatery
  </button>
 <ul class="dropdown-menu eatery-dropdown" aria-labelledby="dropdownMenuButton">
<li><a class="dropdown-item" href="#">

</a></li>

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



eventHub.addEventListener("parkId", (e) => {
  let state = e.detail.states;

  getEateries(state).then(() => {
    const eateries = useEateries();
    eateries.find((state) => {
      if (state === eateries.state) {
      }
      renderDropdown(eateries);
    });
  });
});

export const eaterySelect = () => {
  getEateries().then(() => {
    const eateries = useEateries();
    render(eateries);
  });
};
