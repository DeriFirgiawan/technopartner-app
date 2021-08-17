import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../Page/Home";
import LoginPage from "../Page/Login";
import MenuPage from "../Page/Menu";

export default function Routers () {
  return (
    <Router>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/menu" component={MenuPage} />
    </Router>
  )
}
