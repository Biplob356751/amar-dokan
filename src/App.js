import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Nav from './Components/NavBar/Nav'
import Product from './Components/Products/Product';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path='/' exact>
            <Home></Home>
          </Route>
          <Route path='/shop/:id'>
            <Shop></Shop>
          </Route>
          <Route path='/product/:key'>
            <Product></Product>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
//#06b8ff
