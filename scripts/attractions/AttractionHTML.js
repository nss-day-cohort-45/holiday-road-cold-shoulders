export const AttractionHTML = (attractionObj) => {
    return `
    <div class="card">
        <h3 class="card-header">
            Attraction
        </h3>
        <div class="card-body">
            <h5 class="card-title">${attractionObj.name}</h5>
            <p class="card-text">${attractionObj.description}</p>
        </div>
    </div>
    `
}