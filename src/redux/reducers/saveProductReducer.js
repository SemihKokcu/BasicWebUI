import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

//bizim için gelen aksiyonu state döndürür
export default function saveProductReducer(
  state = initialState.savedProduct,
  action
) {
  switch (action.type) {
    case actionTypes.UPTADE_PRODUCT_SUCCESS:
      return action.payload;
    case actionTypes.CREATE_PRODUCT_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
