import Navbare from "./Navbare";
import Home from "./Home";
import Create from "./Create";
import BlogsDetale from "./BlogsDetale";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const links = "https//:www.google.com";
  const title = "first app";
  const authname = "sir hader bahi";
  return (
    <Router>
      <div className="App">
        <Navbare />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blog/:id">
              <BlogsDetale />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
