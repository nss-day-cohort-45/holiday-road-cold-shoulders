import { parkSelect } from "./parks/ParkSelect.js";
import { eaterySelect } from "./eateries/eaterySelector.js"
import { AttractionSelect } from "./attractions/AttractionSelect.js";
import "./parks/ParkCard.js";
import "./attractions/AttractionCard.js"
import "./attractions/AttractionFilter.js"
import "./weather/weatherList.js";
import "./eateries/eateryList.js";
import "./eateries/eateryFilter.js"
import { render } from "./Dialog/dialogShow.js";

parkSelect();
AttractionSelect();
eaterySelect();

let title = 'Here is my title'
let body ='and here is my body'
render(title, body)