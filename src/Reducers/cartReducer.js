import {ADD_TO_CART,INCREASE_QTY,REMOVE_CART} from '../Enum'

export default (state = null,action) => {
    let newState = Object.assign([],state);
    switch(action.type){
        case ADD_TO_CART:
            newState.push(action.payload)
            break;
        case INCREASE_QTY:
            var productPos = newState.map((product) => (product.id)).indexOf(action.payload.id);
            newState[productPos].qty += action.payload.qty
            break;
        case REMOVE_CART:
            var productPos = newState.map((product) => (product.id)).indexOf(action.payload);
            delete newState[productPos]
            break;
        default:
    }

    return newState
}