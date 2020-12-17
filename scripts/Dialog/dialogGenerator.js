import { useEateries } from '../eateries/EateryProvider.js'
import { useAttractions } from '../attractions/AttractionProvider.js'

const eventHub = document.querySelector('.container')
const modalContainer = document.querySelector('.dialog')


eventHub.addEventListener("eateryDetail", e => {

    // Grab the zipcode from the customEvent object and split it since more than one is passed
    let eateries = useEateries()
    let eatery = eateries.find( (eatery) => eatery.id === e.detail.id)
    let type = 'Eatery'
    render(eatery, type)
});

eventHub.addEventListener("attDetailClicked", e => {

    // Grab the zipcode from the customEvent object and split it since more than one is passed
    let attractions = useAttractions()
    let attraction = attractions.find( (attraction) => attraction.id === e.detail.attractionID)
    let type = 'Attraction'
    render(attraction, type)
});

export const render = (object, type) => {
    const titleContainer = document.querySelector('.modal-title')  
    const bodyContainer = document.querySelector('.modal-body')
    
    if (type === 'Eatery') {
        const bodyAccessible = object.ameneties.wheelchairAccessible ? "✅" : "🚫";
        const bodyWifi = object.ameneties.wifi ? "✅" : "🚫"

        titleContainer.innerHTML = `
        ${object.businessName}
        `
        bodyContainer.innerHTML = `
        <p>Wheelchair Acessibile: ${bodyAccessible}</p>
        <p>Wifi: ${bodyWifi}</p>
        `
    } else if (type === 'Attraction') {
        const souvenirs = object.ameneties.souvenirs ? "✅" : "🚫";
        const restrooms = object.ameneties.restrooms ? "✅" : "🚫"
        console.log(souvenirs)
        console.log(restrooms)
        titleContainer.innerHTML = `
        ${object.name}
        `
        bodyContainer.innerHTML = `
        <p>Souvenirs: ${souvenirs}</p>
        <p>Restrooms: ${restrooms}</p>
        `
    }
}

export const getModal = () => {
  modalContainer.innerHTML = `
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel"></h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                    <div class="modal-body">
                    
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
  `	        
}