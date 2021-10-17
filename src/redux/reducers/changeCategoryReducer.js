import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

//bizim için gelen aksiyonu state döndürür
export default function changeCategoryReducer(state=initialState.currentCategory,action){
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload
            
    
        default:
            return state;
    }
}
