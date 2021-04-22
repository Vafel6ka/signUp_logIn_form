import { GET_PASS } from "../../constants/actionsType"

const getPass = (data) =>{
    return {
        type: GET_PASS,
        payload: data
    }
}

export default getPass;