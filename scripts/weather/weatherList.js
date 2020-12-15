import { weatherCardHTML } from "./weatherCardHTML.js"
import { getWeather, useWeather } from "./WeatherProvider.js"

// eventHub setup on the container
const eventHub = document.querySelector('.container')


// Put the weather content in the weather-card container
const weatherContent = document.querySelector('.weather-card')

// Get the weather cards on the DOM
const render = (weatherToDOM) => {
    weatherContent.innerHTML = ``

    for (const weatherObj of weatherToDOM) {
        const weatherHTML = weatherCardHTML(weatherObj)
        weatherContent.innerHTML += weatherHTML
    }
}

// Get the current weather
export const weatherList = (zipCode) => {
    getWeather(zipCode).then(() => {
        const weatherForecast = useWeather()
        render(weatherForecast)
    })
}

eventHub.addEventListener("parkId", e => {
    console.log('I heard the event!')
    let zipCode = e.detail.postalCode.split(',')
    weatherList(zipCode[0])
});