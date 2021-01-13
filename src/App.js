import './App.css';
import Main from './pages/Main'
import Product from './pages/Product'
import Item from './pages/Item'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import CheckoutPage from './pages/CheckoutPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cognito } from './context/Cognito'

function App() {
  return (
    <Cognito>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/checkout">
            <CheckoutPage />
          </Route>
          <Route exact path="/item/:id">
            <Item />
          </Route>
        </Switch>
      </Router>
    </Cognito>
  );
}

export default App;
