import { parkSelect } from "./parks/ParkSelect.js";
import { eaterySelect } from "./eateries/eaterySelector.js";
import { AttractionSelect } from "./attractions/AttractionSelect.js";
import { getParksModal} from "./parks/ParkDialog.js";
import "./parks/ParkCard.js";
import "./attractions/AttractionCard.js";
import "./attractions/AttractionFilter.js";
import "./weather/weatherList.js";
import "./eateries/eateryList.js";
import "./eateries/eateryFilter.js"
import { getModal } from "./Dialog/dialogGenerator.js";
import { getEateries } from "./eateries/EateryProvider.js";
import { getParks } from "./parks/ParkProvider.js";

parkSelect();
AttractionSelect();
eaterySelect();
getEateries().then(getModal)
getParks().then(getParksModal)
