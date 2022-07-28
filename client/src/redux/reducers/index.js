import { combineReducers } from "redux"

import authReducer from "./AuthReducer"
import postReducer from "./PostReducer"
import chatReducer from "./ChatUserReducer"
import pageReducer from "./PageReducer"

export const reducers = combineReducers({
    authReducer, 
    postReducer,
    chatReducer,
    pageReducer
})