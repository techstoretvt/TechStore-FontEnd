import { combineReducers } from "redux";
import userReducer from "./reducers.js/userReducer";

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const userPersistConfig = {
    key: 'user',
    storage: storage,
    whitelist: ['accessToken', 'refreshToken']
}

let rootReducer = combineReducers({
    user: persistReducer(userPersistConfig, userReducer),
})

export default rootReducer;