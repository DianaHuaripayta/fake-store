import { ActionTypes } from "../constants/actions-types";
export const setProducts = (products) => {
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
};
export const selectedProducts = (products) =>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: products
    }
}
export const removeSelectedProducts = (products) =>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT ,
    }
}