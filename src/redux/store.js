import {combineReducers, createStore} from "redux";
import main from "./main";

let reducers = combineReducers({
    main
})

let store = createStore(reducers)

window.store = store

export default store