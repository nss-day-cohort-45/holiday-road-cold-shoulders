export const parkHTML = (park) => {
  return `
    <div class="card mb-3 park--${park.parkCode}">
    ${park.images.map(
      (image) => `
        <img src="${image.url}" class="card-img-top" alt="${image.altText}">
      `
    )}
      <div class="card-body">
        <h5 class="card-title">${park.fullName}</h5>
        <p class="card-text"></p>
        <p class="card-text"><small class="text-muted"></small></p>
      </div>
    </div>
  `;
};
// details button? What is this going to show?
