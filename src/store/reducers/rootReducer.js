import {combineReducers} from "redux";
import SignUpReducer from "./SignUpReducer"

const rootReducer = combineReducers({
    userInfo: SignUpReducer,
})

export default rootReducer;