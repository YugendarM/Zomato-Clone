import { GET_REVIEWS, POST_REVIEWS } from "../Reviews/Reviews.type";

const INITIAL_STATE = {
    reviews : [],
};

const reviewReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case GET_REVIEWS:
            return{
                ...state,
                reviews: action.payload
            };
        case POST_REVIEWS:
            return{
                ...state,
                reviews: [...state.reviews, action.payload]
            };
        default:
            return{
                ...state
            }
    };
};

export default reviewReducer;