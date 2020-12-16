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
    </div>
  </div>
  `;
};
// details button? What is this going to show?
