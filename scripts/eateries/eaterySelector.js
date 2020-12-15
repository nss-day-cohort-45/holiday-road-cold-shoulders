import { useEateries, getEateries } from "./EateryProvider.js";

const contentTarget = document.querySelector(".eatery-card");
const eventHub = document.querySelector(".container");

let eateryObj;
eventHub.addEventListener("ParkID", (event) => {
  if (event.target.state === `${eateryState}`) {
    let eateryObj = event.target.businessName }
    console.log("eatery", eateryObj)
      return eateryObj
  })
//     const customEvent = new CustomEvent("eateryChosen", {
//       detail: {
//         eateryThatWasChosen: event.target.value,
//       },
//     });

//     eventHub.dispatchEvent(customEvent);
//   }
// });

const render = eateryCollection => {
    contentTarget.innerHTML += `
    <div class="dropdown">
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
      let eateryID = eateryObj.Id
        return `<li><a class="dropdown-item id=${eateryID}>${eateryPlace} ${eateryState}</a></li> `
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

