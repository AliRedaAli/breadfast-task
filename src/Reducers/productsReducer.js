import {FETCH_PRODUCTS} from '../Enum'
export default (state = null,action) => {
    let newState = Object.assign([],state);
    switch(action.type){
        case FETCH_PRODUCTS:
            newState = action.payload.data.data[0].products
            break;
        default:
    }
    return newState
}