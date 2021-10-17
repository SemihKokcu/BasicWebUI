import { applyMiddleware, createStore } from "redux";
import rootReducer from "./index"
import thunk from "redux-thunk";
// uygulamada bir store oluştruduk

export default function configureStore(){
    return createStore(rootReducer, applyMiddleware(thunk))
}