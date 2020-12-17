import { useEateries } from "./EateryProvider.js";

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.dialog')

eventHub.addEventListener("eateryDetail", e => {

    // Grab the zipcode from the customEvent object and split it since more than one is passed
    let eateries = useEateries()
    let eatery = eateries.find( (eatery) => eatery.id === e.detail.id)
    console.log('I hear it!')
    render(eatery)
});

export const render = (eatery) => {
    contentTarget.innerHTML = `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${eatery.businessName}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
        <div class="modal-body">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    `
    
    // document.getElementById("btnModal").click()
}