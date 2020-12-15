const eventHub = document.querySelector('.container')

// Initialize day for the switch statement
let day = ''

// Get todays date
let date = new Date();

// Convert the date into a number for the switch statement
let dayNum = date.getDay()

// Generate HTML for the weather cards by passing in an object
export const weatherCardHTML = (weatherObj) => {
    
    // Switch statement to assign the proper day by checking dayNum
    switch (dayNum) {
        // If dayNum = 0
        case 0:
          // Assign Sunday to the day variable
          day = "Sun";
          // Increase dayNum by 1 so the 5 day forecast populates each weekday name properly
          dayNum++
          break;
        case 1:
          day = "Mon";
          dayNum++
          break;
        case 2:
           day = "Tue";
           dayNum++
          break;
        case 3:
          day = "Wed";
          dayNum++
          break;
        case 4:
          day = "Thu";
          dayNum++
          break;
        case 5:
          day = "Fri";
          dayNum++
          break;
        case 6:
          day = "Sat";
          dayNum++
      }

    // Return the generated card so it can be rendered to the DOM via weatherList.js
    // I used \u00B0 for the degrees symbol
    return `
                <div class="card weatherCard">
                    <div class="card-body weatherBG">
                        <center>
                          <h3 class="card-title">${day}</h3>
                          <p class="card-text"><h1> ${Math.floor(weatherObj.main.temp)}\u00B0</h1></p>
                          <p class="card-text"><small class="text-muted">High:&nbsp;${Math.floor(weatherObj.main.temp_max)}\u00B0 Low:&nbsp;${Math.floor(weatherObj.main.temp_min)}\u00B0</small></p>
                          <img class="weatherIcon" src="http://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png" alt="">
                          <p class="card-text">${weatherObj.weather[0].description}</p>
                          <p class="card-text"><small class="text-muted">Precip: ${weatherObj.pop}%</small></p>
                        </center>
                    </div>
                </div>    
    `
}