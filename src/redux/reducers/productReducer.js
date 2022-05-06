import {ActionTypes} from '../constants/actions-types'
const initialState ={
    products: [],
}
export const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:{
            return {...state,products:action.payload}
        }
        default:
            return state;
    }
}
export const selectProductReducer = (state= {} , {type, payload}) =>{ //{type, payload} igual a action
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return{...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return{}//CLEAN 
         default:
            return state
    }
}
