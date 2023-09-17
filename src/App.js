import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
 
export default App;