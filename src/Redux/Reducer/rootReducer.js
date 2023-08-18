import { combineReducers } from "redux";
import restaurant from "./Restaurant/restaurant.reducer";
import image from "./Images/Image.reducer";
import reviews from "./Reviews/Reviews.reducer";

const rootReducer = combineReducers({restaurant,image,reviews});

export default rootReducer;