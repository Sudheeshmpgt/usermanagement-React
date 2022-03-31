
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './components/user/login';
import Signup from './components/user/signup';
import Dashboard from './components/user/dashboard';
import Adminlogin from './components/admin/adminLogin';
import Update from './components/admin/update';
import Adduser from './components/admin/adduser';
import User from './store/usercontext';
import AdminDashboard from './components/admin/admindashboard';
import Edit from './store/editcontext';



function App() {

  return (

    <div className="App">
      
        <User>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/admin' element={<Adminlogin />} />
            <Route path='/admindashboard' element={<AdminDashboard />} />
            <Route path='/update' element={<Update />} />
            <Route path='/adduser' element={<Adduser />} />
          </Routes>
        </User>
    </div>

  );
}

export default App;

