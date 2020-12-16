const eventHub = document.querySelector('.container')

// Initialize day for the switch statement
let day = ''

// Generate HTML for the weather cards by passing the weatherObj and the day number
export const weatherCardHTML = (weatherObj, dayNum) => {
    
    // Switch statement to assign the proper day by checking dayNum
    switch (dayNum) {
        // If dayNum = 0
        case 0:
          // Assign Sunday to the day variable
          day = "Sun";
          
          // We have what we need so break out of the switch statement
          break;
        case 1:
          day = "Mon";
          break;
        case 2:
           day = "Tue";
          break;
        case 3:
          day = "Wed";
          break;
        case 4:
          day = "Thu";
          break;
        case 5:
          day = "Fri";
          break;
        case 6:
          day = "Sat";
      }

    // Return the generated card so it can be rendered to the DOM via weatherList.js
    // I used "\u00B0" for the degrees symbol and "&nbsp" to keep the High and Low temps from breaking apart weird due to flexbox
    // Used Math.floor to drop the decimal points
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