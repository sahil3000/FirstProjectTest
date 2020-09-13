import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Services from './service/service';
import Contact from './contact/Contact';
import Navbar from './Navbar';
import Footer from './Footer';

const App = ()=>{
  return(
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/contact" component={Contact}/>
        <Redirect to='/' />
      </Switch>
      <Footer/>
    </div>
  );
}


export default App;
