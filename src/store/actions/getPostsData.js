import { GET_POST_DATA } from "../../constants/actionsType"

const getPostsData = (data) =>{
    return {
        type: GET_POST_DATA,
        payload: data
    }
}

export default getPostsData;