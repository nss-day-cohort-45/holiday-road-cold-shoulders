// import {settings} from "../Settings.js"

let parks = [];

export const useParks = () => parks.slice();
console.log(useParks())


// Fetch call from NPS API of all parks This will only pull 50 at a time.

// export const getParks = () => {
//   return fetch(
//     `https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}`
//   )
//     .then((response) => response.json())
//     .then((parsedParks) => {
//       console.table(parsedParks);
//       parks = parsedParks;
//     });
// };

// Sample Data for testing
export const getParks = () => {
  return fetch(
    "http://localhost:8088/data"
  )
    .then((response) => response.json())
    .then((parsedParks) => {
      console.table(parsedParks);
      parks = parsedParks;
    });
};