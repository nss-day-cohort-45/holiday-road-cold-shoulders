// let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
let day = ''


export const weatherCardHTML = (weatherObj) => {
    
  let today = getDates()
    
    console.log(today)

    
    switch (today) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
           today++
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }


    return `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${day}</h5>
                        <p class="card-text">${weatherObj.main.temp} </p>
                        <p class="card-text"><small class="text-muted">${weatherObj.weather[0].main}</small></p>
                    </div>
                </div>    
    `
}

const getDates = () => {
    let day = new Date();
    let dayNum = day.getDay()
    return dayNum
}