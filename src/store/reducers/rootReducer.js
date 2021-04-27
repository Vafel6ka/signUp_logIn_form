import {combineReducers} from "redux";
import SignUpReducer from "./SignUpReducer"
import LogInReducer from "./LogInReducer"
import ResetPasswordReducer from "./ResetPasswordReducer"
import { USER_LOG_OUT } from "../../constants/actionsType"
import GetDataFromUserReducer from "./GetDataFromUserReducer"
import SendPostReducer from "./SendPostReducer"

const appReducer = combineReducers({
        userInfo: SignUpReducer,
        userLoginInfo: LogInReducer,
        userResetPass: ResetPasswordReducer,
        userDataPosts: GetDataFromUserReducer,
        sendPost: SendPostReducer
})

const rootReducer = (state, action) => {
    if (action.type === USER_LOG_OUT) {
      state = undefined
    }
  
    return appReducer(state, action)
  }

export default rootReducer;