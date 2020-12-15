import {useAttractions, getAttractions } from "./AttractionProvider.js";

/**
 * Tasks:
 * 1. Listen for the selection of an attraction in the browser and capture the value
 *      a. The event will be triggered on the dropdown ("click")
 * 2. Send out a customEvent message via eventHub
 */

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".attraction-card")

// Listen for a "click" event within the eventHub
eventHub.addEventListener("click", event => {
    // Proceed if the click event occured within the div with the attraction-card class
    
    if (event.target.id.startsWith("attraction")) {
        const [prefix, suffix] = event.target.id.split("--")
        const customEvent = new CustomEvent("attractionChosen", {
            detail: {
                attractionThatWasChosen: suffix
            }
        })

        eventHub.dispatchEvent(customEvent)
    }
})

// Render the dropdown here
const render = (attractionCollection) => {
    contentTarget.innerHTML = `
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Please Select an Attraction:
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                ${attractionCollection.map(
                    (attraction) => `
                <li><a class="dropdown-item" href="#" id="attraction--${attraction.id}">${attraction.name}</a></li>`
                )}
            </ul>
        </div>
    `
}

// Grab attractions data using the API and call the render function
export const AttractionSelect = () => {
    getAttractions().then(() => {
        const attractions = useAttractions();
        render(attractions);
    });
};