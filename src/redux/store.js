import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { categoriaReducer, subcategoriaReducer, subsubcategoriaReducer, productoReducer, userReducer} from './reducers'


export default createStore(combineReducers({categoriaReducer,subcategoriaReducer,subsubcategoriaReducer,productoReducer,userReducer}),composeWithDevTools(applyMiddleware(thunk)))