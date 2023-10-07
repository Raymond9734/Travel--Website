import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'


function App() {
  return (
  <>
  <Router>
    <Navbar/>
    <Switch>
      <Route path='/Home' exact component={Home}/>
      <Route path='/Services' exact component={Services}/>
      <Route path='/Products' exact component={Products}/>
      <Route path='/SignUp' exact component={SignUp}/>
    </Switch>
   </Router> 
  </> 
  );
}

export default App;
