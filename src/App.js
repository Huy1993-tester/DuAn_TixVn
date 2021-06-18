import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./page/home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
