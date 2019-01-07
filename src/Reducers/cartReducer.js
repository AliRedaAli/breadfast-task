import {ADD_TO_CART,INCREASE_QTY} from '../Enum'

export default (state = null,action) => {
    let newState = Object.assign([],state);
    switch(action.type){
        case ADD_TO_CART:
            newState.push(action.payload)
            break;
        case INCREASE_QTY:
            let productPos = newState.map(function(product) {return product.id; }).indexOf(action.payload.id);
            newState[productPos].qty += action.payload.qty
            break;
        default:
    }

    return newState
}