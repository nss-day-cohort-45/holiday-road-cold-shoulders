import { settings } from "../Settings.js"

let fiveDayForecast = []

export const useWeather = () => fiveDayForecast.slice()

export const getWeather = () => {
    return fetch(`http://localhost:9000/list`)
        .then(response => response.json())
        .then(
            currentWeatherData => {
                fiveDayForecast = currentWeatherData
            }
        )
}