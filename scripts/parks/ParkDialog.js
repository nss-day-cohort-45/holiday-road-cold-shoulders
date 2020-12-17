import { useParks } from "./ParkProvider.js";

const eventHub = document.querySelector(".container");
// const dialogClose = document.querySelector("#closeDialog")

eventHub.addEventListener("click", (event) => {
  if (event.target.id === "closeDialog") {
    parksDialog.close();
  }
});

eventHub.addEventListener("parkDetailsClicked", (e) => {
  const parksDialog = document.querySelector("#parksDialog");
  const dialogText = document.querySelector("#parksDialog__text");
  const clickedPark = useParks().find(
    (park) => park.parkCode === e.detail.parkId
  );

  dialogText.innerHTML = `
    <div class="modal-header">  
      <h5 class="modal-title">${clickedPark.fullName}</h5>
      <div>${clickedPark.addresses
        .map((address) => {
          if (address.type === "Physical")
            return `
            <div>${address.line1} ${address.city},</div>
            <div>${address.stateCode}, ${address.postalCode}</div>`;
        })
        .join(" ")}
      </div>
    </div>
    <div class="modal-body">
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
      </div>
      `;

  parksDialog.showModal();
});

/* TODO current button won't click at all. When I move it outside the <div> it will click but with an error.
  ParkDialog.js:8 Uncaught TypeError: parksDialog.close is not a function 
    at HTMLElement.<anonymous> (ParkDialog.js:8) */

export const parksDialog = () => {
  return `
  <dialog id="parksDialog">
    <div class="modal-dialog">
      <div id="parksDialog__text" class="modal-content"></div>
      <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="closeDialog">Close</button>
      </div>
      </div>
  </dialog>
  `;
};
