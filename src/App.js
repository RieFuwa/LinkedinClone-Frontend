import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';

import Home from './components/Home/Page/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import CreateCompany from './components/Company/Card/CreateCompany';
import CompanyPanel from './components/Company/Page/CompanyPanel';
import AdminPanel from './components/Admin/Page/AdminPanel';
import User from './components/User/Page/User';
import Job from './components/Job/Page/Job';
import Error from './pages/Error';

//min-h-full 
function App() {
  const WithNavbar = () => (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

    </>
  );
  return (
    <div className='min-h-screen font-bodyFont  bg-gradient-to-r from-dark-500 via-dark-700 to-dark-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 '>
      <Router>
        <Routes>
          <Route element={<WithNavbar></WithNavbar>}>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route exact path="/userProfile" element={<User></User>}></Route>
            <Route exact path="/jobPanel" element={<Job></Job>}></Route>
          </Route>
          
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route exact path="/register" element={<Register></Register>}></Route>
          <Route exact path="/createCompany" element={<CreateCompany></CreateCompany>}></Route>
          <Route exact path="/companyPanel" element={<CompanyPanel></CompanyPanel>}></Route>
          <Route exact path="/adminPanel" element={<AdminPanel></AdminPanel>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
