import { GET_LOGIN } from "../../constants/actionsType"

const getLogin = (data) =>{
    return {
        type: GET_LOGIN,
        payload: data
    }
}

export default getLogin;