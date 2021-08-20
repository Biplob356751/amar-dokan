import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import Nav from './Components/NavBar/Nav'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path='/' exact>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
//#06b8ff
// "catagory": [{
//     "img": "https://i.pinimg.com/564x/21/9b/84/219b84e1d61bd42a01f193eb19545c0b.jpg",
//     "name": "BIPLOB STORE",
//     "schedule": "08 AM to 10PM"
// }] 