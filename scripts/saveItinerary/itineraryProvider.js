const eventHub = document.querySelector(".container");
let itineraries = [];

const dispatchStateChangeEvent = () => {
  const saveStateChangedEvent = new CustomEvent("saveStateChanged");

  eventHub.dispatchEvent(saveStateChangedEvent);
};

export const useItineraries = () => itineraries.slice();

export const getItineraries = () => {
  return fetch("http://localhost:8089/itineraries")
    .then((response) => response.json())
    .then((parsedItineraries) => {
      itineraries = parsedItineraries;
    });
};

export const saveItineraries = (itinerary) => {
  let stringifiedObj = JSON.stringify(itinerary);
  return fetch("http://localhost:8089/itineraries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: stringifiedObj,
  })
    .then(getItineraries)
    .then(dispatchStateChangeEvent);
};
