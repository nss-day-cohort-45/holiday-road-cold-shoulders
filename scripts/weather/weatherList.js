import { weatherCardHTML } from "./weatherCardHTML.js"
import { getWeather, useWeather } from "./WeatherProvider.js"

// eventHub setup on the container
// const eventHub = document.querySelector('.container')


// Put the weather content in the itenerary-preview container
const weatherContent = document.querySelector('.itinerary-preview')

const render = (weatherToDOM) => {
    weatherContent.innerHTML = "Test"

    for (const weatherObj of weatherToDOM) {
        const weatherHTML = weatherCardHTML(weatherObj)
        weatherContent.innerHTML += weatherHTML
    }
}

export const weatherList = () => {
    getWeather().then(() => {
        const weatherForecast = useWeather()
        render(weatherForecast)
    })
}