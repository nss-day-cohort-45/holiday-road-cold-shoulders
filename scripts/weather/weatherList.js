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

    // Get todays date
    let date = new Date();

    // Convert the date into a number for the switch statement in weatherCardHTML.js
    let todayNum = date.getDay()

    // For each weather object of the weatherToDOM array
    for (const weatherObj of weatherToDOM) {
        // Send teh data off for HTML conversion and pass in the day number
        const weatherHTML = weatherCardHTML(weatherObj, todayNum)

        // Increase the number so each day in the forecast gets the proper name. Ex: "Fri"
        if (todayNum < 6) {
            todayNum++
        // Once we get to Saturday we need to reset the count
        } else if (todayNum = 6) {
            todayNum = 0;
        }

        // Add each card to the DOM
        weatherContent.innerHTML += weatherHTML
    }
}


//---------------------------------------------------------------------------//
//  IF YOU'RE CLICKING A TON OF PARKS FOR TESTING COMMENT THIS LISTENER OUT! //
//---------------------------------------------------------------------------//

// A park was selected on the dropdown so let's get a forecast for it
eventHub.addEventListener("parkId", e => {

    // Grab the zipcode from the customEvent object and split it since more than one is passed
    let zipCode = e.detail.postalCode.split(',')
    
    // Send the zipcode into the getWeather function
    getWeather(zipCode[0]).then(() => {
        // Snag the latest data
        const weatherForecast = useWeather()
        // Send it to the DOM
        render(weatherForecast)
    })
});