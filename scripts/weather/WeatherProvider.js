import { settings } from "../Settings.js"

let fiveDayForecast = []

export const useWeather = () => fiveDayForecast.slice()

export const getWeather = (zipCode) => {
    let zip = zipCode
    let myKey = settings.weatherKey
    console.log(myKey)
    console.log(zipCode)
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&units=imperial&cnt=5&appid=${myKey}`)
        .then(response => response.json())
        .then(
            currentWeatherData => {
                fiveDayForecast = currentWeatherData.list
                console.log(fiveDayForecast)
            }
        )
}