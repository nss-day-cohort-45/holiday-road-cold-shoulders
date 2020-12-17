


//import for save function here

const contentTarget = document.querySelector(".save-button");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", (clickEvent) => {
if (clickEvent.target.id === "saveItinerary") {
    let park = document.querySelector("card-title");
    let attraction = document.querySelector("#attractionName");
    let eatery = document.querySelector("#eateryName");

    if (park.value && attraction.value && eatery.value !== "") {
    const newItinerary = {
        park: park.value,
        attraction: attraction.value,
        eatery: eatery.value,
        date: date.now(),
    };
    saveItinerary(newItinerary);
    park.value = "";
    attraction.value = "";
    eatery.value = "";
    }
}
});

export const showSaveButton = () => {
    contentTarget.innerHTML = `<div class="card save-card">
    <h6 class="card-header">Save your itinerary</h6>
    <div class="card-body" id="saveCardValue">
    <button type="button" class="btn btn-outline-success save-btn" id="saveItinerary">Save</button> 
  </div>
  </div>`
      
}
