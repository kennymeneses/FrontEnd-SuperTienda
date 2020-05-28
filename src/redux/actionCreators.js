import {GET_ALL_CATEGORIES, GET_ALL_SUBCATEGORIES, GET_ALL_SUBSUBCATEGORIES, GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_SIMILARLY, GET_ALL_USERS,
       GET_CATEGORIE, GET_SUBCATEGORIE, GET_SUBSUBCATEGORIE, GET_PRODUCT, GET_USER} from './actions'

const params = {
                method: 'GET',
                cache: 'default'};

export const getallcategories = ()=>dispatch =>{
    fetch('https://localhost:44369/api/categorias',params).then(response=>{return response.json()}).then(
            response=>{
                ;return dispatch({
                    type: GET_ALL_CATEGORIES,
                    categories:response.data
        })
    })
}


export const getallsubcategories = ()=>dispatch =>{
    fetch('https://localhost:44369/api/subcategorias',params).then(response=>{return response.json()}).then(
            response=>{
                return dispatch({
                    type: GET_ALL_SUBCATEGORIES,
                    subcategories:response.data
        })
    })
}


export const getallsubsubcategories = ()=>dispatch =>{
    fetch('https://localhost:44369/api/subsubcategorias',params).then(response=>{return response.json()}).then(
            response=>{
                return dispatch({
                    type: GET_ALL_SUBSUBCATEGORIES,
                    subsubcategories:response.data
        })
    })
}


export const getallproducts = ()=>dispatch =>{
    fetch('https://localhost:44369/api/productos',params).then(response=>{return response.json()}).then(
            response=>{
                return dispatch({
                    type: GET_ALL_PRODUCTS,
                    products:response.data
        })
    })
}

export const getallproductsx = (string)=>dispatch =>{
    fetch(`https://localhost:44369/api/productos?texto=${string}&idsubsubcategoria=6&tamanio=8&pagina=1`,params).then(response=>{return response.json()}).then(
            response=>{
                return dispatch({
                    type: GET_ALL_PRODUCTS_SIMILARLY,
                    productss: response.data
        })
    })
}

export const getallusers = ()=>dispatch =>{
    fetch('https://localhost:44369/api/usuarios',params).then(response=>{return response.json()}).then(
            response=>{
                return dispatch({
                    type: GET_ALL_USERS,
                    users:response.data
        })
    })
}

export const getcategorie = (id) => dispatch => {
    fetch(`https://localhost:44369/api/categorias/${id}`,params).then(response=>{return response.json()}).then(
            response=>{
                return dispatch({
                    type: GET_CATEGORIE,
                    categorie: response
        })
    })
}

export const getsubcategorie = (id) => dispatch => {
    fetch(`https://localhost:44369/api/subcategorias/${id}`,params).then(response=>{return response.json()}).then(
            response=>{
                return dispatch({
                    type: GET_SUBCATEGORIE,
                    subcategorie: response
        })
    })
}

export const getsubsubcategorie = (id) => dispatch => {
    fetch(`https://localhost:44369/api/subsubcategorias/${id}`,params).then(response=>{return response.json()}).then(
            response=>{
                return dispatch({
                    type: GET_SUBSUBCATEGORIE,
                    subsubcategorie: response
        })
    })
}

export const getproduct = (id) => dispatch => {
    fetch(`https://localhost:44369/api/productos/${id}`,params).then(response=>{return response.json()}).then(
            response=>{
                return dispatch({
                    type: GET_PRODUCT,
                    product: response
        })
    })
}

export const getuser = (id) => dispatch => {
    fetch(`https://localhost:44369/api/usuarios/${id}`,params).then(response=>{return response.json()}).then(
            response=>{
                return dispatch({
                    type: GET_USER,
                    user: response
        })
    })
}
