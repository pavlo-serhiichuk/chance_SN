import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,

})

const store = createStore(reducers, {}, applyMiddleware())

export default store