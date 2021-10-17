import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import saveProductReducer from "./saveProductReducer";
import cartReducer from "./cartReducer";
// bütün reducerları bir araya getirdik

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  productListReducer,
  cartReducer,
  saveProductReducer
});


export default rootReducer;