import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import classes from './App.css';



class App extends Component {
  render() {
    return (
     <div>
  
       <h1 className={classes.elegantshadow}>Burger Builder App</h1>
       <Layout>
       <BurgerBuilder></BurgerBuilder>
       </Layout>
     </div>
    );
  }
}

export default App;
