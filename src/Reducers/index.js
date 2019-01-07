import {combineReducers} from 'redux'; 
import cartReducer from './cartReducer'
import productsReducer from './productsReducer'
import cartDrawerReducer from './cartDrawerReducer'

export default combineReducers({
    cart:cartReducer,
    products:productsReducer,
    cartOpened:cartDrawerReducer
})