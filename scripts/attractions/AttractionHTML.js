export const AttractionHTML = (attractionObj) => {
    return `
    <div class="card">
        <div class="card-header">
            Attraction
        </div>
        <div class="card-body">
            <h5 class="card-title">${attractionObj.name}</h5>
            <p class="card-text">${attractionObj.description}</p>
            <a href="#" class="btn btn-primary">Details</a>
        </div>
    </div>
    `
}