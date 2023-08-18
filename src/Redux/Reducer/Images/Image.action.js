import axios from "axios";

import { GET_IMAGES } from "./Image.type";

export const getImages = (_id) => async(dispatch) => {
    try {
        const image = await axios({
            method:"GET",
            url:`http://localhost:4000/image/${_id}`,
        })
        return dispatch({type:GET_IMAGES, payload:image.data});
        
    }catch(error){
        return dispatch ({type: "Error", payload: error});
    }
}