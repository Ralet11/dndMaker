import { SET_USER } from "./actionsType.js";


export const setUser = (user)=>{
    return{
        type: SET_USER,
        payload:user
    }
};
