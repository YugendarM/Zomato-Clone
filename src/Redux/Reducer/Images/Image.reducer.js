import { GET_IMAGES } from "./Image.type";

const INITIAL_STATE = {
    image : []
};

const imageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_IMAGES: {
            return {
                ...state,
                image : action.payload,
            };
        }
        default: {
            return {
                ...state
            }
        }
    }
};

export default imageReducer;