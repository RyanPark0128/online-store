import './App.css';
import React, { useContext, useEffect } from 'react'
import Main from './pages/Main'
import Product from './pages/Product'
import Item from './pages/Item'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import CheckoutPage from './pages/CheckoutPage'
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { CognitoContext } from './context/Cognito'
import UserRedirect from './helper/Route'
import Paid from './pages/Paid'

function App() {
  const { user } = useContext(CognitoContext)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
        <UserRedirect user={user} path="/signup">
          <Signup />
        </UserRedirect>
        <UserRedirect user={user} path="/signin">
          <Signin />
        </UserRedirect>
        <Route exact path="/checkout">
          <CheckoutPage />
        </Route>
        <Route exact path="/item/:id">
          <Item />
        </Route>
        <Route exact path="/success">
          <Paid />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
