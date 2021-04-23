import {combineReducers} from "redux";
import SignUpReducer from "./SignUpReducer"
import LogInReducer from "./LogInReducer"
import ResetPasswordReducer from "./ResetPasswordReducer"
import { USER_LOG_OUT } from "../../constants/actionsType"

const appReducer = combineReducers({
        userInfo: SignUpReducer,
        userLoginInfo: LogInReducer,
        userResetPass: ResetPasswordReducer,
})

const rootReducer = (state, action) => {
    if (action.type === USER_LOG_OUT) {
      state = undefined
    }
  
    return appReducer(state, action)
  }

export default rootReducer;