import './App.css';
import "./style.css";
import Home from "./Home";
import {BrowserRouter, Route, Switch  } from "react-router-dom";
import Contact from './Contact';
import Machine from './Machine';
import Warehouse from './Warehouse';
import About from './About';

function App() {

  return (
    <div>
                                                                {/* Routing has been done here to different urls */}
      <BrowserRouter>                                          
      <Switch>
      <Route exact path='/Frozen-World' component={Home} />                             
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/machine' component={Machine} />
      <Route exact path='/warehouse' component={Warehouse} />
      <Route exact path='/about' component={About} />
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
