import './App.css';
import CreateCompany from './components/company/CreateCompany';
import Login from './components/login/Login';
import CreatePost from './components/post/CreatePost';
import PostCard from './components/post/PostCard';
import AdCard from './components/ScreenCard/AdCard';
import UserProfileCard from './components/ScreenCard/UserProfileCard';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import Error from './pages/Error';
//min-h-full 
function App() {
  return (
    <div className='min-h-screen font-bodyFont  bg-gradient-to-r from-dark-500 via-dark-700 to-dark-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 '>
      <Navbar></Navbar>
      <main>
        <div className="flex mx-auto max-w-7xl py-6 sm:px-6 lg:px-5  ">
     
          <UserProfileCard ></UserProfileCard>
          <div class="grid-cols-1 mt-20 sm:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1  mx-5">
          <CreatePost></CreatePost>
          <PostCard></PostCard>
          </div>
          
          <AdCard></AdCard>
        </div>
      </main>
    </div>
  );
}

export default App;
