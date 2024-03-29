import { GET_USER, AUTH_USER } from "./user.type";
import axios from "axios";

export const getUser = (_id) => async(dispatch) => {
    try{
        const User = await axios({
            method:"GET",
            url:`/user/${_id}`
        })
        return dispatch({type:GET_USER, payload:User.data})
    }
    catch(error){
        return dispatch({type:"ERROR", payload:error})
    }
}

export const authUser = (_id) => async(dispatch) => {
    try{
        const user = await axios({
            method:"GET",
            url:""
        });
        localStorage.setItem("zomato",_id)
        return dispatch({type:GET_USER, payload:user.data})
    }
    catch(error){
        return dispatch({type:"ERROR", payload:error})
    }
}