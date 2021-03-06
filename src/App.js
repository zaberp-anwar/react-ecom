import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
//Router
//import logo from "./logo.svg";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList'; 
import Details from './components/Details';
import Cart from './components/cart';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component{
  render() {
    return (
      <React.Fragment> 
        <Navbar />
        <Switch>
          <Route exact  path="/" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>  
        <Modal />
      </React.Fragment>
    );
  }
}
export default App;
// <div className="col-6"> <span>  <i className="fa fa-spinner fa-spin">wait</i></span></div>
