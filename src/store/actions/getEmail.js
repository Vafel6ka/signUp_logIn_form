import { GET_EMAIL } from "../../constants/actionsType"

const getEmail = (data) =>{
    return {
        type: GET_EMAIL,
        payload: data
    }
}

export default getEmail;