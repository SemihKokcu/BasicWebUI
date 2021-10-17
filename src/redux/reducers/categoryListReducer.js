import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

//bizim için gelen aksiyonu state döndürür
export default function changeCategoryReducer(state=initialState.categories,action){
    switch (action.type) {
        case actionTypes.GET_CATEGORİES_SUCCESS:
            return action.payload
            
    
        default:
            return state;
    }
}
