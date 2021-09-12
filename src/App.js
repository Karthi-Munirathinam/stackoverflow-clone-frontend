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
import { useEffect, useState } from 'react';
import PostQuestions from './components/PostQuestions';

function App() {
  const [login, setlogin] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem("app-token")) {
      setlogin(true);
    } else {
      setlogin(false);
    }
  }, [])
  const handleLogout = () => {
    window.localStorage.removeItem("app-token");
    setlogin(false);
  }

  return (
    <Router>
      <Navbar login={login} handleLogout={handleLogout} />
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login setlogin={setlogin} />
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route path="/questions" exact>
          <Questions />
        </Route>
        <Route path="/postquestions" exact>
          <PostQuestions />
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
