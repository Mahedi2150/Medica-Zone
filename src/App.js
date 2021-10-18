
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import DoctorDetails from './Components/DoctorDetails/DoctorDetails';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/details/:doctorId">
            <DoctorDetails></DoctorDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Router path="*">
            <NotFound></NotFound>
          </Router>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
