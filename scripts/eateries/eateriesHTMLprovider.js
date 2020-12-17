import { useEateries, getEateries } from "./EateryProvider.js";

const eventHub = document.querySelector(".container");

export const eateries = (eatery) => {
  return `
    <div class="card">
    <h3 class="card-header">Eatery</h3>
    <div class="card-body">
      <h5 class="card-title">${eatery.businessName}</h5>
      <p class="card-text">${eatery.description}</p>
      <p class="card-text">Wheel Chair Accessibility: ${
        eatery.ameneties.wheelchairAccessible ? "✅" : "🚫"
      }</p>
      <p> Wifi Access: ${eatery.ameneties.wifi ? "✅" : "🚫"}</p> 
      <button type="button" class="btn btn-outline-secondary" id="eateryModal" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button> 
    </div>
  </div>
    `;
};

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "eateryModal") {
    const bodyAccessible = clickEvent.ameneties.wheelchairAccessible ? "✅" : "🚫";
    const bodyWifi = clickEvent.ameneties.wifi ? "✅" : "🚫";

    let bodyStuff = `<p>${clickEvent.ameneties.wheelchairAccessible} ${bodyAccessible}</p>
                    <p>${clickEvent.ameneties.wifi} ${bodyWifi}</p>`;

    const customEvent = new CustomEvent("eateryDetail", {
      detail: {
        title: clickEvent.target.businessName,
        body: bodyStuff,
      },
    });

    eventHub.dispatchEvent(customEvent);
    
  }
});
