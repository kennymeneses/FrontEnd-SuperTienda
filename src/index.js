import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './redux/store'
import { Provider } from 'react-redux'
import { getallcategories, getallsubcategories, getallsubsubcategories } from './redux/actionCreators'


store.dispatch(getallsubcategories())
store.dispatch(getallsubsubcategories())
store.dispatch(getallcategories())

ReactDOM.render(
<Provider store ={store}>
    <App />
</Provider>
,document.getElementById('root'));


