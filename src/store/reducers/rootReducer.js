import {combineReducers} from "redux";
import SignUpReducer from "./SignUpReducer"
import LogInReducer from "./LogInReducer"

const rootReducer = combineReducers({
    userInfo: SignUpReducer,
    userLoginInfo: LogInReducer,
})

export default rootReducer;