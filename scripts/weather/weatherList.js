import { weatherCardHTML } from "./weatherCardHTML.js"
import { getWeather, useWeather } from "./WeatherProvider.js"

// eventHub setup on the container
const eventHub = document.querySelector('.container')


// Put the weather content in the weather-card container
const weatherContent = document.querySelector('.weather-card')

// Get the weather cards on the DOM
const render = (weatherToDOM) => {
    // Clear the DOM
    weatherContent.innerHTML = ``

    // For each weather object of the weatherToDOM array
    for (const weatherObj of weatherToDOM) {
        // Convert the data to HTML
        const weatherHTML = weatherCardHTML(weatherObj)
        // Add each card to the DOM
        weatherContent.innerHTML += weatherHTML
    }
}

// A park was chosen
eventHub.addEventListener("parkId", e => {

    // Grab the zipcode from the customEvent object and split it since more than one is passed
    let zipCode = e.detail.postalCode.split(',')
    
    // Populate the weather cards in the DOM
    getWeather(zipCode[0]).then(() => {
        const weatherForecast = useWeather()
        render(weatherForecast)
    })
    
});