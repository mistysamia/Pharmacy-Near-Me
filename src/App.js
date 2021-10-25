import { faHome } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import AuthProvider from './context/AuthProvider';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Pharmacy from './components/Pharmacy/Pharmacy';
import Ambulance from './components/Ambulance/Ambulance';
import Health from './components/Health/Health';
import Register from './components/Register/Register';
import { registerVersion } from '@firebase/app';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/pharmacy">
              <Pharmacy></Pharmacy>
            </PrivateRoute>
            <PrivateRoute path="/ambulance">
              <Ambulance></Ambulance>
            </PrivateRoute>
            <PrivateRoute path="/health">
              <Health></Health>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer> 
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
