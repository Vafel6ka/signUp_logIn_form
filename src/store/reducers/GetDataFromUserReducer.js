import { GET_POST_DATA } from "../../constants/actionsType"

const initialState = {
    arr:[]
}

const GetDataFromUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_DATA:
            return {...state, arr: [...state.arr, action.payload]}      
        
        default: return state
    }
};

export default GetDataFromUserReducer;

