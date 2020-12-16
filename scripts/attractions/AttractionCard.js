import { getAttractions, useAttractions } from "./AttractionProvider.js"
import { AttractionHTML } from "./AttractionHTML.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".attraction-card")

eventHub.addEventListener("attractionChosen", event => {
    const attractions = useAttractions();
    const chosen = parseInt(event.detail.attractionThatWasChosen)
    const matchingAttraction = attractions.find((attraction) => {
        if (attraction.id === chosen){
            return attraction
        }
    })
    render(matchingAttraction)
})

const render = (attraction) => {
    contentTarget.innerHTML = AttractionHTML(attraction)
}