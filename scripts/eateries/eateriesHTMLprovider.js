import { useEateries, getEateries } from "./EateryProvider.js";

const eventHub = document.querySelector(".container");

export const eateries = (eatery) => {
  return `
    <div class="card">
    <h3 class="card-header">Eatery</h3>
    <div class="card-body" id="eateryCardValue">
      <h5 class="card-title" id="eateryName">${eatery.businessName}</h5>
      <p class="card-text" id="eateryDesc">${eatery.description}</p>
      <button type="button" class="btn btn-outline-secondary" id="eateryModal--${eatery.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button> 
    </div>
    </div>
      
  
    `;
};

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id.startsWith("eateryModal--")) {
    const eateryId = clickEvent.target.id.split("--");

    const customEvent = new CustomEvent("eateryDetail", {
      detail: {
        id: parseInt(eateryId[1]),
      },
    });

    eventHub.dispatchEvent(customEvent);
  }
});
