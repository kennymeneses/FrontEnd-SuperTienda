import {GET_ALL_CATEGORIES, GET_ALL_SUBCATEGORIES, GET_ALL_SUBSUBCATEGORIES, GET_ALL_PRODUCTS,GET_ALL_PRODUCTS_SIMILARLY, GET_ALL_USERS,
       GET_CATEGORIE, GET_SUBCATEGORIE, GET_SUBSUBCATEGORIE, GET_PRODUCT, GET_USER} from "./actions"

export const categoriaReducer = (state = {}, action) => {
    if(action.type === GET_ALL_CATEGORIES){
        console.log('the reducer is executed')
        return {
            ...state,
            categories: action.categories
        }
    }

    if(action.type === GET_CATEGORIE){
        return {
            ...state,
            categorie: action.categorie
        }
    }
    return state
}

export const subcategoriaReducer = (state = {}, action) => {
    if(action.type === GET_ALL_SUBCATEGORIES){
        return {
            ...state,
            subcategories : action.subcategories
        }
    }

    if(action.Type === GET_SUBCATEGORIE){
        return {
            ...state,
            subcategorie : action.subcategorie
        }
    }

    return state
}

export const subsubcategoriaReducer = (state={}, action) => {
    if(action.type === GET_ALL_SUBSUBCATEGORIES){
        return {
            ...state,
            subsubcategories : action.subsubcategories
        }
    }

    if(action.type === GET_SUBSUBCATEGORIE){
        return {
            ...state,
            subsubcategorie : action.subsubcategorie
        }
    }

    return state
}

export const productoReducer = (state={}, action) =>{
    if(action.type ===GET_ALL_PRODUCTS){
        return {
            ...state,
            products : action.products
        }
    }

    if(action.type ===GET_ALL_PRODUCTS_SIMILARLY){
        return {
            ...state,
            productss :action.productss
        }
    }

    if(action.type === GET_PRODUCT){
        return {
            ...state,
            product : action.product
        }
    }

    return state 
}

export const userReducer = (state={}, action )=>{
    if(action.type === GET_ALL_USERS){
        return {
            ...state,
            users : action.users
        }
    }

    if(action.type === GET_USER){
        return {
            ...state,
            user : action.user
        }
    }

    return state
}