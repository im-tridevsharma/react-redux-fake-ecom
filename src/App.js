import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
import ProductListing from "./pages/ProductListing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route>404 Not found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
