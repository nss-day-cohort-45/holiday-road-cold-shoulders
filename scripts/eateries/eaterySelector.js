import { useEateries, getEateries } from "./EateryProvider.js";

const contentTarget = document.querySelector(".dropdown-container");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", event => {
  
  console.log("event", event.target.state)
  
  if (event.target.id.startsWith("eatery")) {
    const [prefix, eateryId, state] = event.target.id.split("--")
    const customEvent = new CustomEvent("eateryChosen", {
          detail: {
              eateryThatWasChosen: eateryId,
              state
          }
      })

      eventHub.dispatchEvent(customEvent)
  }
})

const render = eateryCollection => {
    contentTarget.innerHTML += `
    <div class="dropdown eaterySelect">
 <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    Select An Eatery
  </button>
 <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
<li><a class="dropdown-item" href="#">

</a></li>

${
    eateryCollection.map(eateryObj => {
      let eateryPlace = eateryObj.businessName
      let eateryState = eateryObj.state
      let eateryID = eateryObj.id
        return `<li><a class="dropdown-item" id="eatery--${eateryID}--${eateryState}">${eateryPlace} ${eateryState}</a></li> `
    }).join("")
      
}
</ul>
</div>`
}

export const eaterySelect = () => {
    getEateries()
        .then(() => {
            const eateries = useEateries()
            render(eateries)
        })
}

