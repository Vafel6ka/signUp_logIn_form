import { USER_LOG_OUT } from "../../constants/actionsType"

const logOut = () =>{
    return {
        type: USER_LOG_OUT,
    }
}

export default logOut;