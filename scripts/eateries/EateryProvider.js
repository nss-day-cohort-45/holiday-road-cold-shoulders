export const useEateries = () => eateries.slice();

let eateries = [];
export const getEateries = () => {
  return fetch("http://holidayroad.nss.team/eateries")
    .then((response) => response.json())
    .then((parsedEateries) => {
      eateries = parsedEateries;
    });
};
