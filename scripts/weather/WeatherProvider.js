import { settings } from "../Settings.js"

let fiveDayForecast = []
let forecast = 5

export const useWeather = () => fiveDayForecast.slice()

export const getWeather = (zipCode) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&units=imperial&cnt=${forecast}&appid=${settings.weatherKey}`)
        .then(response => response.json())
        .then(
            currentWeatherData => {
                fiveDayForecast = currentWeatherData
            }
        )
}