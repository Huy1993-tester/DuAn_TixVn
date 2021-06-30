import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./page/home";
import Dashboard from "./admin/page/dashboard/dashboard.page";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/admin/:feature" component={Dashboard} />
        <Route path="/admin" component={Dashboard} />
        {/* Page not found */}
        <Route path="">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
