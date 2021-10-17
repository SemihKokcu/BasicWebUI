import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

//bizim için gelen aksiyonu state döndürür
export default function productListReducer(state=initialState.products,action){
    switch (action.type) {
        case actionTypes.GET_PRODUCT_SUCCESS:
            return action.payload
            
    
        default:
            return state;
    }
}
