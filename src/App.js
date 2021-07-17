import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./page/home";
import Dashboard from "./admin/page/dashboard/dashboard.page";
import { Detail } from "./page/detail";
import Footer from "./componnet/footer";
import Booking from "./page/booking";
import Chairing from "./page/chairing";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/detail/:maPhim">
          <Detail />
          <Footer />
        </Route>
        <Route path="/chairing/:maLichChieu">
          <Chairing />
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
