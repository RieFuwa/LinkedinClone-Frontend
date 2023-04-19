import './App.css';
import CreateCompany from './components/company/CreateCompany';
import Login from './components/login/Login';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import Error from './pages/Error';

function App() {
  return (
    <div className='min-h-full'>
<CreateCompany></CreateCompany>
      {/* <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">lets</div>
      </main> */}
    </div>
  );
}

export default App;
