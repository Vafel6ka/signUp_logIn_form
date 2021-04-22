import { GET_EMAIL } from "../../constants/actionsType"

const initialState = {
    email: ''
}

const ResetPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EMAIL:
            return {...state, email: action.payload}
        
        default: return state
    }
};

export default ResetPasswordReducer;