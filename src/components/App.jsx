import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Organisms/Header'
import Home from './pages/Home'

const App = ()=>(
  <Router>
    <Header />
    
      <Switch>
        <Route path="/" exact component={Home} />

        
      </Switch>
  </Router>
  )

export default App;
