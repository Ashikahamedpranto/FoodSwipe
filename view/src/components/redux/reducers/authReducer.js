import ACTIONS from '../action'

const initialState = {
    user: [],
    isLogged: false,
    isAdmin: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTIONS.LOGIN:
            return {
                ...state,
                isLogged: true
            }
        case 'userinfo':
        
            return {
                ...state,
                user: action.payload,
                isAdmin: action.payload.role==1?true:false
            }
        default:
            return state
    }
}

export default authReducer