// dispatch parkId to eventHub to use for rendering dialog box

const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", (e) => {
  if (e.target.id.startsWith("parkDetail--")) {
    const [prefix, parkId] = e.target.id.split("--");
    const customEvent = new CustomEvent("parkDetailsClicked", {
      detail: {
        buttonLocation: prefix,
        parkId,
      },
    });
    eventHub.dispatchEvent(customEvent);
  }
});

// HTML that will ultimately be rendered as parkCard
export const parkHTML = (park) => {
  return `
    <div id="image-slider" class="splide card mb-3 park--${park.parkCode}">
      <div class="splide__track">
        <div class ="splide__list">
        ${park.images
          .map(
            (image) => `
          <div class="splide__slide">
            <div class="splide__slide__container">
              <img src="${image.url}" alt="${image.altText}">
            </div>
          </div>
          `
          )
          .join(" ")}
        </div>
      </div>
    </div>
    
    <div class="card-body">
      <h5 class="card-title">${park.fullName}</h5>
      <p class="card-text"></p>
      <p class="card-text"><small class="text-muted"><small></p>
      <button type="button" id="parkDetail--${
        park.parkCode
      }" class="btn btn-outline-secondary data-bs-toggle="modal" data-bs-target="#exampleModal">Details</button>
    </div>
  </div>
  `;
};
// details button? What is this going to show?
