export const eateries = (eatery) => {
    return `
    <div class="card">
    <h3 class="card-header">Eatery</h3>
    <div class="card-body">
      <h5 class="card-title">${eatery.businessName}</h5>
      <p class="card-text">${eatery.description}</p>
      <p class="card-text">Wheel Chair Accessibility: ${eatery.ameneties.wheelchairAccessible} ${eatery.ameneties.wifi}</p>
    </div>
  </div>
    `

}