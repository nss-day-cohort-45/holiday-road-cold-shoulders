import { useParks } from "./ParkProvider.js";

const eventHub = document.querySelector(".container");
const modalContainer = document.querySelector(".parkDialog");
// const dialogClose = document.querySelector("#closeDialog")

eventHub.addEventListener("parkDetailsClicked", (e) => {
  const clickedPark = useParks().find(
    (park) => park.parkCode === e.detail.parkId
  );
  render(clickedPark);
});

const render = (clickedPark) => {
  const parksHeaderDialog = document.querySelector(".parkModal-header");
  const parksBodyDialog = document.querySelector(".parkModal-body");

  parksHeaderDialog.innerHTML = `      
      <h5 class="modal-title" id="parkModalLabel">${clickedPark.fullName}</h5>
      <div class="parkModalAddress">${clickedPark.addresses
        .map((address) => {
          if (address.type === "Physical")
            return `
            <div>${address.line1} ${address.city},</div>
            <div>${address.stateCode}, ${address.postalCode}</div>`;
        })
        .join(" ")}
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`;

  parksBodyDialog.innerHTML = ` 
    
    
      <p>${clickedPark.description}</p>
      <h6>Activities</h6>
      <ul class="parksDialog-list">
        ${clickedPark.activities
          .map((park) => `<li>${park.name}</li>`)
          .join(" ")}
      </ul>
      <h6>Cost</h6>
      ${clickedPark.entranceFees
        .map(
          (fees) => `
      <div>${fees.title}</div>
      <div>Cost: $${fees.cost}</div>
      <div>${fees.description}</div>
      <br>
      `
        )
        .join(" ")}
      
      `;
};

export const getParksModal = () => {
  modalContainer.innerHTML = `
  <div class="modal fade" id="parkModal" tabindex="-1" aria-labelledby="parkModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header parkModal-header">
        
      </div>
      <div class="modal-body parkModal-body">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  `;
};
