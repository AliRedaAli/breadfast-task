import {ADD_TO_CART, INCREASE_QTY,CHANGE_QTY, TOGGLE_DRAWER} from '../Enum'

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

export function changeQty(qty = 1){
    return {
        type: CHANGE_QTY,
        payload:qty
    }
}

export function toggleDrawer(){
    return {
        type: TOGGLE_DRAWER
    }
}