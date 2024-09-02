import { SET_CURRENT_USER, SET_REGISTER_USER } from '../actions/types'
import isEmpty from '../validation/is-empty'

const initialState = {
    isAuthenticated: false,
    isRegistered: false,
    user: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return{
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        case SET_REGISTER_USER:
            return{
                ...state,
                isRegistered: action.payload,
            }
        default:
            return state;
    }
}