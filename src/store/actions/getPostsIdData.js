import { GET_POST_ID_DATA } from "../../constants/actionsType"

const getPostsIdData = (data) =>{
    return {
        type: GET_POST_ID_DATA,
        payload: data
    }
}

export default getPostsIdData;