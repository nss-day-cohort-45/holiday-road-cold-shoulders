let attractions = [];

export const useAttractions = () => {
    return attractions.slice();
}

export const getAttractions = () => {
    return fetch ("https://holidayroad.nss.team.bizarreries")
    .then(response => response.json())
    .then(
        parsedAttractions => {
            attractions = parsedAttractions
        }
    )
}