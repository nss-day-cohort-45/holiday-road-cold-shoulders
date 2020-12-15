import { useEateries, getEateries } from "./EateryProvider.js"
import { eateries } from "./eateriesHTMLprovider.js"


const contentTarget = document.querySelector(".eatery-card")


const render = (eateryArray) => {
    const allEateriesConverted = eateryArray.map((place) => eateries(place)).join("")

    contentTarget.innerHTML = allEateriesConverted
}

export const eateryList = () => {
    getEateries()
        .then(() => {
            const allEateries = useEateries()
            render(allEateries)
        })
}