import { ENTER_POST_TITLE } from "../../constants/actionsType"

const enterPostTitle = (data) =>{
    return {
        type: ENTER_POST_TITLE,
        payload: data
    }
}

export default enterPostTitle;