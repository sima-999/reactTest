import {RecommendProductAction,FETCH_RECOMMEND_PRODUCTS_START,FETCH_RECOMMEND_PRODUCTS_SUCCESS,FETCH_RECOMMEND_PRODUCTS_FAIL} from './recommendProductsActions'

interface recommendProductsState{
    productList:any[],
    loading:boolean,
    error:string|null
}
const defaultState:recommendProductsState={
    productList:[],
    loading:true,
    error:null
}

export default (state=defaultState,action:RecommendProductAction)=>{
    switch (action.type) {
        case FETCH_RECOMMEND_PRODUCTS_START:
            return {...state,loading:true}
        case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
            return {...state,loading:false,productList:action.payload}
        case FETCH_RECOMMEND_PRODUCTS_FAIL:
            return {...state,loading:false,error:action.payload}    
        default:
            return state
    }
}