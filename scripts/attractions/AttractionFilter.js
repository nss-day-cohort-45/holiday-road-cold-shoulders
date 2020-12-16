import { useAttractions } from "./AttractionProvider.js"

const eventHub = document.querySelector(".container")


eventHub.addEventListener("parkId", event => {
    const stateCode = event.detail.states
    const attractions = useAttractions()
    const filteredAttraction = attractions.find(attractionObj => {
        if (attractionObj.state === stateCode){
            return attractionObj
        }
    })

    renderFilter(filteredAttraction)

})

const renderFilter = (filteredObj) => {
    const contentTarget = document.querySelector(".attraction-dropdown")
    const newDropList = `<li><a class="dropdown-item" href="#" id="attraction--${filteredObj.id}--${filteredObj.state}">${filteredObj.name}</a></li>`
    
    contentTarget.innerHTML = newDropList
}