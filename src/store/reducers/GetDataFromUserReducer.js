import { GET_POST_DATA, GET_POST_ID_DATA } from "../../constants/actionsType"

const initialState = {
    arr:[],
    id:[]
}

const GetDataFromUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_DATA: {
            return {...state, arr: [...state.arr, action.payload]} } 
        case GET_POST_ID_DATA: {
            return {...state, id: [...state.id, action.payload]} } 
        
        default: return state
    }
};

export default GetDataFromUserReducer;

