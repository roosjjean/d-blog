import BlogDetails from "./BlogDetails";
import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom/cjs/react-router-dom.min";
import NotFound from "./NotFound";

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
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
 
export default App;