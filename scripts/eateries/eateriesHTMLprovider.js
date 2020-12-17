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
      <a href="#" class="btn btn-secondary" id-"eateryDetail">Details</a>
    </div>
  </div>
    `;
};

eventHub.addEventListener("click", (clickEvent) => {
  // const bodyWheelchair = event.target.ameneties.wheelchairAccessible;
  // const bodyWifi = event.target.ameneties.wifi;
  if (clickEvent.target.id === "eateryDetail") {
    const bodyAccessible = eatery.ameneties.wheelchairAccessible ? "✅" : "🚫";
    const bodyWifi = eatery.ameneties.wifi ? "✅" : "🚫";

    let bodyStuff = `<p>${eatery.ameneties.wheelchairAccessible} ${bodyAccessible}</p>
                    <p>${eatery.ameneties.wifi} ${bodyWifi}</p>`;

    const customEvent = new CustomEvent("eateryDetail", {
      detail: {
        title: event.target.businessName,
        body: bodyStuff,
      },
    });

    eventHub.dispatchEvent(customEvent);
    console.log("event", customEvent);
  }
});
