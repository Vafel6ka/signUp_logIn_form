import { ENTER_POST_TITLE, ENTER_POST_BODY } from "../../constants/actionsType"

const initialState = {
    title: '',
    body: '',
}

const SendPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENTER_POST_TITLE:
            return {...state, title: action.payload}
        case ENTER_POST_BODY:
            return {...state, body: action.payload}

        default: return state
    }
};

export default SendPostReducer;