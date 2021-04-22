import {combineReducers} from "redux";
import SignUpReducer from "./SignUpReducer"
import LogInReducer from "./LogInReducer"
import ResetPasswordReducer from "./ResetPasswordReducer"

const rootReducer = combineReducers({
    userInfo: SignUpReducer,
    userLoginInfo: LogInReducer,
    userResetPass: ResetPasswordReducer,
})

export default rootReducer;