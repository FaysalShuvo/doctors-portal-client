import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import { createContext, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AllPatients from "./components/AllPatients/AllPatients";
import AddDoctor from "./components/AddDoctor/AddDoctor";
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute'

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <PrivateRoute path="/dashboard/appointment">
            <Dashboard />
          </PrivateRoute>
          <Route path="/dashboard/all-patient">
            <AllPatients />
          </Route>

          <Route path="/add-doctor">
          <AddDoctor/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
