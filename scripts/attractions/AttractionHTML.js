const eventHub = document.querySelector(".container");

export const AttractionHTML = (attractionObj) => {
    
    
    return `
    <div class="card">
        <h3 class="card-header">
            Attraction
        </h3>
        <div class="card-body">
            <h5 class="card-title">${attractionObj.name}</h5>
            <p class="card-text">${attractionObj.description}</p>
            <button type="button" class="btn btn-outline-secondary" id="attractionModal--${attractionObj.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
        </div>
    </div>
    `
}

// This event listener listens for a click event on the Details button of the Attraction Card
//needs to grab the ID of the card and send it via custom event so that the object's amenities can be used
    eventHub.addEventListener("click", event => {
        if (event.target.id.startsWith("attractionModal--")){
            const [prefix, attractionID] = event.target.id.split("--")
            const customEvent = new CustomEvent("attDetailClicked", {
                detail: {
                    attractionID: attractionID
                }
            })
            eventHub.dispatchEvent(customEvent)
        }
    })
    
