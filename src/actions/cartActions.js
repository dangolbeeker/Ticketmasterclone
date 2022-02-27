import {
    SAVE_CART_DATA,
    EDIT_CART_DATA,
    DELTE_CART_DATA,

} from '../constants/actionConstants';


export function saveCartData(data){
    return {
type: SAVE_CART_DATA,
        payload: {
            data: data
        }
    }
}


export function editCartData(data){
    return {
        type: EDIT_CART_DATA,
            payload: {
                data: data
            }
    }
}

export function deleteCartData(data){
    return {
        type: DELETE_CART_DATA,
        payload: {
            data: data
        }
    }
}