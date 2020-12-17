import { useEateries, getEateries } from "./EateryProvider.js";

const eventHub = document.querySelector(".container");

export const eateries = (eatery) => {
  return `
    <div class="card">
    <h3 class="card-header">Eatery</h3>
    <div class="card-body" id="eateryCardValue">
      <h5 class="card-title" id="eateryName">${eatery.businessName}</h5>
      <p class="card-text" id="eateryDesc">${eatery.description}</p>
      <p class="isHidden" id="wheelchair"> ${eatery.ameneties.wheelchairAccessibility}</p>
      <p class="isHidden" id="wifi"> ${eatery.ameneties.wifi}</p>
      <button type="button" class="btn btn-outline-secondary" id="eateryModal" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button> 
    </div>
    </div>
  
    `;
};

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "eateryModal") {
    let eateryName = document.getElementById("eateryName")
    let wheelchair = document.getElementByID("wheelchair")
    let wifi = document.getElementByID("wifi")
    const bodyAccessible = wheelchair ? "✅" : "🚫";
    const bodyWifi = wifi ? "✅" : "🚫";

    let bodyStuff = `<p>wheelchair accessibility: ${bodyAccessible}</p>
                    <p> wifi: ${bodyWifi}</p>`;

    const customEvent = new CustomEvent("eateryDetail", {
      detail: {
        title: eateryName,
        body: bodyStuff,
      },
    });

    eventHub.dispatchEvent(customEvent);
    
  }
});
