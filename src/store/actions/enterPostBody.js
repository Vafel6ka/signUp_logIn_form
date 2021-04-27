import { ENTER_POST_BODY } from "../../constants/actionsType"

const enterPostBody = (data) => {
    return {
        type: ENTER_POST_BODY,
        payload: data
    }
}

export default enterPostBody;