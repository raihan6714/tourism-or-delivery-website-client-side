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

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          {/* navlink route*/}
          <Header></Header>
          <Switch>
            {/* home route */}
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            {/* login route */}
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* notfound route */}
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
