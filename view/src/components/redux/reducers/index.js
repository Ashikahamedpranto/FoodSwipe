import {combineReducers} from 'redux'
import auth from './authReducer'
// import token from './tokenReducer'
import cart from './cartReducer'
import filter from './filterReducer'
// import users from './usersReducer'
import foodCrud from './AdminFoodCrudReducer'
import item from './ItemsReducer'

export default combineReducers({
    auth,
    // token,
    cart,
    filter,
    item,
    foodCrud
    // users
});
