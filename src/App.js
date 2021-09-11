// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import ForgotPassword from './components/Forgotpassword';
import Questions from './components/Questions';
import Homepage from './components/Homepage';
import UserProfile from './components/UserProfile';
import EditProfile from './components/EditProfile';
import Company from './components/Company';
import SearchTag from './components/SearchTag';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route path="/questions" exact>
          <Questions />
        </Route>
        <Route path="/userprofile" exact>
          <UserProfile />
        </Route>
        <Route path="/editprofile" exact>
          <EditProfile />
        </Route>
        <Route path="/tags" exact>
          <SearchTag />
        </Route>
        <Route path="/company" exact>
          <Company />
        </Route>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
