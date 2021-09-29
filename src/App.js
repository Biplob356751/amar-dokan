import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddToCart from './Components/AddToCart/AddToCart';
import Home from './Components/Home/Home';
import Product from './Components/Products/Product';
import ProductDetails from './Components/Products/ProductDetails/ProductDetails';
import Shop from './Components/Shop/Shop';

export const CartContext = createContext();
function App() {

  const [addCart, setAddCart] = useState([]);
  return (
    <CartContext.Provider value={[addCart, setAddCart]}>
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
            <Route path="/addToCart">
              <AddToCart></AddToCart>
            </Route>
          </Switch>
        </Router>
      </div>
    </CartContext.Provider>
  );
}

export default App;
//#06b8ff
