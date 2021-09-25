import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Product from './Components/Products/Product';
import ProductDetails from './Components/Products/ProductDetails/ProductDetails';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home></Home>
          </Route>
          <Route path='/shop/:id'>
            <Shop></Shop>
          </Route>
          <Route path='/product/:id/:key'>
            <Product></Product>
          </Route>
          <Route path='/details/:id/:key/:storId'>
            <ProductDetails></ProductDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
//#06b8ff
