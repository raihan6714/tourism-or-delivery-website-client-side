import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Shared/Login/Login';
import NotFound from './components/Shared/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import RoomDetails from './components/Home/RoomDetails/RoomDetails';
import Dashboard from './components/Dashboard/Dashboard';
import AddServices from './components/Dashboard/AddServices/AddServices';
import ManageOrders from './components/Dashboard/ManageOrders/ManageOrders';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import AboutUs from './components/Home/AboutUs/AboutUs';
import ContuctUs from './components/Home/ContuctUs/ContuctUs';
import AllServices from './components/Home/AllServices/AllServices';
import PrivateRoute from './components/Shared/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          {/* navlink*/}
          <Header></Header>
          <Switch>
            {/* home*/}
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            {/* about */}
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>

            {/* contuct */}
            <Route path="/contact">
              <ContuctUs></ContuctUs>
            </Route>

            {/* all services */}
            <PrivateRoute path="/allServices">
              <AllServices></AllServices>
            </PrivateRoute>

            {/* login */}
            <Route path="/login">
              <Login></Login>
            </Route>

            {/* add new service */}
            <Route path="/addnew">
              <AddServices></AddServices>
            </Route>

            {/* mnage order */}
            <Route path="/mnageorder">
              <ManageOrders></ManageOrders>
            </Route>

            {/* my order */}
            <Route path="/myorder">
              <MyOrders></MyOrders>
            </Route>

            {/* dashboard */}
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>

            {/* room details */}
            <PrivateRoute path="/serviceDetails/:id">
              <RoomDetails></RoomDetails>
            </PrivateRoute>

            {/* notfound */}
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
            {/* booking */}
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
