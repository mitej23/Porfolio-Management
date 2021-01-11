import "./App.css";
import Investments from "./pages/investments/investments.component";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GraphPage from "./pages/graph/graph.component";
import AddFund from "./pages/add/add.component";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Investments} />
        <Route path="/add" component={AddFund} />
        <Route path="/fund/:fundName" component={GraphPage} />
      </div>
    </Router>
  );
}

export default App;
