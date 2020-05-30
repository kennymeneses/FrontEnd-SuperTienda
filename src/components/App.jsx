import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Public from './Routes/Public'
import Protected from './Routes/Protected'
import Header from './Organisms/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import ResultadoB from './pages/ResultadoB'

const App = ()=>(
  <Router>
    <Header />
    
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path ="/busqueda" component={ResultadoB} />

        <Public path="/login" exact component={Login}/>
        
      </Switch>
  </Router>
  )

export default App;
