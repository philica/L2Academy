import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import { useLogin } from './pages/Login/hooks/useLogin';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// signup page
import { Signup } from "./pages/Signup";
// login page
import { Login } from "./pages/Login"
//home page
import { Home } from "./pages/Home"
//course single page
import { CourseSingle } from "./pages/CourseSingle"
//import student dashboard
import { StudentDashboard } from "./pages/dashboard/student"
// import profile page
import { Profile } from "./pages/Profile"
import ProfileEdit from './pages/Profile/component/ProfileEdit';
import ProfileSecurity from './pages/Profile/component/ProfileSecurity';
import ProfileSocial from './pages/Profile/component/ProfileSocial';
import ProfileDelete from './pages/Profile/component/ProfileDelete';  

//library css
import './assets/fonts/feather/feather.css';
import './assets/libs/bootstrap-icons/font/bootstrap-icons.css';
import './assets/libs/@mdi/font/css/materialdesignicons.min.css';
import './assets/libs/simplebar/dist/simplebar.min.css';

//theme css
import './assets/css/theme.min.css'


function App() {

  
  const loggeduser = useSelector(state => state.login);
  // handle login functionality 
  const { loginFunction } = useLogin();
  
  
    useEffect(() => {
      
        console.log('user logged', loggeduser.user)
      // Dispatch an action or perform any initialization here
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        console.log('The user logged in is', user.email)
        //log user
        loginFunction(user)
      }
      
      console.log('Root component mounted')
    }, []);


  return (
    <Router>
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/course" element={<CourseSingle />} />
        <Route exact path="/dashboard/student" element={<StudentDashboard />} />
        <Route exact path="/profile" element={<Profile />} >
          <Route exact path="edit" element={<ProfileEdit />} />
          <Route exact path="security" element={<ProfileSecurity />} />
          <Route exact path="social" element={<ProfileSocial />} />
          <Route exact path="delete" element={<ProfileDelete />} />
        </Route>
      </Routes>

    </ Router>
  );
}

export default App;
