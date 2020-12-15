export const weatherCardHTML = (weatherObj) => {
    
    console.log(dates(new Date(2017, 1, 27)));
    
    return `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${weatherObj.main.temp}</h5>
                        <p class="card-text">${weatherObj.weather[0].main} This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>    
    `
}

function dates(current) {
    var week= new Array(); 
    // Starting Monday not Sunday
    current.setDate((current.getDate() - current.getDay() +1));
    for (var i = 0; i < 7; i++) {
        week.push(
            new Date(current)
        ); 
        current.setDate(current.getDate() +1);
    }
    return week; 
}

const getDates = ()