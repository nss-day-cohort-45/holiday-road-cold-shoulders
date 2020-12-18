import { saveItineraries } from "../saveItineraries.js"

const contentTarget = document.querySelector(".save-button");
const eventHub = document.querySelector(".container");


let itineraryObj = {
    eateryId : "",
    parkId : "",
    attractionId : ""
};

eventHub.addEventListener("eateryChosen", (event) => {
    
    itineraryObj.eateryId = parseInt(event.detail.eateryThatWasChosen);
    
    
});

eventHub.addEventListener("parkId", (event) => {
    
    itineraryObj.parkId = event.detail.id;
    
    
});

eventHub.addEventListener("attractionChosen", (event) => {
    
    itineraryObj.attractionId = parseInt(event.detail.attractionThatWasChosen);
    
    
});



eventHub.addEventListener("click", (clickEvent) => {
if (clickEvent.target.id === "saveItinerary") {
    

    if (itineraryObj.eateryId && itineraryObj.parkId && itineraryObj.attractionId !== "") {

    saveItineraries(itineraryObj);
    
} else {window.alert("choose something, monster.")}
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
