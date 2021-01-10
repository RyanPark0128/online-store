import './App.css';
import Main from './pages/Main'
import Product from './pages/Product'
import Item from './pages/Item'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import CheckoutPage from './pages/CheckoutPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/product">
          <Product/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/signin">
          <Signin/>
        </Route>
        <Route path="/checkout">
          <CheckoutPage/>
        </Route>
        <Route path="/item">
          <Item/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
