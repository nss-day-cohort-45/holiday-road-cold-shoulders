import { settings } from "../Settings.js"

let fiveDayForecast = []

export const useWeather = () => fiveDayForecast.slice()

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