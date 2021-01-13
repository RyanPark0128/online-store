import './App.css';
import React, { useState, useContext, useEffect } from 'react'
import Main from './pages/Main'
import Product from './pages/Product'
import Item from './pages/Item'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import CheckoutPage from './pages/CheckoutPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CognitoContext } from './context/Cognito'
import UserRedirect from './helper/Route'

function App() { 
  const [user, setUser] = useState(false)
  const { getSession } = useContext(CognitoContext)

  useEffect(() => {
    getSession()
    .then(session => {
        console.log("session: ", session)
        setUser(true)
    })
  }, [])
  
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
        </Switch>
      </Router>
  );
}

export default App;
