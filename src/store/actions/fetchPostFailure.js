import { FETCH_FAILURE } from "../../constants/actionsType"

const fetchPostFailure = (error) =>{
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}

export default fetchPostFailure;