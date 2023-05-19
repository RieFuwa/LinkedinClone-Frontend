import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Outlet } from "react-router-dom";

import Home from './components/Home/Page/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import CompanyPanel from './components/Company/Page/CompanyPanel';
import AdminPanel from './components/Admin/Page/AdminPanel';
import User from './components/User/Page/User';
import Job from './components/Job/Page/Job';
import Error from './pages/Error';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import UserApplyJob from './components/User/Page/UserApplyJob';
import Company from './components/Company/Page/Company';
import ViewJob from './components/Job/Card/ViewJob';
import SideBar from './components/Company/Header/SideBar';
import SideBar2 from './components/Admin/Header/SideBar';

import CreateJob from './components/Company/Card/CreateJob/CreateJob';
import CompanyStatistics from './components/Company/Page/CompanyStatistics';
import CompanyViewJob from './components/Company/Page/CompanyViewJob';
import CompanyCreate from './components/Company/Page/CompanyCreate';
import AdminAllUser from './components/Admin/Page/AdminAllUser';
import AdminAllCompany from './components/Admin/Page/AdminAllCompany';
import AdminAllReport from './components/Admin/Page/AdminAllReport';
import AdminStatistics from './components/Admin/Page/AdminStatistics';
import AdminManager from './components/Admin/Page/AdminManager';

//min-h-full 
function App() {
  const WithNavbar = () => (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

    </>
  );

  const WithSideBarAdmin = () =>
  (
    localStorage.getItem("signedUserId") != null ?
      <div class="flex flex-row">
        <div class=" ">
          <SideBar2></SideBar2>
        </div>
        <div class="grow">
          <Outlet />
        </div>

      </div>
      :
      <Error></Error>
  )

  const WithSideBar = () =>
  (
    localStorage.getItem("ROLE_MANAGER") == ("true") ?
      <div class="flex flex-row">
        <div class=" ">
          <SideBar></SideBar>
        </div>
        <div class="grow">
          <Outlet />
        </div>

      </div>
      :
      <Error></Error>
  )



  return (
    <div className='min-h-screen font-bodyFont  bg-gradient-to-r from-dark-500 via-dark-700 to-dark-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 '>
      <Router>
        <Routes>
          <Route element={<WithNavbar></WithNavbar>}>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route exact path="/userProfile/:userId" element={<User></User>}></Route>
            <Route exact path="/userApplyJob/:userId" element={<UserApplyJob></UserApplyJob>}></Route>
            <Route exact path="/companyProfile/:companyId" element={<Company></Company>}></Route>
            <Route exact path="/viewJob/:jobId" element={<ViewJob></ViewJob>}></Route>
            <Route exact path="/jobPanel" element={<Job></Job>}></Route>
            <Route exact path="/userApplyJob" element={<UserApplyJob></UserApplyJob>}></Route>
          </Route>

          <Route element={<WithSideBar></WithSideBar>}>
            <Route exact path="/companyPanel" element={<CompanyPanel></CompanyPanel>}></Route>
            <Route exact path="/companyPanelCreateJob" element={<CreateJob></CreateJob>}></Route>
            <Route exact path="/companyPanelStatistics" element={<CompanyStatistics></CompanyStatistics>}></Route>
            <Route exact path="/companyPanelViewJob" element={<CompanyViewJob></CompanyViewJob>}></Route>
          </Route>

          <Route element={<WithSideBarAdmin></WithSideBarAdmin>}>
            <Route exact path="/adminPanel" element={<AdminPanel></AdminPanel>}></Route>
            <Route exact path="/allUser" element={<AdminAllUser></AdminAllUser>}></Route>
            <Route exact path="/allCompany" element={<AdminAllCompany></AdminAllCompany>}></Route>
            <Route exact path="/allReport" element={<AdminAllReport></AdminAllReport>}></Route>
            <Route exact path="/adminManager" element={<AdminManager></AdminManager>}></Route>
            <Route exact path="/adminPanelStatistics" element={<AdminStatistics></AdminStatistics>}></Route>
            <Route exact path="/companyPanelViewJob" element={<CompanyViewJob></CompanyViewJob>}></Route>
          </Route>

          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route exact path="/register" element={<Register></Register>}></Route>
          <Route exact path="/createCompany" element={<CompanyCreate></CompanyCreate>}></Route>
          <Route exact path="/companyPanel" element={<CompanyPanel></CompanyPanel>}></Route>
          <Route exact path="/adminPanel" element={<AdminPanel></AdminPanel>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
