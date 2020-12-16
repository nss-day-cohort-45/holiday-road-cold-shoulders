import { settings } from "../Settings.js"

// Set up the initial array for weather data
let fiveDayForecast = []

// Get a copy of the array to use elsewhere
export const useWeather = () => fiveDayForecast.slice()

// Hit the API to get current weather data
export const getWeather = (zipCode) => {
    // Use the Open Weather Map API key
    let myKey = settings.weatherKey

    // Let's go get some data
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&units=imperial&cnt=5&appid=${myKey}`)
        // Convert it from JSON
        .then(response => response.json())
        .then(
            currentWeatherData => {
                // Place the new data in the fiveDayForecast array. Target ".list" so we can slice it...
                fiveDayForecast = currentWeatherData.list
            }
        )
}