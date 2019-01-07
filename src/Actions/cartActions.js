import {ADD_TO_CART, INCREASE_QTY, REMOVE_CART, TOGGLE_DRAWER} from '../Enum'

export function addToCart(product){
    return {
        type: ADD_TO_CART,
        payload:product
    }
}

export function increaseQty(id,qty = 1){
    return {
        type: INCREASE_QTY,
        payload:{id,qty}
    }
}

export function removeCart(id){
    return {
        type: REMOVE_CART,
        payload:id
    }
}

export function toggleDrawer(){
    return {
        type: TOGGLE_DRAWER
    }
}